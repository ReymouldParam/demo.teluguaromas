// toggle content visibility from left nav
// $(".location-tab").click(function() {
//   loc = $(this).data("location");

//   $(".location-information-container").css("display", "none")
//   $("#"+loc).css("display","flex")
// });


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
  
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      
      if (scrollTop <= 5) {
        header.css("background-color", "transparent");
  
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
      }
    });
  
    // Set initial state
    $(window).trigger('scroll');
  });

// let navElementList = document.querySelectorAll(".nav-link");

// navElementList.forEach(element => {
//     element.addEventListener('click', () => {
//       let navAttribute = element.getAttribute('aria-current');
//       let navUrl = window.location.origin + '/' + navAttribute;
//       console.log(window.location.origin);

//       // Update URL
//       window.history.pushState({ path: navUrl }, '', navUrl);
//     });
// });

// $(document).ready(function() {

//   // Function to show selected location content
//   function showLocation(locationName) {
//       // Hide all locations
//       $('.location-information-container').hide();

//       // Show the selected location
//       $('#' + locationName).css('display', 'flex');

//       // Remove active class from all location tabs
//       $('.location-tab').removeClass('location-tab-active');

//       // Add active class to the clicked location tab
//       $('[data-location="' + locationName + '"]').addClass('location-tab-active');
//   }

//   // Show default location content on page load
//   showLocation('kompally');

//   // Event listener for clicking on location tabs
//   $('.locations-list-container .location-tab').on('click', function(e) {
//       var locationName = $(this).attr('data-location');

//       // Show the respective location content
//       showLocation(locationName);

//       // Update URL
//       var newUrl = window.location.origin + '/location/' + locationName;
//       window.history.pushState({ path: newUrl }, '', newUrl);
//   });

//   // Toggle content visibility from left nav
//   function toggleLocationList() {
//       $('.locations-main-container .locations-list-container .list').toggle();
//   }

//   // Event listener for toggling location list visibility
//   $('.open-list-btn').on('click', function() {
//       toggleLocationList();
//   });
// });
