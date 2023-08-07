<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com";
    $subject = "General enquiry from teluguaromas.com";
    $message = "Name : " . $_POST["name"].
                "\nEmail : " . $_POST["email"].
                "\nPhone number : " . $_POST["mobile"].
                "\nRelated to : " . $_POST["category"].
                "\nMessage : " . $_POST["message"];

    mail($to, $subject, $message);
    mail("revanthdanduboina@gmail.com",$subject,$message);
    mail("revanth.danduboina@reymould.com",$subject,$message);
    mail("contact@reymould.com",$subject,$message);

    header("Location: contact.html");
    exit;
}
?>