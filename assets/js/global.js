window.addEventListener("load", ()=>{
    // document.getElementById("loadingBar").style.width= "100%";

    // setTimeout(function(){
    //     document.getElementById("preloader").style.display="none";
    // },2000);

    var scrollPosition = window.scrollY;
      // Example: Change the background color of an element
      var targetElement = document.getElementById("your-element-id");
      if (scrollPosition < 40) {
        $('#stickyheaders').css("background-color","black");

        $('#whatappIcon').css("display","block");

      } else {
        $('#stickyheaders').css("background-color","black");
          
        $('#whatappIcon').css("display","block");
      }
});


window.addEventListener("load", ()=>{
    // document.getElementById("loadingBar").style.width= "100%";
  
    // setTimeout(function(){
    //     document.getElementById("preloader").style.display="none";
    // },2000);
  
    var scrollPosition = window.scrollY;
        if (scrollPosition < 40) {
          $('#whatappIcon').css("display","none");
          if(window.innerWidth < 440){
            $('#stickyheaders').css("background-color","black");
        }else{
            $('#stickyheaders').css("background-color","rgba(20,47,21,0.9)");
        }
  
        } else {
          $('#stickyheaders').css("background-color","rgba(20,47,21,0.9)");
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
                $('#stickyheaders').css("background-color","rgba(20,47,21,0.9)");
                
                $('#whatappIcon').css("display","block");
            }
            else
            {
                if(mywindow.scrollTop() < 40) {
                    
  
                    if(window.innerWidth < 440){
                      $('#stickyheaders').css("background-color","rgba(20,47,21,0.9)");
                  }else{
                      $('#stickyheaders').css("background-color","rgba(20,47,21,0.9)");
                  }
                    
                    $('#whatappIcon').css("display","none");
                }
            
            }
        }
        mypos = mywindow.scrollTop();
    });
  });