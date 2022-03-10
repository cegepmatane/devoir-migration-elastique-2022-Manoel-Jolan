<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeAnimeJson = file_get_contents("liste-anime.json");

if(strlen($listeAnimeJson) > 0){
  $listeAnime = json_decode($listeAnimeJson);
  echo json_encode($listeAnime);
}else{
  echo json_encode([]);
}