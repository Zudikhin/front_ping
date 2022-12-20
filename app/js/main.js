$(document).ready(function () {
    "use strict";

    const inViewport = (elem) => {
      let allElements = document.getElementsByClassName(elem);
      let windowHeight = window.innerHeight;
      const elems = () => {
          for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
              let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
              let top = viewportOffset.top;  //  get the offset top
              if(top < windowHeight){  //  if the top offset is less than the window height
                  allElements[i].classList.add('animation');  //  add the class
              } else{
                  allElements[i].classList.remove('in-viewport');  //  remove the class
              }
          }
      }
      elems();
      window.addEventListener('scroll', elems);
    }
  
    inViewport("anime");

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $(".header").addClass("scroll");
      } else {
        $(".header").removeClass("scroll");
      }
    });

    $(document).mouseup(function(e) {
      if($(window).width() > 1199) {
        var div = $(".modal_nav");
        if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
          $(".modal_nav").removeClass("active");
          $("body").removeClass("scroll");
          $(".header_block_right_drop").removeClass("scroll");
        }
      }
    });

    $(".header_block_right_drop").click(function() {
      if ($(window).width() < 1199) {
        $(this).toggleClass("active");
      }
      $(".modal_nav").toggleClass("active");
      if ($(window).width() < 1199) {
        $("body").toggleClass("scroll");
      }
    });

    $(".modal_nav_close").click(function() {
      $(".modal_nav").removeClass("active");
      $(".header_block_right_drop").removeClass("active");
    })

    $(".about_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".about").offset().top - 150
      }, 0);
    });

    $(".point_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".point").offset().top - 150
      }, 0);
    });

    $(".cash_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".calculator").offset().top - 150
      }, 0);
    });


    $(".form_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 0);
    });


    $(".main_block_btns_item-call").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 0);
    });

    $(".main_block_btns_item-investment").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".lump").offset().top - 150
      }, 0);
    });

    $(".point_block_item_right_info_btn").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 0);
    });

    $(".calculator_block_top_item_btn").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 0);
    });

    $(".calculator_block_btn").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 0);
    });


    $(".about_block_video_main").click(function() {
      $(this).css("display", "none");
      $(".about_block_video_play").css("display", "none");
      $(".about_block_video").append('<iframe id="about_block_video_frame" width="100%" height="100%" src="https://www.youtube.com/embed/Gyy_dTIIpaI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });

    $(".about_block_video_play").click(function() {
      $(this).css("display", "none");
      $(".about_block_video_main").css("display", "none");
      $(".about_block_video").append('<iframe id="about_block_video_frame" width="100%" height="100%" src="https://www.youtube.com/embed/Gyy_dTIIpaI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });


    $(".point_block_item_right_info_calc_list_item").click(function() {
      var contr = $(this).attr("data-contr");
      var furniture = $(this).attr("data-furniture");
      var fill = $(this).attr("data-fill");
      var sum = $(this).attr("data-sum");
      $(this).parent().parent().parent().parent().parent().find(".point_block_item_right_info_calc_list_item").removeClass("active");
      $(this).addClass("active");
      $(this).parent().parent().find(".contribution").text(contr);
      $(this).parent().parent().find(".furniture").text(furniture);
      $(this).parent().parent().find(".fill").text(fill);
      $(this).parent().parent().parent().find(".final").text(sum);
    });

    $(".quiz_block_wrap_item_list_item").click(function() {
      $(this).parent().find(".quiz_block_wrap_item_list_item").removeClass("active");
      $(this).addClass("active");
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

    if ($(window).width() > 1199) {
      $('.reviews_wrap').slick({
        dots: false,
        infinite: true,
        arrows: false,
        dots: true,
        fade: false,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear'
      });
    }
    
});
