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

function portfolioShowcase(){
    $("ul#recent-portfolio li a").on('mouseover', function() {
        $("ul#recent-portfolio li a").not(this).animate({
            width: "105px"
        }, {
            queue: false,
            duration: 400
        });
        $("ul#recent-portfolio li a:last").not(this).animate({
            width: "106px"
        }, {
            queue: false,
            duration: 400
        });
        $("ul#recent-portfolio li a:first").not(this).animate({
            width: "106px"
        }, {
            queue: false,
            duration: 400
        });
        $("ul#recent-portfolio li a").not(this).animate({
            opacity: ".9"
        }, {
            queue: false,
            duration: 400
        });
        if ($(this).hasClass('last')) {
            $(this).animate({
                width: "250px"
            }, {
                queue: false,
                duration: 400
            });
        } else {
            $(this).animate({
                width: "249px"
            }, {
                queue: false,
                duration: 400
            });
        };
        $(this).animate({
            opacity: "1.0"
        }, {
            queue: false,
            duration: 400
        });
        $('#recent-portfolio-container h2').html($(this).attr('alt'));
        $('#recent-portfolio-container h2').addClass('active');
    });
    if ($("div.portfolio-picks ul#recent-portfolio li a").length > 0) {
        $("div.portfolio-picks ul#recent-portfolio li a").on('mouseout', function() {
            $('#recent-portfolio-container h2').removeClass('active');
            $('#recent-portfolio-container h2').html('Selected Works');
            $("div.portfolio-picks ul#recent-portfolio li a:first").mouseover()
        });
    } else {
        $("ul#recent-portfolio li a").on('mouseout', function(e) {
            $('#recent-portfolio-container h2').removeClass('active');
            $('#recent-portfolio-container h2').html('Selected Works');
            $("ul#recent-portfolio li a").animate({
                opacity: "1.0"
            }, {
                queue: false,
                duration: 400
            });
            $("ul#recent-portfolio li a").animate({
                width: "100px"
            }, {
                queue: false,
                duration: 400
            });
            $("ul#recent-portfolio li a:last").animate({
                width: "101px"
            }, {
                queue: false,
                duration: 400
            });
            $("ul#recent-portfolio li a:first").animate({
                width: "101px"
            }, {
                queue: false,
                duration: 400
            });
        });
    }
    $("div.portfolio-picks ul#recent-portfolio li a:first").mouseover()
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
                // $this.wrap('<div style="position:relative;"></div>');

                //test to see if element exists, if not, append it
                if(!$('.vLine').length){

                    //parent is the ul we wrapped
                    //insert the vLine element into the document
                    $this.parent().append($('<div style="position:absolute;top: -30px;" class="vLine"></div>'));
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
                            top: '-30px'
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


(function( $ ) {
    $.fn.activeNavigation = function(selector) {
        var pathname = window.location.pathname
        var hrefs = []
        $(selector).find("a").each(function(){
            if (pathname.indexOf($(this).attr("href")) > -1)
                hrefs.push($(this))
        })
        if (hrefs.length) {
            hrefs.sort(function(a,b){
                return b.attr("href").length - a.attr("href").length
            })
            hrefs[0].closest('li').addClass("active").siblings().removeClass("active");
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
        // portfolioShowcase();
        $('.sections-nav').vLine();
        $(".lithium-lettering").lettering();
        $(document).activeNavigation(".sections-nav");


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
            var url = window.location.pathname;

            if (response.title.length) {
                $('title').last().html(response.title);
            }

            $content
            .fadeOut(500)
            .promise()
            .done(function () {
                $content.html(response.$content).fadeIn(500);
                animateClasses();
                // portfolioShowcase();
                $('.sections-nav').vLine();
                $(".lithium-lettering").lettering();
                $(document).activeNavigation(".sections-nav");

                //nav
                // if (url.indexOf('/about') !== -1) { $('.site-nav-about').addClass('active');}
                // if (url.indexOf('/portfolio') !== -1) { $('.site-nav-portfolio').addClass('active');}
                // if (url.indexOf('/contact') !== -1) { $('.site-nav-contact').addClass('active');}

            });
        }).fail(function () {
            document.location.href = url;

            return false;
        });
    });
})(jQuery);
