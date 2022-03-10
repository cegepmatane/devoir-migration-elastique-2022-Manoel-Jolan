<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once("AnimeDAO.php");

$listeCadeau = AnimeDAO::lister();
echo json_encode($listeCadeau);
