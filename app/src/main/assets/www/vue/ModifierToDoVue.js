var ModifierToDoVue = function(todo)
{
  this.todo = todo;
  this.afficher = function(actionModifierToDo)
  {
    console.log("ModifierToDoVue:afficher:this.todo:" + this.todo);
    var htmlEnConstruction =
      ModifierToDoVue.html
        .replace("{NOM}",this.todo.nom)
        .replace("{DATE}",this.todo.date)
        .replace("{DESCRIPTION}",this.todo.description);
    this.actionModifierToDo = actionModifierToDo;
	
    $("body").html(htmlEnConstruction);
	
    $("#formulaire-modifier").on("submit", $.proxy(this.modifierToDo, this));
  };

  this.modifierToDo = function()
  {
    var nom = $("#todo-nom").val();
    var date = $("#todo-date").val();
    var description = $("#todo-description").val();
    var id = this.todo.id;

    var todo = new ToDo(id, nom, date, description);
	console.log("ModifierToDoVue:modifierToDo:todo:"+todo);
    this.actionModifierToDo(todo);

    window.location.hash = "";
    event.preventDefault();
  }
}
ModifierToDoVue.html = $("#page-modifier-todo").html();