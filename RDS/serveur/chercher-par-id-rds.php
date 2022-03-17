<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');


require_once("Anime.php");
require_once("AnimeDAO.php");

$anime = new Anime($_GET);
$anime = AnimeDAO::chercherParId($anime->id);
echo urldecode(json_encode($anime));
