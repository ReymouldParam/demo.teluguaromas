<?php


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com";
    $subject = "General Enquiry From Telugu Aromas  Website";
    $message = "Name : " . $_POST["name"].
                "\nEmail : " . $_POST["email"].
                "\nPhone number : " . $_POST["mobile"].
                "\nRelated to : " . $_POST["category"].
                "\nMessage : " . $_POST["message"];

    mail($to, $subject, $message);
    mail("revanth.danduboina@reymould.com",$subject,$message);
    

    if(mail("revanth.danduboina@reymould.com",$subject,$message)){
        header("Location: contact.php?success=true");
    }else{
        header("Location: contact.php?success=false");
    }
    exit;
}
?>