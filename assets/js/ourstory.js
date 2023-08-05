// Paralox effect

document.addEventListener("mousemove", function (e) {
    document.querySelectorAll(".moveObj").forEach(function (move) {
      var movingValue = move.getAttribute("data-value");
      var x =( e.clientX * movingValue)/200;
      var y = (e.clientY * movingValue)/200;
  
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  });