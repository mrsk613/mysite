$(document).on('ready', function () {
    $(".slider").slick({
        autoplay: false,
        arrows: true,
        slidesToShow: 3,
        dots: false,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(function () {
    $(window).scroll(function () {
        var animTrigger = $('.anime');
        $(animTrigger).each(function () {
            var scroll = $(window).scrollTop(),
                elemTop = $(this).offset().top,
                windowHeight = $(window).height();

            if (scroll > elemTop - windowHeight + 200) {
                $(this).addClass('is-animated');
            }
        });
    });
    $(window).trigger('scroll');
});