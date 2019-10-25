<?php

//conectando variables  - MySQL credenciales

$servername="localhost";//127.0.0.1
$usename="root";
$password="";
$dbname="market";
$port="3306";

//create connection 

$conn=new mysqli(
    $servername,
    $usename,
    $password,
    $dbname
);
//chekconecion
if($conn->connect_error){
    die("connection failed: ". $conn-connect_error);
}else{
    echo"connected sucesfully";
}

?>