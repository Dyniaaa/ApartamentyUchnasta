<?php

$name = $_POST["name"];
$from = $_POST["mail"];
$subject = "Wiadmość ze strony Uchnasta";
$to = "apartamentyuchnasta3@gmail.com";
$message = $_POST["Msg"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mailStatus = mail($to, $subject, $txt, $headers);
