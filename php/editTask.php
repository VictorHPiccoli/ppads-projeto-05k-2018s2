<?php
    require 'connect.php';


    $oldName = $_POST['oldNome'];
    $newNome = $_POST['newNome'];
    $user = $_POST['user'];
    $priority = $_POST['priority'];

    $sql = "UPDATE tarefas SET nomeTarefa='".$newNome."', prioridade='".$priority."' WHERE nomeTarefa='".$oldName."' AND usuario = '".$user."'";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>