/*global jQuery */
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Slider Carouse JS
        var banner_owl = $('#banner-carousel');
        banner_owl.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });


        // Slider Caption Animation JS
        var caption = $('.banner-caption *');
        caption.addClass('animated');

        banner_owl.on('translate.owl.carousel', function (event) {
            caption.removeClass('fadeInUp');
            caption.addClass('hide');
        });

        banner_owl.on('translated.owl.carousel', function (event) {
            caption.addClass('fadeInUp');
            caption.removeClass('hide');
        });

        // Product Carousel JS
        $('.products-carousel').owlCarousel({
            items: 3,
            loop: true,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    autoplay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoplay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    nav: true
                }
            }
        });

        // booking form
        $(document).ready(function () {
            $('.btn-outline-secondary').click(function (e) {
                e.preventDefault();

                var fieldName = $(this).attr('data-field');
                var type = $(this).attr('data-type');
                var input = $("#" + fieldName);
                var currentVal = parseInt(input.val());

                if (!isNaN(currentVal)) {
                    if (type === 'minus') {
                        if (currentVal > input.attr('min')) {
                            input.val(currentVal - 1).change();
                        }
                    } else if (type === 'plus') {
                        input.val(currentVal + 1).change();
                    }
                } else {
                    input.val(0);
                }
            });
        });

        // Image Gallery JS
        $('.imgage-gallery-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });


        // Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // Body Popup Modal
        $('.modal-active').on('click', function () {
            $('.body-popup-modal-area').fadeIn(200);

            return false;
        });

        $('.modal-close').on('click', function () {
            $('.body-popup-modal-area').fadeOut();

            return false;
        });

        $('.menu-open').on('click', function () {
            $('.navigation-area-wrap').fadeIn(200);

            return false;
        });

        $('.menu-close').on('click', function () {
            $('.navigation-area-wrap').fadeOut();

            return false;
        });

        // Responsive Slicknav
        $('#mainmenu').slicknav({
            label: '',
            prependTo: '#header-area',
            closedSymbol: '+',
            openedSymbol: '-'
        });

        // Scroll to top
        $('.scrolltotop').smoothScroll({
            direction: 'top',
            scrollTarget: 'html',
            speed: 600
        });



        // All Window Scroll Function
        $(window).scroll(function () {
            //Scroll top Hide Show
            if ($(window).scrollTop() >= 400) {
                $('.scrolltotop').addClass('show');
            } else {
                $('.scrolltotop').removeClass('show');
            }

            //Header Fix JS
            if ($(window).scrollTop() >= 400) {
                $('#header-area').addClass('fixed');
            } else {
                $('#header-area, .slicknav_menu').removeClass('fixed');
            }
        });

    }); //Ready Function End

    jQuery(window).on('load', function () {

    }); //window load End
}(jQuery));