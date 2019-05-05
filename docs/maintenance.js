/*var elName = document.getElementById('maintenance');
elName.className = 'active';

var finalHtml = "<a href=\"compte-client.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var selfMaintenanceState = true;
var minimalMaintenanceState = true;
var evolutionMaintenanceState = true;

var selfMaintenance = document.getElementById("selfMaintenanceSvg");
var minimalMaintenance = document.getElementById("minimalMaintenanceSvg");
var evolutionMaintenance = document.getElementById("evolutionMaintenanceSvg");

function selfMaintenanceClick() {

  if(selfMaintenanceState){
    selfMaintenanceState = false;
    selfMaintenance.style.display="none"
  }
  else {
    selfMaintenanceState = true;
    evolutionMaintenanceState= false;
    minimalMaintenanceState=false;
  selfMaintenance.style.display="initial";
  evolutionMaintenance.style.display = "none";
  minimalMaintenance.style.display = "none";
}
}

function minimalMaintenanceClick() {

  if(minimalMaintenanceState){
    minimalMaintenanceState = false;
    minimalMaintenance.style.display="none"
  }
  else {
    minimalMaintenanceState = true;
    selfMaintenanceState= false;
    evolutionMaintenanceState=false;
  minimalMaintenance.style.display="initial";
  selfMaintenance.style.display = "none";
  evolutionMaintenance.style.display = "none";
}
}

function evolutionMaintenanceClick() {

  if(evolutionMaintenanceState){
    evolutionMaintenanceState = false;
    evolutionMaintenance.style.display="none"
  }
  else {
    evolutionMaintenanceState = true;
    minimalMaintenanceState= false;
    selfMaintenanceState=false;
  evolutionMaintenance.style.display="initial";
  minimalMaintenance.style.display = "none";
  selfMaintenance.style.display = "none";
}
}

function verify() {
  selfMaintenanceClick();
  minimalMaintenanceClick();
  evolutionMaintenanceClick();
}
verify();
