<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['email']) || empty($_POST['message'])) {
    http_response_code(400);
    return;
}

$to      = 'info@ekovormas.lt';
$subject = 'Žinutė iš puslapio ekovormas';
$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['remail']) . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = '<html><body>';
$message .= "<p>Siuntejas: " . strip_tags($_POST['name']) . "<br />";
$message .= "Tel.: " . strip_tags($_POST['phone']) . "</p>";
$message .=  strip_tags($_POST['message']);
$message .= "</body></html>";


mail($to, $subject, $message, $headers);

