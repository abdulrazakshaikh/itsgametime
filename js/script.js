$(function() {
	$(window).scroll(function() {
        if ($(window).scrollTop() >= 20) {
            $('.header').addClass('stickheader');
        } else {
            $('.header').removeClass('stickheader');
        };
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            if ($(this).scrollTop() > 50) {
                $('.back-to-top').addClass("d-flex")
            } else {
                $('.back-to-top').removeClass("d-flex")
            }
        } else {
            $('.back-to-top').removeClass("d-flex")
        }
    });
    $(function() {
        $('.back-to-top').bind("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1200);
            return !1
        })
    });

    // var rellax = new Rellax('.rellax');
});