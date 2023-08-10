<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com";
    $subject = "Catering enquiry from teluguaromas.com";
    $message = "Name : " . $_POST["name"].
                "\Phone Number : " . $_POST["mobile"].
                "\nType of catering : " . $_POST["category"].
                "\Location : " . $_POST["location"].
                "\Date : " . $_POST["date"];

    mail($to, $subject, $message);
    mail("revanthdanduboina@gmail.com",$subject,$message);
    mail("revanth.danduboina@reymould.com",$subject,$message);
    mail("contact@reymould.com",$subject,$message);

    header("Location: catering.html");
    exit;
}
?>