<?php

require_once("../../common/php/environment.php");

include('database_connect.php');

$sql = "SELECT name, rovid_leiras, hosszu_leiras, img FROM movies";
