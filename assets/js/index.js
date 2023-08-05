// menu open close 

var menuArr = document.getElementById("menu-tabs").querySelectorAll("button");

for(var i=0; i<menuArr.length ; i++){
    menuArr[i].addEventListener("click", function(){
        var z = this.getAttribute("data-value");
        for(var j = 1;j<=menuArr.length;j++){
            document.getElementById("menu-card-"+j).style.display="none"
            menuArr.forEach(element => {
                element.className = "btn menu-open-btn"
            });
        }
        
        this.className = "btn menu-tab-active";
        document.getElementById("menu-card-"+z).style.display="block"
    });
}

// loading page

window.addEventListener("load", ()=>{
  document.getElementById("loadingBar").style.width= "100%";

  setTimeout(function(){
      document.getElementById("preloader").style.display="none";
  },2500);

  var scrollPosition = window.scrollY;
      // Example: Change the background color of an element
      var targetElement = document.getElementById("your-element-id");
      if (scrollPosition < 40) {
        $('#whatappIcon').css("display","none");


      } else {
        $('#whatappIcon').css("display","block");
      }

});


// header dynamic scrool

jQuery(document).ready(function($){
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  mywindow.scroll(function() {
      if (mypos > 40) {
          if(mywindow.scrollTop() > mypos)
          {
              $('#stickyheaders').css("background-color","black");

              $('#header-logo').css("height","8vh");
              
              $('#whatappIcon').css("display","block");
          }
          else
          {
              if(mywindow.scrollTop() < 40) {
                  

                  if(window.innerWidth < 440){
                    $('#stickyheaders').css("background-color","black");
                    $('#header-logo').css("height","60px");
                }else{
                    $('#stickyheaders').css("background-color","var(--trasperent)");
                    $('#header-logo').css("height","12vh");
                }
                  
                  $('#whatappIcon').css("display","none");
              }
          
          }
      }
      mypos = mywindow.scrollTop();
  });
});


// smooth scrolling function

// $(function() {
//     $.scrollify({
//       section : ".smooth-scroll",
//     });
//   });

//   $.scrollify({
//     section : "section",
//     sectionName : "section-name",
//     interstitialSection : "",
//     easing: "easeOutExpo",
//     scrollSpeed: 500,
//     offset : 0,
//     scrollbars: true,
//     standardScrollElements: ".stop-smooth-scroll",
//     setHeights: true,
//     overflowScroll: true,
//     updateHash: true,
//     touchScroll:false,
//     before:function() {},
//     after:function() {},
//     afterResize:function() {},
//     afterRender:function() {}
//   });
        

  // $('#news-img-slider').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed:2000
  // });

// banner zoomin effect

var bannerContent = document.getElementById("bannerContent");
bannerContent.style.transform = "scale(1.1)";
bannerContent.style.opacity = "1";

// jQuery(document).ready(function($) {
//   "use strict";
//   //  TESTIMONIALS CAROUSEL HOOK
//   $('#news-img-slider').owlCarousel({
//     loop: true,
//     center: true,
//     items: 4,
//     margin: 0,
//     autoplay: true,
//     dots: true,
//     autoplayTimeout: 3000,
//     smartSpeed: 450,
//     responsive: {
//       0: {
//         items: 1
//       },
//       768: {
//         items: 2
//       },
//       1170: {
//         items: 3
//       }
//     }
//   });
// });
// $(document).ready(function() {
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 1,
//     autoplay: true,
//     autoplayHoverPause: true, // Enable auto-play pause on hover
//     loop: true
//   });

//   // Pause carousel on hover
//   owl.on("mouseover", function() {
//     owl.trigger("stop.owl.autoplay");
//   });

//   // Resume carousel on mouseout
//   owl.on("mouseout", function() {
//     owl.trigger("play.owl.autoplay");
//   });
// });

// disable right click
// $(document).bind("contextmenu", function(e) {
//   return false;
// });

// Paralox effect

document.addEventListener("mousemove", function (e) {
  document.querySelectorAll(".moveObj").forEach(function (move) {
    var movingValue = move.getAttribute("data-value");
    var x =( e.clientX * movingValue)/200;
    var y = (e.clientY * movingValue)/200;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
});


//slick carousel

  $(document).ready(function() {
    $('.slick-carousel1').slick({
      slidesToShow: 3, // Display three elements at a time
      slidesToScroll: 1, // Move one element at a time
      autoplay: true, // Automatically move the carousel
      autoplaySpeed: 3000, // Move to the next element every 3 seconds
      centerMode:true,
      variableWidth: false,
      focusOnSelect: true,
      asNavFor: '.slick-carousel2',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
      ]
    });

    $('.slick-carousel2').slick({
      slidesToShow: 1, // Display three elements at a time
      slidesToScroll: 1, // Move one element at a time
      variableWidth: false,
      focusOnSelect: true,
      asNavFor: '.slick-carousel1',
      arrows: false
    });
  });



  