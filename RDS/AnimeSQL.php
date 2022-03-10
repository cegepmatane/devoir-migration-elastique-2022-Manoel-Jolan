<?php
interface AnimeSQL
{
  public const SQL_LISTER          = "SELECT * FROM anime;";
  public const SQL_CHERCHER_PAR_ID = "SELECT * FROM anime WHERE id = :id;";
  public const SQL_AJOUTER         = "INSERT INTO anime (titre, annee, genre, studio) VALUES (:titre, :annee, :genre, :studio);";
  public const SQL_MODIFIER        = "UPDATE anime set titre= :titre , annee= :annee , genre= :genre , studio= :studio where id= :id ;";
}
