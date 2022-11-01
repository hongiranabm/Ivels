<?php
$servername="localhost";
$username="root";
$password="";
$db_name="traveldb";
$con=mysqli_connect($servername, $username, $password, $db_name);
if(!$con){
die("connection faild: " . mysqli_connect_error());
}
echo"connected successfully";
?>