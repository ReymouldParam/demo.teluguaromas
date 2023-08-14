// Paralox effect

document.addEventListener("mousemove", function (e) {
    document.querySelectorAll(".moveObj").forEach(function (move) {
      var movingValue = move.getAttribute("data-value");
      var x =( e.clientX * movingValue)/200;
      var y = (e.clientY * movingValue)/200;
  
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  });


  var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

  const textSpeed = 30;
  const message_1 = "At Telugu Aromas, we are the destination for a symphony of flavors, where delicious Bagara Rice meets authentic Telangana and Andhra-style curries. We believe in harnessing the power of food to craft unforgettable experiences. Our journey is fueled by a passion for sharing unique flavors, inspiring us to curate a menu that tantalizes taste buds and leaves a lasting impression.";
  const message_2 = "Central to our culinary tapestry are our mouthwatering non-vegetarian curries. Each dish is a masterpiece, meticulously prepared with unwavering care and attention. The result is a collection of flavors that transport you to the heart of Telugu cuisine, where tradition and innovation meet.";
  const message_3 = "But our journey doesn't stop at the restaurant doors. We extend our commitment to excellence through outstanding catering services. Our offerings spotlight the authentic tastes of Andhra and Telangana’s culinary heritage, allowing you to share our passion for delectable cuisine with your cherished guests.";
  const message_4 = "What sets Telugu Aromas apart is not just the meals we serve, but the stories we tell through our food. Each bite carries with it the legacy of our region's culinary traditions, and each dish is a testament to our dedication.Join us on this culinary expedition as we celebrate the art of cooking and savor the rich tapestry of flavors that our heritage offers. Telugu Aromas is not just a restaurant – it's an invitation to indulge in an extraordinary journey of taste, culture, and unforgettable moments.";
  
  $(function () {
    showText("#ourstoryPara1", message_1, 0, textSpeed);   
  });

  // setTimeout(() => {
  //   showText("#ourstoryPara2", message_2, 0, textSpeed);   
  // }, (message_1.length*textSpeed+3000));

