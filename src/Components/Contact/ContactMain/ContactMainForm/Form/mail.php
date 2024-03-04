<?php

$name = $_POST["name"];
$from = $_POST["mail"];
$subject = "ApartamentyUchnasta";
$to = "apartamentyuchnasta3@gmail.com";
$message = $_POST["msg"];

$txt = "Imie: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Tresc: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    echo json_encode(array('status' => 'success'));
} else {
    echo json_encode(array('status' => 'error'));
}
