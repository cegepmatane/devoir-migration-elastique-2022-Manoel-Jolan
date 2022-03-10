class VueListeAnime{
  constructor(){
    this.html = document.getElementById("html-vue-liste-anime").innerHTML;
    this.listeAnimeDonnee = null;
  }

  initialiserListeAnime(listeAnimeDonnee){
    this.listeAnimeDonnee = listeAnimeDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listeAnime = document.getElementById("liste-anime");
    const listeAnimeItemHTML = listeAnime.innerHTML;
    let listeAnimeHTMLRemplacement = "";

    for(var numeroAnime in this.listeAnimeDonnee){
      let listeAnimeItemHTMLRemplacement = listeAnimeItemHTML;
      listeAnimeItemHTMLRemplacement = listeAnimeItemHTMLRemplacement.replace("{Anime.id}",this.listeAnimeDonnee[numeroAnime].id);
      listeAnimeItemHTMLRemplacement = listeAnimeItemHTMLRemplacement.replace("{Anime.titre}",this.listeAnimeDonnee[numeroAnime].titre);
      listeAnimeHTMLRemplacement += listeAnimeItemHTMLRemplacement;
    }

    listeAnime.innerHTML = listeAnimeHTMLRemplacement;
  }

}
