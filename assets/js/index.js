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


// header styles on scroll

jQuery(document).ready(function($){
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  mywindow.scroll(function() {
  if (mypos > 40) {
  if(mywindow.scrollTop() > mypos)
  {
  //$('#stickyheaders').addClass('headertranpup');
  $('#stickyheaders').css("background-color","black");
  $('#stickyheaders').css("height","80px");

  $('#header-logo').css("height","54px");
  
  $('#headerInner').css("padding","5px 0");
  $('#whatappIcon').css("display","block");
  }
  else
  {
  if(mywindow.scrollTop() < 75) {
  $('#stickyheaders').css("background-color","transparent");
  $('#whatappIcon').css("display","none");
  if(window.innerWidth < 426){
    $('#header-logo').css("height","60px");
  }else if(window.innerWidth < 769){
    $('#header-logo').css("height","70px");
  }else if(window.innerWidth < 1025){
    $('#header-logo').css("height","70px");
  }else{
    $('#header-logo').css("height","12vh");
  }

  // $('#header-logo').css("height","12vh");
  $('#headerInner').css("padding","15px 0");
  }
  
  }
  }
  mypos = mywindow.scrollTop();
  });
  });
  window.addEventListener("load", function() {
    var scrollPosition = window.scrollY;
    // Example: Change the background color of an element
    var targetElement = document.getElementById("your-element-id");
    if (scrollPosition < 40) {
      $('#stickyheaders').css("background-color","transparent");
      $('#whatappIcon').css("display","none");
    if(window.innerWidth < 426){
      $('#header-logo').css("height","60px");
    }else if(window.innerWidth < 769){
      $('#header-logo').css("height","70px");
    }else if(window.innerWidth < 1025){
      $('#header-logo').css("height","70px");
    }else{
      $('#header-logo').css("height","12vh");
    }

    // $('#header-logo').css("height","12vh");
    $('#headerInner').css("padding","15px 0");
    } else {
      $('#stickyheaders').css("background-color","black");
      $('#stickyheaders').css("height","80px");

      $('#header-logo').css("height","54px");
      
      $('#headerInner').css("padding","5px 0");
      $('#whatappIcon').css("display","block");
    }
  });


//slick carousel

  $(document).ready(function() {
    $('.slick-carousel1').slick({
      slidesToShow: 4, // Display three elements at a time
      slidesToScroll: 1, // Move one element at a time
      autoplay: true, // Automatically move the carousel
      autoplaySpeed: 3000, // Move to the next element every 3 seconds
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
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



  