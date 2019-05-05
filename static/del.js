var projetSite = new Object();
projetSite.type="";
projetSite.objectif=[];
projetSite.activite=[];
projetSite.niveau="";
projetSite.typeDesign="";
projetSite.optimisation="";
projetSite.typeUxOptimisation="";
projetSite.hebergement="";

projetSite.internationalisation;
projetSite.maintenance;

projetSite.compteClient;
projetSite.prestationSupplementaire=[];
projetSite.fonctionnaliteAdditionnel=[];
projetSite.budget="";


function btnTypeProjetClick(){
  /*var siteInternet = document.getElementById('creationSiteInternet');
  var refonteGraphique = document.getElementById('refonteGraphiqueInternet');*/


  if(creationSiteInternetState)localStorage.type= 'creationSiteInternet';
  else if(refonteGraphiqueInternetState)localStorage.type= 'refonteGraphique';
  else localStorage.type='ameliorationTech';
  console.log(localStorage.type);
  window.location.assign("Objectif-du-Site.html");
  //simulate(document.getElementById('link'));
}

function btnObjectifSiteClick(){
/*var vendreOuRelation = document.getElementById('vendreOuRelation');
var presenterActivite = document.getElementById('presenterActivite');*/

var objectif =[];
if(presenterActiviteState) objectif.push("presenterActivite");
if(vendreOuRelationState) objectif.push("vendreOuRelation");
localStorage.setItem("objectif",JSON.stringify(objectif));


// getter
var getobjectif = JSON.parse(localStorage.getItem('objectif'));
console.log(getobjectif);

window.location.assign("vendre-ou-mettre-en-relation.html");
}

function btnVendreOuMettreEnRelationClick(){
  var activite =[];
  var trouve = false;
  if(siteEcommerceState) {
    activite.push("siteEcommerce");
    trouve = true;
  }
  else trouve = false;
  if(marketPlaceState) {
    activite.push("marketPlace");
    trouve = true;
  }
  else {
    trouve = false;
  }
  if(vendrePrestationState) activite.push("vendrePrestation");
  if(mettreEnRelationState) activite.push("mettreEnRelation");

  localStorage.setItem("activite",JSON.stringify(activite));
  console.log(activite);

  if (trouve) window.location.assign("site-ecommerce.html");
  else window.location.assign("Niveau-du-projet.html");
}

function btnNiveauDuProjetClick(){
  if (urgenceState) localStorage.niveau ="urgence";
  else if (rechercheDevisState) localStorage.niveau = "rechercheDevis";
  else localStorage.niveau = "renseignement";
  console.log(localStorage.niveau);
  console.log(localStorage.type);
  //console.log(projetSite);
  if(localStorage.type === "ameliorationTech")
  window.location.assign("Internationalisation.html");
  else window.location.assign("Instruction-design.html");
}



function btnInternationalisationClick(){
  if (InternationalisationsNoState) localStorage.internationalisation = false;
  else localStorage.internationalisation = true;
  console.log(localStorage.internationalisation);

  window.location.assign("maintenance.html");
}

function btnInstructionDesignClick() {
  if (designStandardState) localStorage.typeDesign="designStandard";
  else if (designMaquettesState) localStorage.typeDesign="designMaquettes";
  else localStorage.typeDesign = "designPremium";
  console.log(localStorage.typeDesign);

  if (optimisationPcState) localStorage.optimisation = "optimisationPc";
  else if (optimisationMobileState) localStorage.optimisation = "optimisationMobile";
  else localStorage.optimisation = "optimisationTabletteMobilePc";
  console.log(localStorage.optimisation);
  if ( (localStorage.type === "ameliorationTech")|| (localStorage.type === "refonteGraphique") )
    window.location.assign("Internationalisation.html");
  else  window.location.assign("Hebergement.html");

}

function btnSiteEcommerceclick(){
  if (moinsde100State) localStorage.nbSiteEcommercePage = "moinsde100";
  else if (cent500State) localStorage.nbSiteEcommercePage = "cent500State";
  else localStorage.nbSiteEcommercePage= "plusde500";
  console.log(localStorage.nbSiteEcommercePage);

  window.location.assign("Niveau-du-projet.html");
}

function btnHebergementClick(){
  if (doItMyselfState) localStorage.hebergement = "doItMyself";
  else if (hebergementStandardState) localStorage.hebergement = "hebergementStandard";
  else  localStorage.hebergement = "hebergementPremium";
  console.log(localStorage.hebergement);
  window.location.assign("Internationalisation.html");
}

function btnMaintenanceClick(){
  if (selfMaintenanceState) localStorage.maintenance = "selfMaintenance";
  else if (minimalMaintenanceState) localStorage.maintenance = "minimalMaintenance";
  else localStorage.maintenance = "evolutionMaintenance";
  console.log(localStorage.maintenance);
  window.location.assign("compte-client.html");
}
function btnCompteClientClick() {
  if (compteClientYesState) localStorage.compteClient = "compteClientYes";
  else localStorage.compteClient ="compteClientNo";
  console.log(localStorage.compteClient);
  window.location.assign("Supplement.html");
}

function btnPrestationSupClick() {
  var prestationSupplementaire = [];
  if (modulePayementState)prestationSupplementaire.push("modulePayement");
  if (creationLogoState)prestationSupplementaire.push("creationLogo");
  if (accompagnementSeaState)prestationSupplementaire.push("accompagnementSea");
  if (charteGraphiqueState)prestationSupplementaire.push("charteGraphique");
  if (accompagnementSeoState)prestationSupplementaire.push("accompagnementSeo");

  localStorage.setItem("prestationSupplementaire",JSON.stringify(prestationSupplementaire));
  console.log(prestationSupplementaire);
  window.location.assign("fonctionnalite-additionnel.html");
}
function btnFonctionnaliteAdditionelClick() {
  var fonctionnaliteAdditionnel=[];
  if (inscriptionNewsLetterState)fonctionnaliteAdditionnel.push("inscriptionNewsLetter");
  if (integrationReseauxSociauxState)fonctionnaliteAdditionnel.push("integrationReseauxSociaux");
  if (modulePrisesRdvState) fonctionnaliteAdditionnel.push("modulePrisesRdv");
  if (moteurRechercheInterneState) fonctionnaliteAdditionnel.push("moteurRechercheInterne");
  if (gestionFacturesState) fonctionnaliteAdditionnel.push("gestionFactures");
  if (moduleDemandeDevisState)fonctionnaliteAdditionnel.push("moduleDemandeDevis");

  localStorage.setItem("fonctionnaliteAdditionnel", JSON.stringify(fonctionnaliteAdditionnel));
  window.location.assign("Budget.html");
}
