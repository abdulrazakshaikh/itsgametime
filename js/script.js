$(function() {
    $(document).ready(function() {
        $(".navbar-nav li a").click(function(e) {
            $(".navbar-collapse").collapse('hide')
        })
    });

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
            }, 100);
            return !1
        })
    });

    $(document).ready(function() {
        var scrollLink = $('.scroll');
        scrollLink.click(function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 1000)
        })
    });

    // var offset = 90;

    // $('.navbar-nav .nav-link').click(function(event) {
    //     event.preventDefault();
    //     $($(this).attr('href'))[0].scrollIntoView();
    //     scrollBy(0, -offset);
    // });
    // $('.smooth-scroll').on('click', function() {
    //     event.preventDefault();
    //     var sectionTo = $(this).attr('href');
    //     $('html, body').stop().animate({
    //       scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
    // });

});