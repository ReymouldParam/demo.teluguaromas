<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com";
    $subject = "Catering Enquiry From Telugu Aromas Website";
    $message = "Name : " . $_POST["name"].
                "\nPhone Number : " . $_POST["mobile"].
                "\nType of catering : " . $_POST["category"].
                "\nLocation : " . $_POST["location"].
                "\nDate : " . $_POST["date"];

    mail($to, $subject, $message);
    mail("revanth.danduboina@reymould.com",$subject,$message);
    mail("contact@reymould.com",$subject,$message);

    header("Location: catering.php");
    exit;
}
?>