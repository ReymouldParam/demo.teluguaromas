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
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
        
var menuArr2 = $(".menu-card");

for (var i=0;i<menuArr2.length; i++){
    menuArr2[i].addEventListener("mouseover", ()=>{
        $.scrollify.disable();
    });
    menuArr2[i].addEventListener("mouseout", ()=>{
        $.scrollify.enable();
    });
}