<?php
require_once("Anime.php");
require_once("AnimeSQL.php");

class Accesseur
{
  public static $baseDeDonnees = null;

  public static function initialiser()
  {
    try
    {
      $base = 'app-anime';
      $hote = 'app-anime.cw11b2wwkk7x.us-east-1.rds.amazonaws.com';
      $usager = 'manoel';
      $motDePasse = 'Chocolat02';
      $nomDeSourceDeDonnees = 'mysql:dbname=' . $base . ';host=' . $hote;
      AnimeDAO::$baseDeDonnees = new PDO($nomDeSourceDeDonnees, $usager, $motDePasse);
      AnimeDAO::$baseDeDonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(Exception $e)
    {
      echo $e;
    }
  }
}

class AnimeDAO extends Accesseur implements AnimeSQL
{
  public static function lister()
  {
    AnimeDAO::initialiser();

    $demandeListeAnime = AnimeDAO::$baseDeDonnees->prepare(AnimeDAO::SQL_LISTER);
    $demandeListeAnime->execute();
    $listeAnimeObjet = $demandeListeAnime->fetchAll(PDO::FETCH_OBJ);
    //$contratsTableau = $demandeListeAnime->fetchAll(PDO::FETCH_ASSOC);
    $listeAnime = null;
    foreach($listeAnimeObjet as $animeObjet) $listeAnime[] = new Anime($animeObjet);
    return $listeAnime;
  }

  public static function chercherParId($id)
  {
    AnimeDAO::initialiser();

    $demandeAnime = AnimeDAO::$baseDeDonnees->prepare(AnimeDAO::SQL_CHERCHER_PAR_ID);
    $demandeAnime->bindParam(':id', $id, PDO::PARAM_INT);
    $demandeAnime->execute();
    $animeObjet = $demandeAnime->fetchAll(PDO::FETCH_OBJ)[0];
    //$contrat = $demandeAnime->fetch(PDO::FETCH_ASSOC);
    return new Anime($animeObjet);
  }

  public static function ajouter($anime)
  {
    AnimeDAO::initialiser();
    $demandeAjoutAnime = AnimeDAO::$baseDeDonnees->prepare(AnimeDAO::SQL_AJOUTER);
    $demandeAjoutAnime->bindValue(':titre', $anime->titre, PDO::PARAM_STR);
    $demandeAjoutAnime->bindValue(':annee', $anime->annee, PDO::PARAM_STR);
    $demandeAjoutAnime->bindValue(':genre', $anime->genre, PDO::PARAM_STR);
    $demandeAjoutAnime->bindValue(':studio', $anime->studio, PDO::PARAM_STR);
    $demandeAjoutAnime->execute();
    return AnimeDAO::$baseDeDonnees->lastInsertId();
  }

  public static function modifier($anime)
  {
    AnimeDAO::initialiser();

    $modificationAnime= AnimeDAO::$baseDeDonnees->prepare(AnimeDao::SQL_MODIFIER);

    $modificationAnime->bindValue(':id',$anime->id,PDO::PARAM_INT);
    $modificationAnime->bindValue(':titre',$anime->titre,PDO::PARAM_STR);
    $modificationAnime->bindValue(':annee',$anime->annee,PDO::PARAM_STR);
    $modificationAnime->bindValue(':genre',$anime->genre,PDO::PARAM_STR);
    $modificationAnime->bindValue(':studio',$anime->studio,PDO::PARAM_STR);
    $modificationAnime->execute();
  }
}
