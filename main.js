
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#page_top').removeClass('DownMove');
        $('#page_top').addClass('UpMove');
    } else {
        if ($('#page_top').hasClass('UpMove')) {
            $('#page_top').removeClass('UpMove');
            $('#page_top').addClass('DownMove');
        }
    }
}

$(window).scroll(function () {
    PageTopAnime();
});