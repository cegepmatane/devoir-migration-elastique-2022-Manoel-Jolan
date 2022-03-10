﻿class Application {
  constructor(window, vueListeAnime, vueAnime, vueAjouterAnime, vueModifierAnime, AnimeDAO, anime){

    this.window = window;

    this.vueListeAnime = vueListeAnime;

    this.vueAnime = vueAnime;

    this.vueAjouterAnime = vueAjouterAnime;

    this.vueAjouterAnime.initialiserAjouterAnime(anime =>this.ajouterAnime(anime));

    this.vueModifierAnime = vueModifierAnime;

    this.AnimeDAO = AnimeDAO;

    this.anime=anime;
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

    }
    else if(hash.match(/^#modifier-anime/)){
      this.afficherAnime(this.anime, (anime) =>this.modifierAnime(anime));
    }
    else{

      let navigation = hash.match(/^#anime\/([0-9]+)/);
      let id = navigation[1];

      this.AnimeDAO.chercher(id, (anime) => this.afficherNouveauAnime(anime));
    }
  }

  afficherNouvelleListeAnime(listeAnime){

    console.log(listeAnime);
    this.vueListeAnime.initialiserListeAnime(listeAnime);
    this.vueListeAnime.afficher();
  }

  afficherNouveauAnime(anime){
    console.log(anime);
    this.anime = anime;
    this.vueAnime.initialiserAnime(anime);
    this.vueAnime.afficher();
  }
  afficherAnime(anime, action)
  {
    console.log(anime);
    this.vueModifierAnime.initialiserModifierAnime(anime, action);
    this.vueModifierAnime.afficher();
  }

  ajouterAnime(anime){
    this.AnimeDAO.ajouter(anime, () => this.afficherListeAnime());
  }
  modifierAnime(anime)
  {
    this.AnimeDAO.modifier(anime, ()=>this.afficherListeAnime());
  }
  afficherListeAnime(){
    this.window.location.hash = "#";
  }
}
new Application(window, new VueListeAnime(), new VueAnime(), new VueAjouterAnime(), new VueModifierAnime(), new AnimeDAO(), new Anime());
