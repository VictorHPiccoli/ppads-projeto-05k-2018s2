<?php
    require 'connect.php';


    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "INSERT INTO usuarios (usuario, senha)
VALUES ('".$username."', '".$password."')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>