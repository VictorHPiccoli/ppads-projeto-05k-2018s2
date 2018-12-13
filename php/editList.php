<?php
    require 'connect.php';


    $oldName = $_POST['oldNome'];
    $oldClass = $_POST['oldClass'];
    $newNome = $_POST['newNome'];
    $newClass = $_POST['newClass'];
    $user = $_POST['user'];
    $priority = $_POST['priority'];

    $sql = "UPDATE listas SET nome='".$newNome."',classificacao='".$newClass."', prioridade='".$priority."' WHERE nome='".$oldName."' AND classificacao='".$oldClass."' AND usuario = '".$user."'";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>