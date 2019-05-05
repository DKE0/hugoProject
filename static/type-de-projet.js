/*var elName = document.getElementById('typeDeProjet');
elName.className = 'active';*/


var creationSiteInternetState= true;
var refonteGraphiqueInternetState = true;
var ameliorationTechSiteInternetState = true;

var siteInternet = document.getElementById('creationSiteInternetsvg');
var refonteGraphique = document.getElementById('refonteGraphiqueInternetsvg');
var ameliorationTech = document.getElementById('ameliorationTechSiteInternetsvg');


function creationSiteInternetClick() {

  if(creationSiteInternetState){
    creationSiteInternetState = false;
    siteInternet.style.display="none"
  }
  else {
    creationSiteInternetState = true;
    refonteGraphiqueInternetState= false;
    ameliorationTechState=false;
  siteInternet.style.display="initial";
  refonteGraphique.style.display = "none";
  ameliorationTech.style.display = "none";
}
}

function refonteGraphiqueInternetClick() {

  if(refonteGraphiqueInternetState){
    refonteGraphiqueInternetState=false;
    refonteGraphique.style.display = "none";
  }
  else {
    refonteGraphiqueInternetState=true;
    ameliorationTechSiteInternetState = false;
    creationSiteInternetState=false;
    refonteGraphique.style.display = "initial";
    ameliorationTech.style.display = "none";
    siteInternet.style.display="none";
  }
}

function ameliorationTechSiteInternetClick() {

  if(ameliorationTechSiteInternetState){
    ameliorationTechSiteInternetState = false;
    ameliorationTech.style.display = "none";
  }
  else {
    ameliorationTechSiteInternetState=true
    refonteGraphiqueInternetState= false;
    creationSiteInternetState=false;
    ameliorationTech.style.display = "initial";
    refonteGraphique.style.display = "none";
    siteInternet.style.display="none";
  }
}

function verify(){

  ameliorationTechSiteInternetClick();
  refonteGraphiqueInternetClick();
  creationSiteInternetClick();
}
verify();
