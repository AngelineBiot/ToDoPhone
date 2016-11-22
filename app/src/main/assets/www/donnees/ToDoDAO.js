var ToDoDAO = function()
{
  this.listeToDo = [];

  this.initialiser = function()
  {
    var SQL_CREATION = "CREATE TABLE IF NOT EXISTS todo(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), date VARCHAR(100), description TEXT)";
    this.baseDeDonnees = window.openDatabase("ListeToDo", "1.0", "To Do Liste", 200000);

    this.baseDeDonnees.transaction
    (
      function(operation)
      {
        var SQL_CREATION = "CREATE TABLE IF NOT EXISTS todo(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50), date VARCHAR(100), description TEXT)";
        operation.executeSql(SQL_CREATION);
      },
      this.reagirErreur,
      this.reagirSucces
    );
  }

  this.ajouterToDo = function(todo)
  {
    this.baseDeDonnees.transaction
    (
      function(operation)
      {
        var SQL_AJOUT = "INSERT INTO todo (nom, date, description) VALUES(?,?,?)";
        var parametres = [todo.nom, todo.date, todo.description];
        operation.executeSql(SQL_AJOUT, parametres);
      },
      this.reagirErreur,
      this.reagirSucces
    );
  }

  this.modifierToDo = function(todo)
  {
    this.baseDeDonnees.transaction
    (
      function(operation)
      {
        var SQL_MODIFICATION = "UPDATE todo SET nom = ?, date = ?, description = ? WHERE id = ?;";
        var parametres = [todo.nom, todo.date,todo.description,todo.id];
        operation.executeSql(SQL_MODIFICATION, parametres);
      },
      this.reagirErreur,
      this.reagirSucces
    );
  }

  this.listerTousLesToDo = function(finalisation)
  {
	this.baseDeDonnees.transaction
	(
	  $.proxy
	  (
	    function(operation)
        {
          var SQL_SELECTION = "SELECT * FROM todo";
          operation.executeSql
          (
            SQL_SELECTION,
            [],
            $.proxy
            (
              function(operation, resultat)
              {
                this.listeToDo = [];
                for(var position = 0; position < resultat.rows.length; position++)
                {
                  var enregistrementToDo = resultat.rows.item(position);
                  var todo =
                  new ToDo
                  (
                    enregistrementToDo.id,
                    enregistrementToDo.nom,
                    enregistrementToDo.date,
                    enregistrementToDo.description
                  );
                  this.listeToDo[this.listeToDo.length] = todo;
                }
              },
              this
            )
          );
        },
        this
      ),

      this.reagirErreur,

      $.proxy
      (
        function()
        {
          finalisation(this.listeToDo);
        },
        this
      )
    );
  };

  this.listerTousLesToDo = function(finalisation)
  {
    var self = this;
  	self.baseDeDonnees.transaction
  	(
      function(operation)
      {
        var SQL_SELECTION = "SELECT * FROM todo";
        operation.executeSql
        (
          SQL_SELECTION,
          [],
          function(operation, resultat)
          {
            self.listeToDo = [];
            for(var position = 0; position < resultat.rows.length; position++)
            {
              var enregistrementToDo = resultat.rows.item(position);
              var todo =
                new ToDo
                (
                  enregistrementToDo.id,
                  enregistrementToDo.nom,
                  enregistrementToDo.date,
                  enregistrementToDo.description
                );
              self.listeToDo[self.listeToDo.length] = todo;
            }
          }
        );
      },
      this.reagirErreur,
      function()
      {
        finalisation(self.listeToDo);
      }
    );
  }

  this.reagirErreur = function(erreur)
  {
    console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
    alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
  }

  this.reagirSucces = function()
  {
  	console.log("SUCCES:SQL:");
  	alert("SUCCES:SQL:");
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
}