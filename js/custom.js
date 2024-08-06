// JavaScript Document


$(window).on('load', function () {

    "use strict";

    /*----------------------------------------------------*/
    /*	Preloader
    /*----------------------------------------------------*/
    $("#loader-wrapper").hide();
    $("body").css('overflow','auto');

});


$(window).on('scroll', function () {

    "use strict";

    /*----------------------------------------------------*/
    /*	Navigtion Menu Scroll
    /*----------------------------------------------------*/

    var b = $(window).scrollTop();

    if (b > 72) {
        $(".navbar").addClass("scroll");
    } else {
        $(".navbar").removeClass("scroll");
    }


});


$(document).ready(function () {

    "use strict";


    /*----------------------------------------------------*/
    /*	Mobile Menu Toggle
    /*----------------------------------------------------*/

    $('.navbar-nav li.nav-item.nl-simple').on('click', function () {
        $('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
        $('#navbarSupportedContent').removeClass("show");
    });


    /*----------------------------------------------------*/
    /*	OnScroll Animation
    /*----------------------------------------------------*/

    $('.animated').appear(function () {

        var elem = $(this);
        var animation = elem.data('animation');

        if (!elem.hasClass('visible')) {
            var animationDelay = elem.data('animation-delay');
            if (animationDelay) {
                setTimeout(function () {
                    elem.addClass(animation + " visible");
                }, animationDelay);

            } else {
                elem.addClass(animation + " visible");
            }
        }

    });


    /*----------------------------------------------------*/
    /*	ScrollUp
    /*----------------------------------------------------*/

    $.scrollUp = function (options) {

        // Defaults
        var defaults = {
            scrollName: 'scrollUp', // Element ID
            topDistance: 600, // Distance from top before showing element (px)
            topSpeed: 800, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            scrollImg: false, // Set true to use image
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        };

        var o = $.extend({}, defaults, options),
            scrollId = '#' + o.scrollName;

        // Create element
        $('<a/>', {
            id: o.scrollName,
            href: '#top',
            title: o.scrollText
        }).appendTo('body');

        // If not using an image display text
        if (!o.scrollImg) {
            $(scrollId).text(o.scrollText);
        }

        // Minium CSS to make the magic happen
        $(scrollId).css({'display': 'none', 'position': 'fixed', 'z-index': '2147483647'});

        // Active point overlay
        if (o.activeOverlay) {
            $("body").append("<div id='" + o.scrollName + "-active'></div>");
            $(scrollId + "-active").css({
                'position': 'absolute',
                'top': o.topDistance + 'px',
                'width': '100%',
                'border-top': '1px dotted ' + o.activeOverlay,
                'z-index': '2147483647'
            });
        }

        // Scroll function
        $(window).on('scroll', function () {
            switch (o.animation) {
                case "fade":
                    $(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
                    break;
                case "slide":
                    $(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
                    break;
                default:
                    $(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
            }
        });

        // To the top
        $(scrollId).on('click', function (event) {
            $('html, body').animate({scrollTop: 0}, o.topSpeed);
            event.preventDefault();
        });

    };

    $.scrollUp();


    /*----------------------------------------------------*/
    /*	Screens Carousel Slick
    /*----------------------------------------------------*/

    $('.screens-carousel').slick({
        infinite: true,
        autoplay: true,
        centerMode: true,
        dots: true,
        autoplaySpeed: 3500,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    variableWidth: false,
                    fade: true,
                    cssEase: 'linear'
                }
            }
        ]
    });


});