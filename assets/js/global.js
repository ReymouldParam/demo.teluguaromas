// window.addEventListener("load", ()=>{
//     document.getElementById("loadingBar").style.width= "100%";

//     setTimeout(function(){
//         document.getElementById("preloader").style.display="none";
//     },2000);

// });



// header dynamic scrool
jQuery(document).ready(function($) {
  var header = $('#stickyheaders');
  var whatsappIcon = $('#whatappIcon');

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    if (scrollTop <= 100) {
      header.css("background-color", "transparent");
      whatsappIcon.css("display", "none");
    } else {
      header.css("background-color", "var(--header-bg-color)");
      whatsappIcon.css("display", "block");
    }
  });

  // Set initial state
  $(window).trigger('scroll');
});


// form status pop up close function

document.addEventListener("keydown", function(e){
  if (e.key === "Escape") {
    closeSuccessMessage();
  }
});

function closeSuccessMessage(){
  $("#formSuccessMessage").css("display", "none");
  $("body").css("overflow-y", "auto");
}

const urlParams = new URLSearchParams(window.location.search);
  const flagValue = urlParams.get('success');

  if (flagValue === 'trueSubscribe') {
      document.getElementById("formReplyMessage").innerHTML="Thank You For Subscribing To Telugu Aromas.";
      document.getElementById("formSuccessMessage").style.display="block";
      $("body").css("overflow","hidden");
  }

  if (flagValue === 'true') {
    document.getElementById("formReplyMessage").innerHTML="Our Team Will Contact At Earliest.";
    document.getElementById("formSuccessMessage").style.display="block";
    $("body").css("overflow","hidden");
}
