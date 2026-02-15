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