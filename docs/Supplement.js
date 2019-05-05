/*var elName = document.getElementById('supplement');
elName.className = 'active';

var finalHtml = "<a href=\"fonctionnalite-additionnel.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}*/

var modulePayementState = true;
var creationLogoState = true;
var accompagnementSeaState = true;
var charteGraphiqueState = true;
var accompagnementSeoState =true;

var modulePayement = document.getElementById("modulePayementSvg");
var creationLogo = document.getElementById("creationLogoSvg");
var accompagnementSea = document.getElementById("accompagnementSeaSvg");
var charteGraphique = document.getElementById("charteGraphiqueSvg");
var accompagnementSeo=document.getElementById("accompagnementSeoSvg");


function modulePayementClick() {

  if (modulePayementState){
    modulePayementState = false;
    modulePayement.style.display="none";
  } else {
    modulePayementState=true;
    modulePayement.style.display="initial";
  }
}

function creationLogoClick() {

  if (creationLogoState){
    creationLogoState = false;
    creationLogo.style.display="none";
  } else {
    creationLogoState=true;
    creationLogo.style.display="initial";
  }
}


function accompagnementSeaClick() {

  if (accompagnementSeaState){
    accompagnementSeaState = false;
    accompagnementSea.style.display="none";
  } else {
    accompagnementSeaState=true;
    accompagnementSea.style.display="initial";
  }
}


function accompagnementSeoClick() {

  if (accompagnementSeoState){
    accompagnementSeoState = false;
    accompagnementSeo.style.display="none";
  } else {
    accompagnementSeoState=true;
    accompagnementSeo.style.display="initial";
  }
}


function charteGraphiqueClick() {

  if (charteGraphiqueState){
    charteGraphiqueState = false;
    charteGraphique.style.display="none";
  } else {
    charteGraphiqueState=true;
    charteGraphique.style.display="initial";
  }
}
