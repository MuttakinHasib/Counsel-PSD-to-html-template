$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $(".nav").addClass("nav-active");
    } else {
        $(".nav").removeClass("nav-active");
    }
});

$(".counter").counterUp({
    delay: 10,
    time: 1000
});
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4500,
        margin: 15,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        loop: true,
        nav: false,
        dots: false
    });
});

$(document).ready(function() {
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    var scrollLink = $(".scroll");

    scrollLink.click(function(e) {
        e.preventDefault();

        $("body,html").animate(
            {
                scrollTop: $(this.hash).offset().top
            },
            1000
        );
    });
});

//GSAP

TweenMax.from(".brand", 1, {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    delay: 0.5
});

TweenMax.staggerFrom(
    ".nav-item",
    1,
    {
        y: -30,
        opacity: 0,
        delay: 0.5
    },
    0.3
);
