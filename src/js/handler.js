$(function () {

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
});


(function ($) {
    var $document = $(document);

    if (!History.enabled) {
        return false;
    }

    var root = History.getRootUrl();

    $.expr.filters.internal = function (elem) {
        return (elem.hostname == window.location.hostname && /(\/|\.html)$/i.test(elem.pathname)) || false;
    };

    function find_all($html, selector) {
        return $html.filter(selector).add($html.find(selector));
    }

    function parse_html(html) {
        return $($.parseHTML(html, document, true));
    }

    function parse_response(html) {
        var
            head = /<head[^>]*>([\s\S]+)<\/head>/.exec(html),
            body = /<body[^>]*>([\s\S]+)<\/body>/.exec(html),

            $head = head ? parse_html(head[1]) : $(),
            $body = body ? parse_html(body[1]) : $(),

            title = $.trim(find_all($head, 'title').last().html()),
            $content = $.trim(find_all($body, '#content').first().html());

        return {
            'title': title,
            '$content': $content
        }
    }

    $document.ready(function () {
        $document.on('click', 'a:internal', function (event) {
            if (event.which == 2 || event.ctrlKey || event.metaKey) {
                return true;
            }

            History.pushState(null, null, $(this).attr('href'));
            event.preventDefault();

            return false;
        });
    });

    $(window).on('statechange', function () {
        var
            url = History.getState().url,
            rel = url.replace(root, '/');

        $.get(rel).done(function (date) {
            var response = parse_response(date);

            if (!response.$content.length) {
                document.location.href = url;

                return false;
            }

            var $content = $('#content');

            if (response.title.length) {
                $('title').last().html(response.title);
            }

            $content
                .slideUp(500)
                .promise()
                .done(function () {
                    $content
                        .html(response.$content)
                        .slideDown(500);
                });
        }).fail(function () {
            document.location.href = url;

            return false;
        });
    });

    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#panel-prev-link";
    // RIGHT
    keymap[ 39 ] = "#panel-next-link";

    $(document).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
})(jQuery);
