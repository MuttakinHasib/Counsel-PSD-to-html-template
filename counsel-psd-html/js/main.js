
$(window).on("scroll",function(){
    if($(window).scrollTop()){
        $(".nav").addClass("nav-active");
    }
    else{
        $(".nav").removeClass("nav-active");
    }
});


$('.counter').counterUp({
    delay:10,
    time:1000
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:4500,
        margin:15,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        loop:true,
        nav:false,
        dots:false,
    });
});

