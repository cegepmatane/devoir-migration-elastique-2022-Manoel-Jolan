<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


require_once("Anime.php");
require_once("AnimeDAO.php");

$anime = new Anime($_GET);
$anime = AnimeDAO::chercherParId($anime->id);
echo json_encode($anime);
