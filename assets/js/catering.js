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
        }, 700);
        
      }
    });
  })(i);
}

//slick carousel

$(document).ready(function() {
  $('.gallery-container').slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
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

  $('.catering-banner-menu-container').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    centerPadding: '0',
    centerMode:true,
    arrows:false,
    dots:true,
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
});


    