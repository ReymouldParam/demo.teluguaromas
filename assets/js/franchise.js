$(document).ready(function() {
    $('.ppt-carousel').slick({
      slidesToShow: 1, // Display three elements at a time
      slidesToScroll: 1, // Move one element at a time
      variableWidth: false,
      focusOnSelect: true,
      autoplay: true, 
      autoplaySpeed: 5000,
      arrows: false,
      pauseOnHover:false,
      centerPadding: '0',
      fade:true
    });
  });