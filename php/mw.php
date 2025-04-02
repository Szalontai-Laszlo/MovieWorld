<?php

require_once("../../common/php/environment.php");

include('database_connect.php');

$form_data = file_get_contents("php://input");

$args = json_decode($form_data);

$error = [];
$data = [];

if(empty($form_data->first_name)) {
    $error[] = 'First name is required';
} else {
    $data[':first_name'] = $form_data->first_name;
}

if(empty($form_data->last_name)) {
    $error[] = 'Last name is required';
} else {
    $data[':last_name'] = $form_data->last_name;
}

if(empty($form_data->email)) {
    $error[] = 'Email is required';
} else {
    if(!filter_var($form_data->email, FILTER_VALIDATE_EMAIL)) {
        $error[] = 'Invalid Email Format';
    } else {
        $data[':email'] = $form_data->email;
    }
}

if(empty($form_data->password)) {
    $error[] = 'Password is required';
} else {
    $data[':password'] = password_hash($form_data->password, PASSWORD_DEFAULT);
}

if(empty($error)) {
    $query = "
    INSERT INTO `users`(`first_name`, `last_name`, `email`, `password`) 
    VALUES (:first_name, :last_name, :email, :password)
    ";
    
    $statement = $db->prepare($query);
    if($statement->execute($data)) {
        $message = 'A regisztráció sikeres!';
    }
} else {
    $validation_error = implode(", ", $error);
}

$output = array(
    'error'  => $validation_error ?? '',
    'message' => $message ?? ''
);

echo json_encode($output);

?>
