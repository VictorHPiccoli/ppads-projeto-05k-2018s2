<?php
    require 'connect.php';


    $name = $_POST['name'];
    $user = $_POST['user'];

    $sql = "DELETE FROM tarefas  WHERE nomeTarefa='".$name."' AND  usuario = '".$user."'";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>