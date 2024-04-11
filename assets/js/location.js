// toggle content visibility from left nav

$(document).ready(function() {

  // show respective conent when url load according to location.
  // Check if a specific location is specified in the URL
  var currentPath = window.location.pathname.split('/');
  var locationName = currentPath[currentPath.length - 1];

  if (locationName) {
      showLocation(locationName);
  }

  $('.locations-list-container .location-tab').on('click', function(e) {

      var locationName = $(this).attr('data-location'); // Assuming you have data-location attribute
      var newUrl = window.location.origin + '/location/' + locationName;

      // Update URL
      window.history.pushState({ path: newUrl }, '', newUrl);

      // Show the respective location content
      showLocation(locationName);
  });
});

function showLocation(locationName) {
  // Hide all locations
  $('.location-information-container').hide();

  // Show the selected location
  $('#' + locationName).css('display', 'flex');
}



$('.location-tab').on('click', function() {
    $('.location-tab').removeClass('location-tab-active');
    $(this).addClass('location-tab-active');
});

function toggleLocationList(){
  $('.locations-main-container .locations-list-container .list').toggle()
}

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