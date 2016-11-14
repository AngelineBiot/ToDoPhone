var applicationListeNoel = {
  lancer:function()
  {
    this.cadeauDAO = new CadeauDAO();
    this.liste_cadeaux = this.cadeauDAO.listerTousLesCadeaux(); 
    
    $(window).on('hashchange', $.proxy(this.naviguer, this));
    
    this.naviguer();
  },
  naviguer:function()
  {
    //alert("Naviguer selon : "+window.location.hash);
    var ancre = window.location.hash;
    if(!ancre)
    {
      this.listeCadeauxVue = new ListeCadeauxVue(this.liste_cadeaux);
      this.listeCadeauxVue.afficher();      
    }
    else if(ancre.match(/^#ajouter-cadeau/)) 
    {
      this.ajouterCadeauVue = new AjouterCadeauVue();
      this.ajouterCadeauVue.afficher(); 
    }
    else
    {
      var trouvailles = ancre.match(/^#cadeau\/([0-9]+)/);
      var id_cadeau = trouvailles[1];
      var cadeau = this.cadeauDAO.trouverCadeauParId(id_cadeau);
      this.cadeauVue = new CadeauVue(cadeau);
      this.cadeauVue.afficher();    
    }
  }
};

applicationListeNoel.lancer();




















