/*var elName = document.getElementById('objectifDuSite');
elName.className = 'active';

var finalHtml = "<a href=\"vendre-ou-mettre-en-relation.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var vendreOuRelationState = true;
var presenterActiviteState = true;

var vendreOuRelation = document.getElementById('vendreOuRelationSvg');
var presenterActivite = document.getElementById('presenterActiviteSvg');

function vendreOuRelationClick() {

  if (vendreOuRelationState){
    vendreOuRelationState=false;
    vendreOuRelation.style.display ="none";
  }
  else{
    vendreOuRelationState=true;
    vendreOuRelation.style.display= "initial";

  }
}

function presenterActiviteClick() {

  if(presenterActiviteState){
    presenterActiviteState=false;
    presenterActivite.style.display ="none";
  }
  else {
    presenterActiviteState = true;
    presenterActivite.style.display ="initial";
  }
}
