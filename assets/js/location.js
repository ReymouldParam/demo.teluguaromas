function showLocationDetails(event){
    var x= $(event).data("value");
    $(".location-information-container").css("display" , "none");
    $("#location"+x).css("display", "flex");
}

$('.location-tab').on('click', function() {
    $('.location-tab').removeClass('location-tab-active');
    $(this).addClass('location-tab-active');
});

$(document).ready(function() {
    $('.carousel-container').slick({
      slidesToShow: 1, 
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 3000,
      centerPadding: '0',
      centerMode:true,
      fade: true,
      arrows: false,
      dots: false,
      pauseOnHover: false
    });

})



// header dynamic scrool
jQuery(document).ready(function($) {
    var header = $('#stickyheaders');
    var whatsappIcon = $('#whatappIcon');
  
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      
      if (scrollTop <= 5) {
        header.css("background-color", "transparent");
        whatsappIcon.css("display", "none");
  
        if(window.innerWidth<=440){
          $("#header-logo").css("height","50px");
          $("#floatingNavlinksMobile").css("top","20px");
  
        }
  
      } else {
  
        if(window.innerWidth<=440){
          $("#header-logo").css("height","35px");
          $("#floatingNavlinksMobile").css("top","15px");
        }
  
  
        header.css("background-color", "var(--header-bg-color)");
        whatsappIcon.css("display", "block");
      }
    });
  
    // Set initial state
    $(window).trigger('scroll');
  });