var ToDoDAO = function()
{
  this.initialiser = new  function()
  {
    if (!this.listeToDo)
    {
        this.listeToDo = new Array();
    }
  }

  this.listerTousLesToDo = function()
  {
    if (!this.listeToDo && localStorage['todo'])
    {
      this.listeToDo = JSON.parse(localStorage['todo']);
    }

    for (position in this.listeToDo)
    {
      var todo = this.listeToDo[position];
      if (todo)
      {
        alert(this.listeToDo[position] + " " + todo.nom);
      }
    }
    return this.listeToDo;
  }

  this.initialiser();

  this.trouverToDoParId = function(idToDo)
  {
    for(var noToDo in this.listeToDo)
    {
      if(this.listeToDo[noToDo].id == idToDo)
      {
        return this.listeToDo[noToDo];
      }
    }
  };

  this.ajouterToDo = function(todo)
  {
    if (this.listeToDo.length > 0)
    {
      todo.id = this.listeToDo[this.listeToDo.length-1].id + 1;
    }
    else
    {
      todo.id = 1;
    }

    this.listeToDo[todo.id] = todo;

    localStorage['todo'] = JSON.stringify(this.listeToDo);
  };

  this.modifierToDo = function(todo)
  {
    this.listeToDo[todo.id] = todo;

    localStorage['todo'] = JSON.stringify(this.listeToDo);
  }
}