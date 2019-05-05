/*var elName = document.getElementById('hebergement');
elName.className = 'active';

var finalHtml = "<a href=\"Internationalisation.html\"> Suivant </a>";

var boutonvar = document.getElementById('boutonid');

boutonvar.innerHTML = finalHtml;*/
var doItMyselfState= true;
var hebergementStandardState = true;
var hebergementPremiumState =true;

var doItMyself = document.getElementById("doItMyselfSvg");
var hebergementStandard = document.getElementById("hebergementStandardSvg");
var hebergementPremium = document.getElementById("hebergementPremiumSvg");


  function doItMyselfClick() {

    if(doItMyselfState){
      doItMyselfState = false;
      doItMyself.style.display="none"
    }
    else {
      doItMyselfState = true;
      hebergementStandardState= false;
      hebergementPremiumState=false;
    doItMyself.style.display="initial";
    hebergementStandard.style.display = "none";
    hebergementPremium.style.display = "none";
  }
  }

  function hebergementStandardClick() {

    if(hebergementStandardState){
      hebergementStandardState = false;
      hebergementStandard.style.display="none"
    }
    else {
      hebergementStandardState = true;
      doItMyselfState= false;
      hebergementPremiumState=false;
    hebergementStandard.style.display="initial";
    doItMyself.style.display = "none";
    hebergementPremium.style.display = "none";
  }
  }

  function hebergementPremiumClick() {

    if(hebergementPremiumState){
      hebergementPremiumState = false;
      hebergementPremium.style.display="none"
    }
    else {
      hebergementPremiumState = true;
      doItMyselfState= false;
      hebergementStandardState=false;
    hebergementPremium.style.display="initial";
    doItMyself.style.display = "none";
    hebergementStandard.style.display = "none";
  }
  }

  function verify(){

    doItMyselfClick();
    hebergementPremiumClick();
    hebergementStandardClick();
  }
  verify();
