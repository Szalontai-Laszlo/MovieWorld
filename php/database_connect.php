<?php

//Adatbázishoz csatlakozás

$server = "localhost";
$root = "root";
$password = "";
$db_name = "movieworld";

$connection = new mysqli($server, $root, $password, $db_name);

if($connection -> connect_error){
    die("Sikertelen csatlakozás:" . $connection -> connect_error);
}

echo "Sikeres csatlakozás";