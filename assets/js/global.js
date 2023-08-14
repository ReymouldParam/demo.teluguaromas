window.addEventListener("load", ()=>{
    // document.getElementById("loadingBar").style.width= "100%";

    // setTimeout(function(){
    //     document.getElementById("preloader").style.display="none";
    // },2000);

    var scrollPosition = window.scrollY;
      // Example: Change the background color of an element
      var targetElement = document.getElementById("your-element-id");
      if (scrollPosition < 100) {
        if(window.innerWidth < 990){
          $('#stickyheaders').css("background-color","var(--header-bg-color");
      }else{
          $('#stickyheaders').css("background-color","var(--trasperent)");
      }

        $('#whatappIcon').css("display","none");

      } else {
        $('#stickyheaders').css("background-color","var(--header-bg-color)");
          
        $('#whatappIcon').css("display","block");
      }
});



// header dynamic scrool

jQuery(document).ready(function($){
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  mywindow.scroll(function() {
      if (mypos > 100) {
          if(mywindow.scrollTop() > mypos)
          {
              $('#stickyheaders').css("background-color","var(--header-bg-color)");
              
              $('#whatappIcon').css("display","block");
          }
          else
          {
              if(mywindow.scrollTop() < 100) {
                  

                  if(window.innerWidth < 990){
                    $('#stickyheaders').css("background-color","var(--header-bg-color)");
                }else{
                    $('#stickyheaders').css("background-color","var(--trasperent)");
                }
                  
                  $('#whatappIcon').css("display","none");
              }
          
          }
      }
      mypos = mywindow.scrollTop();
  });
});
