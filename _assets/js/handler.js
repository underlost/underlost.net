$(function () {
  var setTitle = function (title, href) {
      title = 'Tyler Rilling / ' + title;
      href = href || '';
      history.pushState({ id: href }, title, href.replace('#', '/'));
      document.title = title;
    }, scroll = function (url, speed) {
      var href = typeof url == 'string' ? url : $(this).attr('href'), target = $(href), offset = target.offset(), title = target.find('h1').text();
      if (typeof url == 'number') {
        target = [{ id: '' }];
        offset = { top: url };
      }
      //  And move the element
      if (offset.top) {
        //  Set the new URL and title
        setTitle(title, href);
        $('html, body').animate({ scrollTop: offset.top }, speed);
      }
      return false;
    };
  //  Handle existing URL fragments on load
  if (location.pathname.length > 1) {
    scroll(location.pathname.replace('/', '#'), 0);
  }
  $('a#logo').click(function () {
    $('html,body').animate({ scrollTop: 0 });
    return false;
  });
  //  Handle internal link clicks
  $('a[href^=#]:not(#logo)').click(scroll);
  //  Work panels
  var parent = $('#work'), panels = parent.children('div');
  panels.each(function () {
    $(this).css('width', 100 / panels.length + '%');
  });
  parent.css('width', panels.length * 100 + '%');
  //  Bind the keyboards
  $(document).keyup(function (e) {
    var actions = {
        37: function () {
          var prev = panels.filter('.active').prev().not('small');
          if (prev.length > 0) {
            prev.siblings().removeClass('active');
            setTitle(prev.find('h1').text(), prev[0].id);
            setTimeout(function () {
              prev.addClass('active');
            }, 250);
            parent.animate({ left: '+=100%' }).css('background-color', '#' + prev.attr('data-background'));
          }
        },
        39: function () {
          var next = panels.filter('.active').next();
          if (next.length > 0) {
            next.siblings().removeClass('active');
            setTitle(next.find('h1').text(), next[0].id);
            setTimeout(function () {
              next.addClass('active');
            }, 250);
            parent.animate({ left: '-=100%' }).css('background-color', '#' + next.attr('data-background'));
          }
        },
        40: function () {
          var w = $(window), height = w.height() * panels.children('div').length, h = w.height() + w.scrollTop();
          if (h < height) {
            scroll(h);
          }
        },
        38: function () {
          var w = $(window);
          $('html,body').animate({ scrollTop: w.scrollTop() - w.height() });
        }
      };
    //  Call a function based on keycode
    if (actions[e.which]) {
      actions[e.which]();
    }
    e.preventDefault();
    return false;
  });
  //  Fix crazy resize bugs
  $(window).resize(function () {
    var m = $(this), h = m.height(), s = m.scrollTop();
    if (h - s < h / 2) {
      m.scrollTop(h);
    }
    $('html,body').animate({ scrollTop: s });
  });
  //  cats slideshow
  var kitty = function () {
    var slides = $('#cats li'), active = slides.filter('.active');
    if (!active.length) {
      active = slides.last();
    }
    active.addClass('active');
    var next = active.next().length ? active.next() : slides.first();
    next.css('opacity', 0).addClass('active').animate({ opacity: 1 }, function () {
      active.removeClass('active last-active');
    });
  };
  setInterval(kitty, 3000);
  $.easing.swing = function (x, t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  };
  $.fx.speeds._default = 700;
});
try {
  Typekit.load();
} catch (e) {
}
