/*var elName = document.getElementById('fonctionnaliteAdditionnel');
elName.className = 'active';


var finalHtml = "<a href=\"Budget.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var inscriptionNewsLetterState = true;
var integrationReseauxSociauxState = true;
var modulePrisesRdvState = true;
var moteurRechercheInterneState= true;
var gestionFacturesState = true;
var moduleDemandeDevisState = true;

var inscriptionNewsLetter = document.getElementById("inscriptionNewsLetterSvg");
var integrationReseauxSociaux = document.getElementById("integrationReseauxSociauxSvg");
var modulePrisesRdv = document.getElementById("modulePrisesRdvSvg");
var moteurRechercheInterne = document.getElementById("moteurRechercheInterneSvg");
var gestionFactures = document.getElementById("gestionFacturesSvg");
var moduleDemandeDevis =document.getElementById("moduleDemandeDevisSvg");

function inscriptionNewsLetterClick() {

  if (inscriptionNewsLetterState){
    inscriptionNewsLetterState = false;
    inscriptionNewsLetter.style.display="none";
  } else {
    inscriptionNewsLetterState=true;
    inscriptionNewsLetter.style.display="initial";
  }
}

function integrationReseauxSociauxClick() {

  if (integrationReseauxSociauxState){
    integrationReseauxSociauxState = false;
    integrationReseauxSociaux.style.display="none";
  } else {
    integrationReseauxSociauxState=true;
    integrationReseauxSociaux.style.display="initial";
  }
}

function modulePrisesRdvClick() {

  if (modulePrisesRdvState){
    modulePrisesRdvState = false;
    modulePrisesRdv.style.display="none";
  } else {
    modulePrisesRdvState=true;
    modulePrisesRdv.style.display="initial";
  }
}

function moteurRechercheInterneClick() {

  if (moteurRechercheInterneState){
    moteurRechercheInterneState = false;
    moteurRechercheInterne.style.display="none";
  } else {
    moteurRechercheInterneState=true;
    moteurRechercheInterne.style.display="initial";
  }
}

function gestionFacturesClick() {

  if (gestionFacturesState){
    gestionFacturesState = false;
    gestionFactures.style.display="none";
  } else {
    gestionFacturesState=true;
    gestionFactures.style.display="initial";
  }
}

function moduleDemandeDevisClick() {

  if (moduleDemandeDevisState){
    moduleDemandeDevisState = false;
    moduleDemandeDevis.style.display="none";
  } else {
    moduleDemandeDevisState=true;
    moduleDemandeDevis.style.display="initial";
  }
}
