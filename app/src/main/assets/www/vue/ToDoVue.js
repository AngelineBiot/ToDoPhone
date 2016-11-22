var ToDoVue = function(todo)
{
  this.todo = todo;
  this.afficher = function()
  {
    var htmlEnConstruction = 
      ToDoVue.html
      .replace("{NOM}",todo.nom)
      .replace("{DATE}",todo.date)
      .replace("{DESCRIPTION}",todo.description)
      .replace("{ID}",todo.id);

    $("body").html(htmlEnConstruction);
  }
}
ToDoVue.html = $("#page-todo").html();