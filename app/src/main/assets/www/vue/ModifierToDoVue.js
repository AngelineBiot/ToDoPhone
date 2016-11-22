var ModifierToDoVue = function(todo)
{
  this.todo = todo;
  this.afficher = function(actionModifierToDo)
  {
    var htmlEnConstruction =
      ModifierToDoVue.html
        .replace("{NOM}",todo.nom)
        .replace("{DATE}",todo.date)
        .replace("{DESCRIPTION}",todo.description);
    this.actionModifierToDo = actionModifierToDo;
    $("#formulaire-modifier").on("submit", $.proxy(this.modifierToDo, this));
    $("body").html(htmlEnConstruction);
  }

  this.modifierToDo = function()
  {
    var nom = $("#todo-nom").val();
    var date = $("#todo-date").val();
    var description = $("#todo-description").val();
    var id = this.todo.id;

    var todo = new ToDo(id, nom, date, description);

    this.actionModifierToDo(todo);

    window.location.hash = "";
    event.preventDefault();
  }
}
ModifierToDoVue.html = $("#page-modifier-todo").html();