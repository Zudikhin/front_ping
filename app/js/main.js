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

    $(document).mouseup( function(e){ // событие клика по веб-документу
      var div = $(".modal_nav"); // тут указываем ID элемента
      if ( !div.is(e.target) && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $(".modal_nav").removeClass("active");
        $("body").removeClass("scroll");
        $(".header_block_right_drop").removeClass("scroll");
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
      }, 2000);
    });

    $(".point_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".point").offset().top - 150
      }, 2000);
    });

    $(".cash_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".calculator").offset().top - 150
      }, 2000);
    });


    $(".form_nav").click(function() {
      $(".header_block_right_drop").removeClass("active");
      $(".modal_nav").removeClass("active");
      $("body").removeClass("scroll");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 2000);
    });


    $(".main_block_btns_item-call").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 2000);
    });

    $(".main_block_btns_item-investment").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".lump").offset().top - 150
      }, 2000);
    });

    $(".point_block_item_right_info_btn").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 2000);
    });

    $(".calculator_block_top_item_btn").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 2000);
    });

    $(".calculator_block_btn").click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top - 150
      }, 2000);
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
