<?php

$clientIp .= 'Your IP address: ' . $_SERVER['REMOTE_ADDR'];

$btnId .= 'Button ID: ' . $_POST['btnId'];

$dateTime = 'Button click time: ' . date('Y-m-d H:i:s');

file_put_contents('click.log', $dateTime . PHP_EOL . $clientIp . PHP_EOL . $btnId . PHP_EOL, FILE_APPEND);