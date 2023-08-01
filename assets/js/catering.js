
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
    $('#stickyheaders').css("height","auto");
  
    $('#header-logo').css("height","54px");
    
    $('#headerInner').css("padding","5px 0");
    }
    else
    {
    if(mywindow.scrollTop() < 75) {
    $('#stickyheaders').css("background-color","black");
  
    if(window.innerWidth < 426){
      $('#header-logo').css("height","60px");
    }else if(window.innerWidth < 769){
      $('#header-logo').css("height","70px");
    }else if(window.innerWidth < 1025){
      $('#header-logo').css("height","70px");
    }else{
      $('#header-logo').css("height","10vh");
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
      if (scrollPosition < 40) {
        $('#stickyheaders').css("background-color","black");
  
      if(window.innerWidth < 426){
        $('#header-logo').css("height","60px");
      }else if(window.innerWidth < 769){
        $('#header-logo').css("height","70px");
      }else if(window.innerWidth < 1025){
        $('#header-logo').css("height","70px");
      }else{
        $('#header-logo').css("height","10vh");
      }
  
      // $('#header-logo').css("height","12vh");
      $('#headerInner').css("padding","15px 0");
      } else {
        $('#stickyheaders').css("background-color","black");
        $('#stickyheaders').css("height","auto");
  
        $('#header-logo').css("height","54px");
        
        $('#headerInner').css("padding","5px 0");
      }
    });


  // floting elements

  const parentDiv = document.getElementById('catering-main-section');
  const elementToChange = document.querySelectorAll(".floatdiv");

  function isBottomVisible() {
    const parentRect = parentDiv.getBoundingClientRect();
    return parentRect.bottom <= window.innerHeight;
  }

  function handleScroll() {
    if (isBottomVisible()) {
      elementToChange[0].style.position = "absolute";
      elementToChange[1].style.position = "absolute";
      elementToChange[2].style.position = "absolute";
    } else {
      elementToChange[0].style.position = "fixed";
      elementToChange[1].style.position = "fixed";
      elementToChange[2].style.position = "fixed";
    }
  }
  var cateringBannerContent = document.getElementById("cateringBannerContent");
  window.addEventListener("scroll", function(){
    handleScroll();

    var value = window.scrollY;
    cateringBannerContent.style.opacity = 1 - value * 0.004;
  });


// catering open close function

var catering = document.querySelectorAll(".catering-item");

for (var i = 0; i < catering.length; i++) {
  (function (index) {
    catering[index].querySelector(".catering-item-head").addEventListener("click", () => {
      var content1 = catering[index].querySelector(".catering-item-body");
      var computedStyle = window.getComputedStyle(content1);
      var dis = computedStyle.getPropertyValue("display");

      if (dis === "none") {
        catering[index].querySelector(".catering-item-body").style.display = "block";
      } else {
        catering[index].querySelector(".catering-item-body").style.display = "none";
      }
    });
  })(i);
}

//slick carousel

$(document).ready(function() {
  $('.gallery-container').slick({
    slidesToShow: 3, 
    slidesToScroll: 3,
    autoplay: true, 
    autoplaySpeed: 2000, 
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
          slidesToShow: 2,
          slidesToScroll: 2
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
});


    