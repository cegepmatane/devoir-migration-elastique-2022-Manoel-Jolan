﻿class Application {
  constructor(window, vueListeAnime, vueAnime, vueAjouterAnime, AnimeDAO){

    this.window = window;

    this.vueListeAnime = vueListeAnime;

    this.vueAnime = vueAnime;

    this.vueAjouterAnime = vueAjouterAnime;

    this.vueAjouterAnime.initialiserAjouterAnime(anime =>this.ajouterAnime(anime));

    this.AnimeDAO = AnimeDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.AnimeDAO.lister((listeAnime) => this.afficherNouvelleListeAnime(listeAnime));

    }else if(hash.match(/^#ajouter-anime/)){

      this.vueAjouterAnime.afficher();

    }else{

      let navigation = hash.match(/^#anime\/([0-9]+)/);
      let idAnime = navigation[1];

      this.AnimeDAO.chercher(idAnime, (anime) => this.afficherNouveauAnime(anime));
    }
  }

  afficherNouvelleListeAnime(listeAnime){

    console.log(listeAnime);
    this.vueListeAnime.initialiserListeAnime(listeAnime);
    this.vueListeAnime.afficher();
  }

  afficherNouveauAnime(anime){
    console.log(anime);
    this.vueAnime.initialiserAnime(anime);
    this.vueAnime.afficher();
  }

  ajouterAnime(anime){
    this.AnimeDAO.ajouter(anime, () => this.afficherListeAnime());
  }

  afficherListeAnime(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeAnime(), new VueAnime(), new VueAjouterAnime(), new AnimeDAO());