var CadeauVue = function(cadeau)
{
  this.afficher = function()
  {
    var htmlEnConstruction = 
      CadeauVue.html
      .replace("{NOM}",cadeau.nom)
      .replace("{MARQUE}",cadeau.marque)
      .replace("{DESCRIPTION}",cadeau.description);
    
    $("body").html(htmlEnConstruction);
    
    
  }
}
CadeauVue.html = $("#page-cadeau").html();

// TODO : revenir à la liste