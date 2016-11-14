var CadeauDAO = function()
{
  this.liste_cadeaux = [
    {"id":1,"nom":"Pebble","marque":"Pebble","description":"Montre intelligente"},
    {"id":2,"nom":"Voiture électrique","marque":"Tesla","description":"Pour sauver la planète"}
  ];
  
  this.listerTousLesCadeaux = function()
  {
    return this.liste_cadeaux;
  };
  
  this.trouverCadeauParId = function(id_cadeau)
  {
    for(var no_cadeau in this.liste_cadeaux)
    {
      if(this.liste_cadeaux[no_cadeau].id == id_cadeau)
      {
        return this.liste_cadeaux[no_cadeau];
      }
    }
  };
}