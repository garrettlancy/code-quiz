jQuery(document).ready(function ($) {

    $("a").mouseenter(function () {
        $(this).find("img").finish().animate({
            opacity: "0.5"
        });
    }).mouseleave(function () {
        $(this).find("img").finish().animate({
            opacity: "1"
        });
    });

});
