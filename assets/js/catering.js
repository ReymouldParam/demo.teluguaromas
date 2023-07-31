
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




  const parentDiv = document.getElementById('catering-main-section');
  const elementToChange = document.getElementById('floatDiv');

  // Function to check if the bottom of the parent div is visible
  function isBottomVisible() {
    const parentRect = parentDiv.getBoundingClientRect();
    return parentRect.bottom <= window.innerHeight;
  }

  // Function to handle scroll events
  function handleScroll() {
    if (isBottomVisible()) {
      elementToChange.style.position = "absolute";
    } else {
      elementToChange.style.position = "fixed";
    }
  }
  var cateringBannerContent = document.getElementById("cateringBannerContent");
  // Attach the scroll event listener
  window.addEventListener("scroll", function(){
    handleScroll();

    var value = window.scrollY;
    cateringBannerContent.style.opacity = 1 - value * 0.004;
  });

    