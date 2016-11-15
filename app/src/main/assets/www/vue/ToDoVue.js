var toDoVue = function(todo)
{
  this.afficher = function()
  {
    var htmlEnConstruction = 
      toDoVue.html
      .replace("{NOM}",todo.nom)
      .replace("{DATE}",todo.date)
      .replace("{DESCRIPTION}",todo.description);
    
    $("body").html(htmlEnConstruction);
  }
}
toDoVue.html = $("#page-todo").html();

// TODO : revenir à la liste