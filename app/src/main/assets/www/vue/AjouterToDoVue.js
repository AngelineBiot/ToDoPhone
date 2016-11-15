var ajouterToDoVue = function()
{
  this.afficher = function()
  {
    $("body").html(ajouterToDoVue.html);
  }
}
ajouterToDoVue.html = $("#page-ajouter-todo").html();

