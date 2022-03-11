<?php
  class Anime implements JsonSerializable
  {
    public static $filtres =
      array(
        'titre' => FILTER_SANITIZE_STRING,
        'annee' => FILTER_SANITIZE_STRING,
        'genre' => FILTER_SANITIZE_STRING,
        'studio' => FILTER_SANITIZE_STRING,
        'id' => FILTER_VALIDATE_INT
        
      );

      protected $titre;
      protected $annee;
      protected $genre;
      protected $studio;
      protected $id;


    public function __construct($animeObjet)
    {
      $tableau = filter_var_array((array) $animeObjet, Anime::$filtres);
      $this->titre = $tableau['titre'];
      $this->annee = $tableau['annee'];
      $this->genre = $tableau['genre'];
      $this->studio = $tableau['studio'];
      $this->id = $tableau['id'];
    }

    public function __set($propriete, $valeur)
    {
      switch($propriete)
      {
        case 'id':
          $this->id = $valeur;
          break;
        case 'titre':
          $this->titre = $valeur;
          break;
        case 'annee':
          $this->annee = $valeur;
          break;
        case 'genre':
          $this->genre = $valeur;
          break;
        case 'studio':
          $this->studio = $valeur;
          break;
      }
    }

    public function __get($propriete)
    {
      $self = get_object_vars($this);
      return $self[$propriete];
    }

    public function jsonSerialize()
    {
      return array(
        "id"=>$this->id,
        "titre"=>$this->titre,
        "annee"=>$this->annee,
        "genre"=>$this->genre,
        "studio"=>$this->studio

      );
    }
  }
