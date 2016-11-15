var ToDoDAO = function()
{
  this.listeToDo = [
    {"id":1,"nom":"Prog embarquee","date":"14 nov","description":"Devoir PhoneGap : Livraison initiale"},
    {"id":2,"nom":"Mondes virtuels","date":"25 nov","description":"Projet Unreal C++ : ennemis"}
  ];
  
  this.listerTousLesToDo = function()
  {
    return this.listeToDo;
  };
  
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
}