/*var elName = document.getElementById('compteClient');
elName.className = 'active';

var finalHtml = "<a href=\"Supplement.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var compteClientNoState = true;
var compteClientYesState = true;

var compteClientNo = document.getElementById('compteClientNoSvg');
var compteClientYes = document.getElementById("compteClientYesSvg");

function compteClientNoClick() {
  if(compteClientNoState){
    compteClientNoState = false;
    compteClientNo.style.display='none';
  }else {
    compteClientNoState = true;
    compteClientYesState = false;
    compteClientNo.style.display = 'initial';
    compteClientYes.style.display = 'none';
  }
}


function compteClientYesClick(){
  if (compteClientYesState){
    compteClientYesState = false;
    compteClientYes.style.display='none';
  }else {
    compteClientYesState = true;
    compteClientNoState = false;
    compteClientYes.style.display = 'initial';
    compteClientNo.style.display = 'none';
  }
  }

  function verify(){
   compteClientNoClick();
   compteClientYesClick();
  }

  verify();
