/*var elName = document.getElementById('siteEcommerce');
elName.className = 'active';*/

var moinsde100State = true;
var cent500State = true;
var plusde500State = true;

var moinsde100 = document.getElementById('moinsde100Svg');
var cent500 = document.getElementById('cent500Svg');
var plusde500 = document.getElementById('plusde500Svg');

function moinsDe100Click() {
  if (moinsde100State)
  {
    moinsde100State = false;
    moinsde100.style.display = "none";
  }else {
    moinsde100State = true;
    cent500State = false;
    plusde500State = false;
    moinsde100.style.display = "initial";
    cent500.style.display = "none";
    plusde500.style.display = "none";
  }

}

function cent500Click() {

  if(cent500State){
    cent500State = false;
    cent500.style.display="none"
  }
  else {
    cent500State = true;
    moinsde100State= false;
    plusde500State=false;
  cent500.style.display="initial";
  moinsde100.style.display = "none";
  plusde500.style.display = "none";
}
}

function plusde500Click() {

  if(plusde500State){
    plusde500State = false;
    plusde500.style.display="none"
  }
  else {
    plusde500State = true;
    moinsde100State= false;
    cent500State=false;
  plusde500.style.display="initial";
  moinsde100.style.display = "none";
  cent500.style.display = "none";
}
}

function verify(){
  moinsDe100Click();
  cent500Click();
  plusde500Click();
}

verify();
