# Manoël Nohra et Jolan Thomassin

class CadeauDAO{
  constructor(){
    this.URL = 'http://ec2-123-226-147-99.compute-1.amazonaws.com/'
  }

  lister(action){
    fetch(this.URL + 'lister.php')
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let listeCadeau = [];
          for(let position in data){
            let cadeau = new Cadeau(data[position].nom,
                                    data[position].marque,
                                    data[position].description,
                                    data[position].id);

            console.log(cadeau);
            listeCadeau.push(cadeau);
          }
          action(listeCadeau);
        });
  }

  chercher(id, action){
    fetch(this.URL + 'chercher-par-id.php' + '?id=' + id)
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let cadeau = new Cadeau(data.nom,
                                  data.marque,
                                  data.description,
                                  data.id);
          action(cadeau);
        });
  }

  ajouter(cadeau, action){
    fetch(this.URL + 'ajouter.php',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(cadeau),
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }

}
