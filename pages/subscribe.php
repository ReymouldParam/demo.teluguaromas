<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@reymould.com" ;
    $subject = "Subscription for Telugu aromas";
    $message =  $_POST["email"] . " wants to subscribe to Telugu aromas";

    mail($to, $subject, $message);
    mail("revanthdanduboina@gmail.com",$subject,$message);

    header("Location: indexMessage1.html");
    exit;
}
?>
