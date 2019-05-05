/*var elName = document.getElementById('vendreOuMettreEnRelation');
elName.className = 'active';

var finalHtml = "<a href=\"Niveau-du-projet.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var siteEcommerceState = true;
var marketPlaceState = true;
var vendrePrestationState = true;
var mettreEnRelationState = true;

var siteEcommerce = document.getElementById('siteEcommerceSvg');
var marketPlace = document.getElementById('marketPlaceSvg');
var vendrePrestation = document.getElementById('vendrePrestationSvg');
var mettreEnRelation = document.getElementById('mettreEnRelationSvg');


function siteEcommerceClick() {

  if (siteEcommerceState){
    siteEcommerceState = false;
    siteEcommerce.style.display="none";
  } else {
    siteEcommerceState=true;
    siteEcommerce.style.display="initial";
  }
}

function marketPlaceClick() {

  if (marketPlaceState) {
    marketPlaceState=false;
    marketPlace.style.display = "none";
  }
  else{
    marketPlaceState=true;
    marketPlace.style.display = "initial";
  }
}

function vendrePrestationClick() {

  if (vendrePrestationState){
    vendrePrestationState=false;
    vendrePrestation.style.display="none";
  }
  else {
    vendrePrestationState=true;
    vendrePrestation.style.display="initial";
  }
}

function mettreEnRelationClick() {

  if (mettreEnRelationState) {
    mettreEnRelationState=false;
    mettreEnRelation.style.display = "none";
  }
  else {
    vendrePrestationState = true;
    vendreOuRelation.style.display = "initial";
  }
}
