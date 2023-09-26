<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com" ;
    $subject = "Subscription For Telugu aromas From Website";
    $message =  $_POST["email"] . " wants to subscribe to Telugu aromas";

    if(mail($to, $subject, $message)){
        header("Location: .?success=trueSubscribe");
    }else{
        header("Location: .?success=false");
    }
    exit;
}
?>
