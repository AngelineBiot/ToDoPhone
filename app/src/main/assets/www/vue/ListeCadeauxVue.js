var ListeCadeauxVue = function(liste_cadeaux)
{
  this.afficher = function()
  {
    $("body").html(ListeCadeauxVue.html);
    var html_liste_cadeaux = $("#liste-cadeaux");
    var htmlEnConstruction = "";
    
    for(var no_cadeau in liste_cadeaux)
    {
        htmlEnConstruction += 
          ListeCadeauxVue.html_item
          .replace("{ID}",liste_cadeaux[no_cadeau].id)
          .replace("{NOM}",liste_cadeaux[no_cadeau].nom);
    }
    html_liste_cadeaux.html(htmlEnConstruction);
  }
}
ListeCadeauxVue.html = $("#page-liste-cadeaux").html();
ListeCadeauxVue.html_item = $("#item-liste-cadeaux").html();