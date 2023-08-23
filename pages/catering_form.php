<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "catering@teluguaromas.com";
    $subject = "Catering Enquiry From Telugu Aromas Website";
    $message = "Name : " . $_POST["name"].
                "\nPhone Number : " . $_POST["mobile"].
                "\nType of catering : " . $_POST["category"].
                "\nLocation : " . $_POST["location"].
                "\nDate : " . $_POST["date"];
    mail($to, $subject, $message);
    mail("revanth.danduboina@reymould.com",$subject,$message);
    mail("contact@reymould.com",$subject,$message);

    if(mail("revanth.danduboina@reymould.com",$subject,$message)){
        header("Location: catering.php?success=true");
    }else{
        header("Location: catering.php?success=false");
    }

    
}
?>