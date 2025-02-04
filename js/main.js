;
(function() {

    'use strict';



    // iPad and iPod detection	
    var isiPad = function() {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function() {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };


    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };

    var burgerMenu = function() {

        $('.js-nav-toggle').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('menu-show')) {
                $('body').removeClass('menu-show');
                $('#main-nav > .js-nav-toggle').removeClass('show');
            } else {
                $('body').addClass('menu-show');
                setTimeout(function() {
                    $('#main-nav > .js-nav-toggle').addClass('show');
                }, 900);
            }
        })
    };

    // Animations

    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function() {

                    $('body .animate-box.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };


    var counter = function() {
        $('.js-counter').countTo({
            formatter: function(value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };

    var counterWayPoint = function() {
        if ($('#counter').length > 0) {
            $('#counter').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, { offset: '90%' });
        }
    };




    // Owl Carousel
    var owlCarouselFeatureSlide = function() {
        var owl = $('.owl-carousel1');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            },
            navText: [
                "<i class='icon-arrow-left3 owl-direction'></i>",
                "<i class='icon-arrow-right3 owl-direction'></i>"
            ]
        });
        var owl2 = $('.owl-carousel');
        owl2.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='icon-arrow-left3 owl-direction'></i>",
                "<i class='icon-arrow-right3 owl-direction'></i>"
            ]
        });
        var owl3 = $('.owl-carousel3');
        owl3.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='icon-arrow-left3 owl-direction'></i>",
                "<i class='icon-arrow-right3 owl-direction'></i>"
            ]
        });
    };
    // Glitch effect
    var glitch = function() {
        $(".glitch-img").mgGlitch({
             destroy : true, // set 'true' to stop the plugin
            glitch: true, // set 'false' to stop glitching
            scale: true, // set 'false' to stop scaling
            blend : false, // set 'false' to stop glitch blending
            blendModeType : 'hue', // select blend mode type
            glitch1TimeMin : 600, // set min time for glitch 1 elem
            glitch1TimeMax : 300, // set max time for glitch 1 elem
            glitch2TimeMin : 10, // set min time for glitch 2 elem
            glitch2TimeMax : 115, // set max time for glitch 2 elem
            zIndexStart : 8, // because of absolute position, set z-index base value
        });
    };



    // Document on load.
    $(function() {
        fullHeight();
        burgerMenu();
        counterWayPoint();
        contentWayPoint();
        owlCarouselFeatureSlide();
        glitch();
    });


}());