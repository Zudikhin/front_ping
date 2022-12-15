$(document).ready(function () {
    "use strict";

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $(".header").addClass("scroll");
      } else {
        $(".header").removeClass("scroll");
      }
    });

    $('.point_block').slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        fade: true,
        slidesToShow: 1,
        speed: 500,
        cssEase: 'linear',
        prevArrow: $('.point_btns_prev'),
        nextArrow: $('.point_btns_next')
    });
    
});
