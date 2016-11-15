var applicationListeToDo = {
  lancer:function()
  {
    this.toDoDAO = new ToDoDAO();
    this.listeToDo = this.toDoDAO.listerTousLesToDo();
    
    $(window).on('hashchange', $.proxy(this.naviguer, this));
    
    this.naviguer();
  },
  naviguer:function()
  {
    var ancre = window.location.hash;
    if(!ancre)
    {
      this.listeToDoVue = new listeToDoVue(this.listeToDo);
      this.listeToDoVue.afficher();
    }
    /*
    else if(ancre.match(/^#ajouter-todo/))
    {
      this.ajouterToDoVue = new ajouterToDoVue();
      this.ajouterToDoVue.afficher();
    }*/
    else
    {
      var trouvailles = ancre.match(/^#todo\/([0-9]+)/);
      var idToDo = trouvailles[1];
      var todo = this.toDoDAO.trouverToDoParId(idToDo);
      this.toDoVue = new toDoVue(todo);
      this.toDoVue.afficher();
    }
  }
};

applicationListeToDo.lancer();




















