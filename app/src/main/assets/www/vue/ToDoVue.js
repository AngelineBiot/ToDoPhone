var ToDoVue = function(todo)
{
  this.afficher = function()
  {
    var htmlEnConstruction = 
      ToDoVue.html
      .replace("{NOM}",todo.nom)
      .replace("{DATE}",todo.date)
      .replace("{DESCRIPTION}",todo.description);
    
    $("body").html(htmlEnConstruction);
  }
}
ToDoVue.html = $("#page-todo").html();

// TODO : revenir à la liste