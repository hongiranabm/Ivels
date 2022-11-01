<?php
include('connection.php');
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$sql="SELECT * FROM user WHERE email='$email'";
$result=mysqli_query($con, $sql);
$count=mysqli_num_rows($result);

if($count!=0){
    header("Location: register.html?invalidEmail=true");
    exit;
}

$sql="INSERT INTO user VALUES ('$name', '$email', '$password')";
$result=mysqli_query($con, $sql);

header("Location: login.html");
?>
