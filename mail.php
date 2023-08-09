<?php

$name = $_POST['name'];
$subject = $_POST['name'];
$email = $_POST['email'];
$massage = $_POST['message'];


$mailheader = "From".$name."<".$email">\r\n";

$recipient = "ayushm0201@gmail.com";

mail($recipient,$subject,$massage,$mailheader)
or die("Error!");

echo'Done';

?>