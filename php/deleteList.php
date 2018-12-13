<?php
    require 'connect.php';


    $name = $_POST['name'];
    $classification = $_POST['classification'];
    $user = $_POST['user'];

    $sql = "DELETE FROM listas  WHERE nome='".$name."' AND classificacao='".$classification."' AND usuario = '".$user."'";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>