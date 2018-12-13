<?php
    require 'connect.php';


    $name = $_POST['name'];
    $user = $_POST['user'];

    $sql = "INSERT INTO classificacao (nome, usuario)
VALUES ('".$name."', '".$user."')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>