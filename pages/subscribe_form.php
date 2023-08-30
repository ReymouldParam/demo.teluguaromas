<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@teluguaromas.com" ;
    $subject = "Subscription For Telugu aromas From Website";
    $message =  $_POST["email"] . " wants to subscribe to Telugu aromas";

    mail($to, $subject, $message);
    mail("contact@reymould.com",$subject,$message);

    if(mail("revanth.danduboina@reymould.com",$subject,$message)){
        header("Location: home.php?success=trueSubscribe");
    }else{
        header("Location: home.php?success=false");
    }
    exit;
}
?>
