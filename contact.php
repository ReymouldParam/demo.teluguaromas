<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best Telugu Biryani & Pulav Restaurant in Kompally, Hyderabad</title>
    <meta name="title" content="Best Telugu Biryani & Pulav Restaurant in Kompally, Hyderabad" />
    <meta name="description" content="Connect with us easily through our contact page. And reach out to make reservations, inquire about our menu, or discuss private events" />
    <meta name="keywords" content="Resturant, Biriyani, Pulavs, Biriyani, Pulav" />

    <?php 
    include 'includes/header-links.php';
    ?>

    <link rel="stylesheet" href="assets/css/contact.css">

    

                

</head>
<body>

  <!-- <div id="preloader">
    <div class="preloader-inner">
        <h2>LOADING..</h2>
        <div class="loading-bar"><div id="loadingBar" class="loading-bar-inner"></div></div>
    </div>
</div> -->

    <!-- header section -->

    <?php 
    include 'includes/header.php';
    ?>

    <section class="contact-container utility-background-property">

      <div class="contact-details-container">
        <i class='bx bxs-map'></i>
        <p>Sy No 105/F, H No 2-14/1 <br>Shiva Reddy Godowns North NCL,<br> NH44, Near Cine Planet,<br>Kompally, Hyderabad-500014.</p>
        <i class='bx bxs-phone-call'></i>
        <p>Restaurant : +91 83 6761 6761<br>Catering : +91 91 9957 9957 <br>Franchising : +91 83 6760 6760</p>
        <i class='bx bxs-envelope'></i>
        <p style="margin: 0;">catering@teluguaromas.com <br>contact@teluguaromas.com</p>
      </div>


        <div class="contact-form-container">
          <h1 class="contact-intro">Have a question for us?</h1>
          <h1 class="contact-heading">Contact Us Today</h1>
          <form action="contact_form.php" method="post" id="contactForm">
              <div class="contact-form-container">
                  <input type="text" name="name" placeholder="Enter Your Name" required>
                  <input type="email" name="email" placeholder="Enter Your Email-id" id="">
                  <input pattern="[0-9]{10}" name="mobile" placeholder="Enter Your Phone Number" id="" required>
                  <select name="category" required>
                    <option value="NA" disabled selected>Select An Option</option>
                    <option value="catering">Catering</option>
                    <option value="franchise">Franchise</option>
                    <option value="menu">Menu</option>
                    <option value="location">Location</option>
                  </select>
                  <textarea name="message" id="" cols="30" rows="3" placeholder="Enter Your Message" required></textarea>
              </div>
              <button type="submit">Send</button>
          </form>
        </div>
        <img src="assets/images/design-bg-sq.png" class="design-bg" alt="">
        <div class="contact-overlay-green"></div>
    </section>


    
        <!-- footer section -->

        <?php
        include 'includes/footer.php';
        ?>


<!-- <script src="assets/js/contact.js"></script> -->
<script src="assets/js/global.js"></script>
</body>
</html>