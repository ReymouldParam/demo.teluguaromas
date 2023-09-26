<?php


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com";
    $subject = "General Enquiry From Telugu Aromas  Website";
    $message = "Name : " . $_POST["name"].
                "\nEmail : " . $_POST["email"].
                "\nPhone number : " . $_POST["mobile"].
                "\nRelated to : " . $_POST["category"].
                "\nMessage : " . $_POST["message"];

    
    if(mail($to, $subject, $message)){
        header("Location: contact?success=true");
    }else{
        header("Location: contact?success=false");
    }
    exit;
}
?>