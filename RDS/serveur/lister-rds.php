<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

require_once("AnimeDAO.php");

$listeCadeau = AnimeDAO::lister();
echo urldecode(json_encode($listeCadeau));
