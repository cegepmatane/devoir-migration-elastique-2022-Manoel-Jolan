class VueAjouterAnime{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-anime").innerHTML;
    this.ajouterAnime = null;
  }

  initialiserAjouterAnime(ajouterAnime){
    this.ajouterAnime = ajouterAnime;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let titre = document.getElementById("anime-titre").value;
    let annee = document.getElementById("anime-annee").value;
    let genre = document.getElementById("anime-genre").value;
    let studio = document.getElementById("anime-studio").value;

    this.ajouterAnime(new Anime(titre, annee, genre, null, studio,));

  }

}