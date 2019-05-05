/*var elName = document.getElementById('niveauDuProjet');
elName.className = 'active';

console.log(projetSite);
var finalHtml;
console.log(projetSite.type);
if(projetSite.type == "ameliorationTech")
finalHtml = "<a href=\"Internationalisation.html\"> Suivant </a>";
else finalHtml = "<a href=\"Instruction-design.html\"> Suivant </a>";
var boutonvar = document.getElementById('boutonid');
console.log(finalHtml);
boutonvar.innerHTML = finalHtml;*/

var urgenceState = true;
var rechercheDevisState = true;
var renseignementState = true;

var urgence = document.getElementById('urgenceSvg');
var rechercheDevis = document.getElementById('rechercheDevisSvg');
var renseignement = document.getElementById('renseignementSvg');

function urgenceClick() {

  if (urgenceState){
    urgenceState = false;
    urgence.style.display = "none";
  }
  else {
    urgenceState = true;
    rechercheDevisState = false;
    renseignementState = false;
    urgence.style.display = "initial";
    rechercheDevis.style.display = "none";
    renseignement.style.display = "none";
  }
}

function rechercheDevisClick() {

  if (rechercheDevisState) {
    rechercheDevisState=false;
    rechercheDevis.style.display = "none";
  }
  else {
    rechercheDevisState = true;
    urgenceState = false;
    renseignementState = false;
    rechercheDevis.style.display = "initial";
    urgence.style.display = "none";
    renseignement.style.display = "none";
  }
}

function renseignementClick() {
  if (renseignementState) {
    renseignementState = false;
    renseignement.style.display ="none"
  }
  else {
    renseignementState = true;
    rechercheDevisState = false;
    urgenceState = false;
    renseignement.style.display= "initial";
    rechercheDevis.style.display = "none";
    urgence.style.display = "none";
  }
}

function verify(){

renseignementClick();
urgenceClick();
rechercheDevisClick();

}
verify();
