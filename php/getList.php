<?php
    require 'connect.php';

    $contador = 0;
    $response = [];
    
    $sql = "SELECT nome, classificacao, usuario, prioridade FROM listas";
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