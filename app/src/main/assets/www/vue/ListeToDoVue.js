var listeToDoVue = function(listeToDo)
{
  this.afficher = function()
  {
    $("body").html(listeToDoVue.html);
    var htmlListeToDo = $("#liste-todo");
    var htmlEnConstruction = "";

    for(var noToDo in listeToDo)
    {
      htmlEnConstruction +=
        listeToDoVue.html_item
          .replace("{ID}",listeToDo[noToDo].id)
          .replace("{NOM}",listeToDo[noToDo].nom);
    }
    htmlListeToDo.html(htmlEnConstruction);
  }
}
listeToDoVue.html = $("#page-liste-todo").html();
listeToDoVue.html_item = $("#item-liste-todo").html();