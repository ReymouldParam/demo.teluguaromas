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

$(function() {
    $.scrollify({
      section : ".smooth-scroll",
    });
  });

  $.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "linear",
    scrollSpeed: 500,
    offset : 0,
    scrollbars: true,
    standardScrollElements: ".stop-smooth-scroll",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:false,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
        

  // $('#news-img-slider').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed:2000
  // });

// banner zoomin effect

var bannerContent = document.getElementById("bannerContent");
bannerContent.style.transform = "scale(1.2)";
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


// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })
