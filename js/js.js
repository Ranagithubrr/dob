$(document).ready(function () {
    $('#nav').onePageNav();

    $('.about-slider').slick({
        prevArrow: ('.prev-div'),
        nextArrow: ('.next-div'),
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.portfolio-slider').slick({
        prevArrow: ('.port-prev-div'),
        nextArrow: ('.port-next-div'),
    });
    $("#sctop").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#toppest").offset().top
        }, 1000);
    });
});




// for fixed menu

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 350) {
        $("nav").addClass("fixed");
    } else {
        $("nav").removeClass("fixed");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 350) {
        $("#sctop").addClass("show");
    } else {
        $("#sctop").removeClass("show");
    }
});