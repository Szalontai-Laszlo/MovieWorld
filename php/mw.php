<?php

require_once("../../common/php/environment.php");

include('database_connect.php');

$form_data = file_get_contents("php://input");

$args = json_decode($form_data);

$stmt = $connection->prepare("INSERT INTO `users`(`first_name`, `last_name`, `email`, `password`) 
VALUES (:first_name, :last_name, :email, :password)");

//A megadott paramétereket be helyettesíti a js által megadott értékekből
$stmt->bindParam(':first_name', $args['first_name']);
$stmt->bindParam(':last_name', $args['last_name']);
$stmt->bindParam(':email', $args['email']);
$stmt->bindParam(':password', $args['password']);

//Ha egy megadott adat sem üres akkor tovább fog futni
if (!empty($args['first_name']) && !empty($args['last_name']) && !empty($args['email']) && !empty($args['password'])) {
        $stmt->execute();
        Util::setResponse(["Sikeres regisztráció!",true]);
    
}
//Ha hiányzik valami akkor ki írja
else 
    Util::setResponse(["Hiányzó adatok",false]);
?>
