<?php
include('connection.php');
$email=$_POST['email'];
$password=$_POST['password'];

$sql="SELECT name FROM user WHERE email='$email' AND password='$password'";
$result=mysqli_query($con, $sql);
$count=mysqli_num_rows($result);

if($count==0){
    header("Location: login.html?invalidUser=true");
    exit;
}

$value = mysqli_fetch_assoc($result);
$name = $value['name'];

header("Location: Activity.html?name=$name");
?>
