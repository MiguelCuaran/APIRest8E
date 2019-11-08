<?php
//call connectionDB file
include("connectionDB.php");

//Get XML input values
$Email = $_POST['email'];
//
//


//Create SQL INSERT
$sql = "INSERT INTO users (email) VALUES ('$Email')";

//Execute SQL and validate operation
if ($conn->query($sql) === true) {
    echo "User has been registered into Data Base";
}else{
    die("The error is: ".$conn->error);
}

?>