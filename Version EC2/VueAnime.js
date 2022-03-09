class VueAnime{
  constructor(){
    this.html = document.getElementById("html-vue-anime").innerHTML;
    this.anime = null;
  }

  initialiserAnime(anime){
    this.anime = anime;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("anime-titre").innerHTML = this.anime.titre;
    document.getElementById("anime-annee").innerHTML = this.anime.annee;
    document.getElementById("anime-genre").innerHTML = this.anime.genre;
    document.getElementById("anime-id").innerHTML = this.anime.id;
    document.getElementById("anime-studio").innerHTML = this.anime.studio;
  }

}
