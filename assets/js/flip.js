function flipCarousel() {
    setTimeout(() => {
      document.getElementById("page1").style.transform = "rotateY(-180deg)";
      document.getElementById("page1").style.zIndex = "1";
      document.getElementById("page5").style.transform = "rotateY(-180deg)";
      document.getElementById("page5").style.zIndex = "1";
      document.getElementById("page9").style.transform = "rotateY(-180deg)";
      document.getElementById("page9").style.zIndex = "1";
    }, flipTime*1);

    setTimeout(() => {
      document.getElementById("page2").style.transform = "rotateY(-180deg)";
      document.getElementById("page2").style.zIndex = "2";
      document.getElementById("page6").style.transform = "rotateY(-180deg)";
      document.getElementById("page6").style.zIndex = "2";
      document.getElementById("page10").style.transform = "rotateY(-180deg)";
      document.getElementById("page10").style.zIndex = "2";
    }, flipTime*2);

    setTimeout(() => {
      document.getElementById("page3").style.transform = "rotateY(-180deg)";
      document.getElementById("page3").style.zIndex = "3";
      document.getElementById("page7").style.transform = "rotateY(-180deg)";
      document.getElementById("page7").style.zIndex = "3";
      document.getElementById("page11").style.transform = "rotateY(-180deg)";
      document.getElementById("page11").style.zIndex = "3";
    }, flipTime*3);

    setTimeout(() => {
      document.getElementById("page1").style.transform = "rotateY(0deg)";
      document.getElementById("page2").style.transform = "rotateY(0deg)";
      document.getElementById("page3").style.transform = "rotateY(0deg)";
      document.getElementById("page1").style.zIndex = "3";
      document.getElementById("page2").style.zIndex = "2";
      document.getElementById("page3").style.zIndex = "1";

      document.getElementById("page5").style.transform = "rotateY(0deg)";
      document.getElementById("page6").style.transform = "rotateY(0deg)";
      document.getElementById("page7").style.transform = "rotateY(0deg)";
      document.getElementById("page5").style.zIndex = "3";
      document.getElementById("page6").style.zIndex = "2";
      document.getElementById("page7").style.zIndex = "1";
      
      document.getElementById("page9").style.transform = "rotateY(0deg)";
      document.getElementById("page10").style.transform = "rotateY(0deg)";
      document.getElementById("page11").style.transform = "rotateY(0deg)";
      document.getElementById("page9").style.zIndex = "3";
      document.getElementById("page10").style.zIndex = "2";
      document.getElementById("page11").style.zIndex = "1";

    }, flipTime*4);
  }

const flipTime = 5000;

flipCarousel();
setInterval(flipCarousel, flipTime*4);