/*var elName = document.getElementById('instructionDesign');
elName.className = 'active';

var finalHtml = "<a href=\"Hebergement.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var designStandardState = true;
var designMaquettesState = true;
var designPremiumState = true;

var optimisationPcState = true;
var optimisationMobileState = true;
var optimisationTabletteMobilePcState = true;

var designStandard = document.getElementById('designStandardSvg');
var designMaquettes = document.getElementById("designMaquettesSvg");
var designPremium = document.getElementById("designPremiumSvg");

var optimisationPc = document.getElementById('optimisationPcSvg');
var optimisationMobile = document.getElementById('optimisationMobileSvg');
var optimisationTabletteMobilePc = document.getElementById('optimisationTabletteMobilePcSvg');

function optimisationTabletteMobilePcClick() {

  if(optimisationTabletteMobilePcState){
    optimisationTabletteMobilePcState = false;
    optimisationTabletteMobilePc.style.display="none"
  }
  else {
    optimisationTabletteMobilePcState = true;
    optimisationMobileState= false;
    optimisationPcState=false;
  optimisationTabletteMobilePc.style.display="initial";
  optimisationMobile.style.display = "none";
  optimisationPc.style.display = "none";
}
}

function optimisationMobileClick() {

  if(optimisationMobileState){
    optimisationMobileState = false;
    optimisationMobile.style.display="none"
  }
  else {
    optimisationMobileState = true;
    optimisationTabletteMobilePcState= false;
    optimisationPcState=false;
  optimisationMobile.style.display="initial";
  optimisationTabletteMobilePc.style.display = "none";
  optimisationPc.style.display = "none";
}
}

function optimisationPcClick() {

  if(optimisationPcState){
    optimisationPcState = false;
    optimisationPc.style.display="none"
  }
  else {
    optimisationPcState = true;
    optimisationMobileState= false;
    optimisationTabletteMobilePcState=false;
  optimisationPc.style.display="initial";
  optimisationMobile.style.display = "none";
  optimisationTabletteMobilePc.style.display = "none";
}
}

function designStandardClick() {

  if(designStandardState){
    designStandardState = false;
    designStandard.style.display="none"
  }
  else {
    designStandardState = true;
    designMaquettesState= false;
    designPremiumState=false;
  designStandard.style.display="initial";
  designMaquettes.style.display = "none";
  designPremium.style.display = "none";
}
}
function designMaquettesClick() {

  if(designMaquettesState){
    designMaquettesState = false;
    designMaquettes.style.display="none"
  }
  else {
    designMaquettesState = true;
    designStandardState= false;
    designPremiumState=false;
  designMaquettes.style.display="initial";
  designStandard.style.display = "none";
  designPremium.style.display = "none";
}
}

function designPremiumClick() {

  if(designPremiumState){
    designPremiumState = false;
    designPremium.style.display="none"
  }
  else {
    designPremiumState = true;
    designStandardState= false;
    designMaquettesState=false;
  designPremium.style.display="initial";
  designStandard.style.display = "none";
  designMaquettes.style.display = "none";
}
}


function verify(){
  optimisationPcClick();
  optimisationMobileClick();
  optimisationTabletteMobilePcClick();
  designPremiumClick();
  designStandardClick();
  designMaquettesClick();
}

verify();
