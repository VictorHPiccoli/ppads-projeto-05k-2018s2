<?php
$servername = "localhost";
$username = "id8213268_aaa";
$password = "abcabc";
$database = 'id8213268_teste';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully";
?>