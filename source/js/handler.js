/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
    particles: {
        color: '#45aab8',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: .75,
        size: 1,
        size_random: true,
        nb: 200,
        line_linked: {
            enable_auto: true,
            distance: 110,
            color: '#1d4c5f',
            opacity: .5,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 3
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});

/*
* Add a CSS3 animation class to an element only when it's in the viewport.
* The class is taken from the attribute data-animate.
* es: data-animate='className' become class='className' when in viewport
*
*/
function animateClasses(){
    var top = $(window).scrollTop()+$(window).height();
    $('[data-animate]').each(function(){
        if($(this).offset().top < top){
            $(this).addClass($(this).attr('data-animate'));
        }
    });
};

//  cats slideshow
function kittySlide() {
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
};


(function($){
    //define methods of the plugin
    var methods = {
        init: function(options){

            //set up some default values
            var defaults = {
                'side' : 'left'
            }

            //for each element with vLine applied
            return this.each(function(){

                //override defaults with user defined options
                var settings = $.extend({}, defaults, options);

                //cache variable for performance
                var $this = $(this);

                //wrap the UL with a positioned object just in case
                $this.wrap('<div style="position:relative;"></div>');

                //test to see if element exists, if not, append it
                if(!$('.vLine').length){

                    //parent is the ul we wrapped
                    //insert the vLine element into the document
                    $this.parent().append($('<div style="position:absolute;top:'+$this.position().top+'px;" class="vLine"></div>'));
                    $('.vLine').css('right', '0');

                }

                //define the hover functions for each li
                $this.find('li').hover(function(e){
                    $('.vLine').stop().animate({
                        top: $(this).position().top
                    },200);
                }, function(e){
                    //we want to reset the line if this is met
                    if(['UL', 'LI'].indexOf(e.toElement.tagName) == -1){
                        $('.vLine').stop().animate({
                            top: '0px'
                        });
                    }
                });
            });
        }
    }

    //make it a function!
    $.fn.vLine = function( method ) {
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.vLine' );
        }
    };
})(jQuery);





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
        animateClasses();
        $('.sections-nav').vLine();

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
            .fadeOut(500)
            .promise()
            .done(function () {
                $content.html(response.$content).fadeIn(500);
                // animateClasses();
                 $('.sections-nav').vLine();
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
