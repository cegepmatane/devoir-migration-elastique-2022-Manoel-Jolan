class VueModifierAnime{
  constructor(){
    this.html = document.getElementById("html-vue-modifier-anime").innerHTML;
    this.modifierAnime = null;
    this.anime=null;
  }

  initialiserModifierAnime(anime, modifierAnime){
    this.modifierAnime = modifierAnime;
    this.anime = anime;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("anime-titre").innerHTML = this.anime.titre;
    document.getElementById("anime-annee").innerHTML = this.anime.annee;
    document.getElementById("anime-genre").innerHTML = this.anime.genre;
    document.getElementById("anime-studio").innerHTML = this.anime.studio;
    document.getElementById("anime-id").innerHTML = this.anime.id;
    document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    this.anime.titre = document.getElementById("anime-t").value;
    this.anime.annee = document.getElementById("anime-a").value;
    this.anime.genre = document.getElementById("anime-g").value;
    this.anime.studio = document.getElementById("anime-s").value;
    console.log(this.anime);
    this.modifierAnime(this.anime);

  }

}