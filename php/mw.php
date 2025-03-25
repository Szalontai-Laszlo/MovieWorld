<?php

require_once("../common/php/environment.php");

$db = new Database('movieworld');

$query = "INSERT INTO users(vezeteknev, keresztnev, szuletes, email, jelszo) VALUES(?, ?, ?, ?, ?)";

$db->execute($query, [
    $vezetekNev = $_POST['$vezetekNev'];
    $keresztNev = $_POST['$keresztNev'];
    $szuletes = $_POST['szuletes'];
    $email = $_POST['email'];
    $jelszo = $_POST['jelszo'];

]);

echo "Sikeres regisztráció";
$db = null; 

?>