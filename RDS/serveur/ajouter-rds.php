<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");



require_once("Anime.php");
require_once("AnimeDAO.php");

$animeJSON = file_get_contents('php://input');
$animeObjet = json_decode($animeJSON);
$anime = new Anime($animeObjet);

$id = AnimeDAO::ajouter($anime);
echo $id;

