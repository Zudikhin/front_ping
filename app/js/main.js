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

    $('.news_block_slider_block').slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        prevArrow: $('.news_block_slider_prev'),
        nextArrow: $('.news_block_slider_next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                fade: true,
                slidesToShow: 1
              }
            }
        ]
    });
    
});
