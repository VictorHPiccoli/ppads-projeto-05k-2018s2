<?php
    require 'connect.php';

    $response = [];
    
    
    $sql = "SELECT nomeTarefa, nomeLista, usuario, prioridade FROM tarefas";
    $result = $conn->query($sql);
 
    $resultArray = [];
    while($data = $result->fetch_assoc()){
        $resultArray[] = $data;
    }

    $res = [];
    foreach(($resultArray) as $row){
        $res[] = $row;
    }
    echo json_encode($res);

    $conn->close();
?>


