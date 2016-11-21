var AjouterToDoVue = function()
{
  this.afficher = function(actionAjouterToDo)
  {
    $("body").html(AjouterToDoVue.html);
    $("#formulaire-ajouter").on("submit", $.proxy(this.ajouterToDo, this));
    this.actionAjouterToDo = actionAjouterToDo;
  }

  this.ajouterToDo = function()
  {
    var nom = $("#todo-nom").val();
    var date = $("#todo-date").val();
    var description = $("#todo-description").val();

    var todo = new ToDo(id = null, nom, date, description);

    this.actionAjouterToDo(todo);

    window.location.hash = "";
    event.preventDefault();
  }
}
AjouterToDoVue.html = $("#page-ajouter-todo").html();

