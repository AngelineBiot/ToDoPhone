var applicationListeToDo =
{
  lancer:function()
  {
    $(window).on('hashchange', $.proxy(this.naviguer, this));

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/))
    {
      $(document).on('deviceready', $.proxy(this.initialiserPourDonnees, this));
    }
    else
    {
      this.initialiserPourDonnees();
    }
  },

  initialiserPourDonnees:function()
  {
    this.toDoDAO = new ToDoDAO();
    this.naviguer();
  },

  naviguer:function()
  {
    var ancre = window.location.hash;
    if(!ancre)
    {
      this.toDoDAO.listerTousLesToDo($.proxy(this.afficherTousLesToDo, this));
    }
    else if(ancre.match(/^#ajouter-todo/))
    {
      this.ajouterToDoVue = new AjouterToDoVue();
      this.ajouterToDoVue.afficher($.proxy(this.sauvegarderNouveauToDo, this));
    }
    else if(ancre.match(/^#modifier-todo\/([0-9]+)/))
    {
      var idTrouve = ancre.match(/^#modifier-todo\/([0-9]+)/);
      var idToDoAModifier = idTrouve[1];
      var todoAModifier = this.toDoDAO.trouverToDoParId(idToDoAModifier);

      this.modifierToDoVue = new ModifierToDoVue(todoAModifier);
      this.modifierToDoVue.afficher($.proxy(this.sauvegarderToDoModifie, this));
    }
    else
    {
      var trouvailles = ancre.match(/^#todo\/([0-9]+)/);
      var idToDo = trouvailles[1];
      var todo = this.toDoDAO.trouverToDoParId(idToDo);
      this.toDoVue = new ToDoVue(todo);
      this.toDoVue.afficher();
    }
  },

  sauvegarderNouveauToDo:function(todo)
  {
    this.toDoDAO.ajouterToDo(todo);
  },

  sauvegarderToDoModifie:function(todo)
  {
    this.toDoDAO.modifierToDo(todo);
  },

  afficherTousLesToDo:function(listeToDo)
  {
    this.listeToDoVue = new listeToDoVue(listeToDo);
    this.listeToDoVue.afficher();
  }
};

applicationListeToDo.lancer();




















