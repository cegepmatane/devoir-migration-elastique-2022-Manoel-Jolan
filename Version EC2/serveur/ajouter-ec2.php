<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$animeJSON = file_get_contents('php://input');
$anime= json_decode( $animeJSON );
print_r($anime);

$listeAnime = [];
$listeAnimeJson = file_get_contents("liste-anime.json");

if(strlen($listeAnimeJson) > 0){
  $listeAnime = json_decode($listeAnimeJson);
  $nombreAnime = count($listeAnime);

  $anime->id = $nombreAnime;
  array_push($listeAnime, $anime);
  print_r($listeAnime);
}

$listeAnimeJson = json_encode($listeAnime);

/* Linux
sudo chgrp www-data liste-anime.json
sudo chmod g+w liste-anime.json
*/

file_put_contents("liste-anime.json", $listeAnimeJson);
