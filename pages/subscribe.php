<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@reymould.com" ;
    $subject = "Subscription For Telugu aromas From Website";
    $message =  $_POST["email"] . " wants to subscribe to Telugu aromas";

    mail($to, $subject, $message);
    mail("revanth.danduboina@reymould.com",$subject,$message);

    header("Location: index.html");
    exit;
}
?>
