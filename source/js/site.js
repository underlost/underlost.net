(function ($) {
  var $classes = {
    FsrHolder: 'fsr-holder',
    FsrImage: 'image-full',
  };
  $(document).ready(function() {
    //console.log('Ready');
    //RenderBackground.init();
    $(document).activeNavigation(".sections-nav");
    animateClasses();
    fullscreener($('.' + $classes.FsrImage));
    $('.content-section').removeClass("hidden").addClass("fadeIn");
    //SectionFullpage();

    $('.burger-icon__wrap, #site-menu .close-btn, .pjax').on('click', function(e) {
     e.preventDefault();
     //console.log('burger icon trigger');
     if ($("#site-menu").hasClass("contact_form--open")) {
       $('#site-menu').removeClass('contact_form--open');
     } else {
       $('#page-wrap').toggleClass('nav__sidebar--open');
     }
    });
    if($(".project-carousel").length){
      $('.project-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        nav: true,
        navText: ['<svg width="20px" height="32px" viewBox="0 0 20 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="#313E47"><polygon id="Path" points="3.45832136 32 0 28.6553931 13.0880388 16 0 3.34460687 3.45832136 0 20 16.0000573"></polygon></g></svg>',
        '<svg width="20px" height="32px" viewBox="0 0 20 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="#313E47"><polygon id="Path" points="3.45832136 32 0 28.6553931 13.0880388 16 0 3.34460687 3.45832136 0 20 16.0000573"></polygon></g></svg>'],
        margin: 0,
        rewind: false,
        dots: false,
        items: 1,
      });
    }
  });

  //pjax
  $(document).on('pjax:success', function () {
    //console.log('state change');
    $(document).activeNavigation(".sections-nav");
    animateClasses();
    fullscreener($('.' + $classes.FsrImage));
    $('.content-section').removeClass("hidden").addClass("fadeIn");
  });

  // Sets a image as a background on its parent.
  function fullscreener(_container) {
    _container.each(function () {
      var _this = $(this);
      //debugger;
      var _src = _this.attr('src');
      var _srcset = _this.attr('srcset');
      if (_srcset != null) {
        var screenWidth = $win.width();
        var src_arr = _parse_srcset(_srcset);
        for (var i in src_arr) {
          if (src_arr[i].width >= screenWidth) {
            _src = src_arr[i].url;
            break;
          }
        }
      }
      _this.parent().addClass($classes.FsrHolder).attr('style', 'background-image: url(' + _src + ');');
    });
  }

  /*
  * Add a CSS3 animation class to an element only when it's in the viewport.
  * The class is taken from the attribute data-animate.
  * es: data-animate='className' become class='className' when in viewport
  */
  function animateClasses(){
    var top = $(window).scrollTop()+$(window).height();
    $('[data-animate]').each(function(){
      if($(this).offset().top < top){
        $(this).addClass($(this).attr('data-animate'));
      }
    });
  };
})(jQuery);

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
var pjax = new Pjax({
  elements: "a.pjax", // default is "a[href], form[action]"
  selectors: ["title", ".site-content"],
  cacheBust: false
})
