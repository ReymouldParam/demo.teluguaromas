// get and convert height to pixel
function convertToPixels(value, unit, parentSize) {
  const tempDiv = document.createElement('div');
  tempDiv.style.width = '1' + unit;
  parentSize.appendChild(tempDiv);
  const pixels = tempDiv.offsetWidth;
  parentSize.removeChild(tempDiv);
  return value * pixels;
}

function getElementHeightInPixels(element) {
  const computedStyle = window.getComputedStyle(element);
  const heightValue = parseFloat(computedStyle.height);
  const heightUnit = computedStyle.height.match(/[a-z]+/)[0]; // Extract the unit
  const parentSize = element.parentNode;

  return convertToPixels(heightValue, heightUnit, parentSize);
}
  
  
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

  const intialHeight1 = getElementHeightInPixels(elementToChange[1]);
  const intialHeight2 = getElementHeightInPixels(elementToChange[2]);

  var cateringBannerContent = document.getElementById("cateringBannerContent");
  window.addEventListener("scroll", function(){
    handleScroll();

    var value = window.scrollY;
    // cateringBannerContent.style.opacity = 1.5 - value * 0.004;

    // if(elementToChange[1].offsetHeight > (intialHeight1/3))
        elementToChange[1].style.height= intialHeight1 - value/10 + "px";
        elementToChange[2].style.height= intialHeight2 - value/10 + "px";
    
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
        catering[index].querySelector(".catering-item-head").querySelector("i").style.rotate="180deg";
        catering[index].querySelector(".catering-item-body").classList.remove("move-out-up")
        catering[index].querySelector(".catering-item-body").classList.add("move-in-down");
        catering[index].querySelector(".catering-item-body").style.display = "block";
      } else {
        catering[index].querySelector(".catering-item-head").querySelector("i").style.rotate="0deg";
        catering[index].querySelector(".catering-item-body").classList.remove("move-in-down")
        catering[index].querySelector(".catering-item-body").classList.add("move-out-up")

        setTimeout(() => {
          catering[index].querySelector(".catering-item-body").style.display = "none";
        }, 400);
        
      }
    });
  })(i);
}

//set current date to min attribute in catering form

var currentDate = new Date().toISOString().split('T')[0];

document.getElementById("cateringFormDate").setAttribute("min", currentDate);

//slick carousel

$(document).ready(function() {
  $('.gallery-container').slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    centerPadding: '0',
    centerMode:true,
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
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.catering-banner-heading-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true, 
    autoplaySpeed: 8000,
    centerPadding: '0',
    pauseOnHover:false,
    arrows:false,
    fade:true,
    cssEase: 'cubic-bezier(0.5, 0, 1, 0.3)',
  });

  $('.catering-banner-menu-container').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    centerPadding: '0',
    centerMode:false,
    infinite:true,
    arrows:false,
    dots:false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots:true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
  });


  $('.slick-carousel1').slick({
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 5000,
    centerMode:true,
    focusOnSelect: true,
    centerPadding: '0',
    asNavFor: '.slick-carousel2',
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:true
        }
      }
    ]
  });

  $('.slick-carousel2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      focusOnSelect: true,
      asNavFor: '.slick-carousel1',
      centerPadding: '0',
      arrows:false,
      fade:true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    });


    $('.our-clients-container').slick({
      slidesToShow: 3, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 5000,
      centerMode:true,
      focusOnSelect: true,
      pauseOnHover:false,
      pauseOnSelect:false,
      arrows:false,
      dots:true,
      centerPadding: '0',
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      responsive: [
        {
          breakpoint: 1445,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '0',
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

});




function closeDetailsTab(){
  $("#cateringDetails").css("display", "none");
  $(".catering-details").css("display", "none");
  $("body").css("overflow-y", "auto");
}

var k = -1;

$(".open-cater-details-btn").click(function() {
  var index = $(this).data("value");
  k=index;
  $("#cateringDetails").css("display", "flex");
  $("#cateringDetails" + index).css("display", "block");
  $("body").css("overflow-y", "hidden");
});



function caterDetailsMoveLeft(){
  $("#cateringDetails"+k).css("display", "none");
  k=(k-1);
  if(k<0){
    k=3;
  }
  $("#cateringDetails"+k).css("display", "block")
}

function caterDetailsMoveRight(){
  $("#cateringDetails"+k).css("display", "none");
  k=(k+1)%4;
  $("#cateringDetails"+k).css("display", "block")
}

document.addEventListener("keydown", function(e){
  if (e.key === "Escape") {
    closeDetailsTab();
    closeCateringForm();
  }
});

function openCateringForm(){
  closeDetailsTab();
  $(".catering-form-section").css("display", "block");
  $("body").css("overflow-y", "hidden");
}

function closeCateringForm(){
  $(".catering-form-section").css("display", "none");
  $("body").css("overflow-y", "auto");
}
