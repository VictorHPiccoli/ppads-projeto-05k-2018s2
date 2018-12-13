<?php
    require 'connect.php';

    $response = [];
    
    $sql = "SELECT usuario, senha FROM usuarios";
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