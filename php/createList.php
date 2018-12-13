<?php
    require 'connect.php';


    $name = $_POST['name'];
    $user = $_POST['user'];
    $priority = $_POST['priority'];

    $sql = "INSERT INTO listas (nome, classificacao, usuario, prioridade)
VALUES ('".$name."', 'Sem classificação', '".$user."', '".$priority."')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>