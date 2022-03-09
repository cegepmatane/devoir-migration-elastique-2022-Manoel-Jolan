<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listeAnimeJson = file_get_contents("liste-anime.json");

if(strlen($listeAnimeJson) > 0){
  $listeAnime = json_decode($listeAnimeJson);
  foreach($listeAnime as $anime) {
      if ($id == $anime->id) {
          echo json_encode($anime);
          die();
      }
  }
}
echo json_encode([]);

