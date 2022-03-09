class AnimeDAO{

constructor(){
  this.URL = 'http://3.208.129.152/'
}

lister(action){
fetch(this.URL + 'lister.php')
  .then(response => response.text())
  .then(data =>
    {
      console.log(data);
      data = data == null ? null : JSON.parse(data)
      let listeAnime = [];
      for(let position in data){
        let anime = new Anime(data[position].titre,
                                data[position].annee,
                                data[position].genre,
                                data[position].id,
                                data[position].studio);

        console.log(anime);
        listeAnime.push(anime);
      }
      action(listeAnime);
    });
  }

   chercher(id, action){
    fetch(this.URL + 'chercher-par-id.php' + '?id=' + id)
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let anime = new Anime(data.titre,
                                  data.annee,
                                  data.genre,
                                  data.id,
                                  data.studio);
          action(anime);
        });
  }

  ajouter(anime, action){
    fetch(this.URL + 'ajouter.php',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(anime),
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }
}

