$('.slider1').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });

$('.slider2').slick({
    lazyLoad: 'ondemand',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplayspeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: true
    // variableWidth: true
});

$('.slider3').slick({
  lazyLoad: 'ondemand',
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 5000,
  pauseOnHover: true,
  pauseOnDotsHover: true
  // variableWidth: true
});