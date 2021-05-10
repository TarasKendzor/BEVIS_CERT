$(document).ready(function () {
  // Nav fixed and animation scroll.
  if ($(".header-section").offset().top > 40) {
    $(".header-section").addClass("nav-on-scroll");
  } else {
    $(".header-section").removeClass("nav-on-scroll");
  }

  $(window).on("scroll", function () {
    if (window.scrollY > 40) {
      $(".header-section").addClass("nav-on-scroll");
    } else {
      $(".header-section").removeClass("nav-on-scroll");
    }
  });

  $("#hamburger").on("click", function () {
    $(".header-section__content__nav").toggleClass("show");
    $("body").toggleClass("body-overflow");
    $(this).toggleClass("active");
  });

  $(".header-section__content__logo").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  // To add new section block you should make class name same that nav-anchor id.//
  $(".page-ancor").click(function (e) {
    e.preventDefault();
    var menuScroll = e.target.id;
    var thisBlock = "." + menuScroll;
    $(".header-section__content__nav").removeClass("show");
    $("body").removeClass("body-overflow");
    $("#hamburger").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: $(thisBlock).offset().top - 75,
      },
      700
    );
  });

  $(".data-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    arrows: true,
    dots: true,
    margin: 0,
    centerPadding: "0",
    centerMode: false,
    pauseOnHover: false,
    nextArrow:
      '<div class="slick-right"><img src="assets/img/arrow-left.svg" alt="Slider Arrow" /></div>',
    prevArrow:
      '<div class="slick-left"><img src="assets/img/arrow-right.svg" alt="Slider Arrow" /></div>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });

  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
});
