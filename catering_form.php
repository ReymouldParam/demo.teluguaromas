<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "catering@teluguaromas.com";
    $subject = "Catering Enquiry From Telugu Aromas Website";
    $message = "Name : " . $_POST["name"].
                "\nPhone Number : " . $_POST["mobile"].
                "\nType of catering : " . $_POST["category"].
                "\nLocation : " . $_POST["location"].
                "\nDate : " . $_POST["date"];

    if(mail($to, $subject, $message)){
        header("Location: catering?success=true");
    }else{
        header("Location: catering?success=false");
    }
}
?>