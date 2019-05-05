/*var elName = document.getElementById('internationalisation');
elName.className = 'active';

var finalHtml = "<a href=\"maintenance.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/

var InternationalisationsNoState = true;
var InternationalisationsYesState = true;

var InternationalisationsNo = document.getElementById('InternationalisationsNoSvg');
var InternationalisationsYes = document.getElementById('InternationalisationsYesSvg');

function InternationalisationsNoClick(){
  if(InternationalisationsNoState){
    InternationalisationsNoState = false;
    InternationalisationsNo.style.display='none';
  }else {
    InternationalisationsNoState = true;
    InternationalisationsYesState = false;
    InternationalisationsNo.style.display = 'initial';
    InternationalisationsYes.style.display = 'none';
  }
}

function InternationalisationsYesClick(){
  if (InternationalisationsYesState){
    InternationalisationsYesState = false;
    InternationalisationsYes.style.display = "none";
  }else {
    InternationalisationsYesState = true;
    InternationalisationsNoState = false;
    InternationalisationsYes.style.display = 'initial';
    InternationalisationsNo.style.display = 'none';
  }
  }

  function verify(){
   InternationalisationsNoClick();
   InternationalisationsYesClick();
  }

  verify();
