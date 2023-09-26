<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com";
    $subject = "Franchise Enquiry From Telugu Aromas  Website";
    $message = "Name : " . $_POST["name"].
                "\nEmail : " . $_POST["email"].
                "\nPhone number : " . $_POST["mobile"].
                "\nMessage : " . $_POST["message"];

    mail($to, $subject, $message);

    header("Location: franchise?success=true");
    
    exit;
}
?>