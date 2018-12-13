<?php
    require 'connect.php';


    $name = $_POST['name'];
    $nameList = $_POST['nameList'];
    $user = $_POST['user'];
    $priority = $_POST['priority'];

    $sql = "INSERT INTO tarefas (nomeTarefa, nomeLista, usuario, prioridade)
    VALUES ('".$name."', '".$nameList."', '".$user."', '".$priority."')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>