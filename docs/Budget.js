/*var elName = document.getElementById('budget');
elName.className = 'active';*/

var IDKnowState = true;
var moinsde1000EState = true;
var mille5000EState = true;
var cinqMille10000EState = true;
var dixMille20000EState = true;
var plusde20000EState = true;

var IDKnow = document.getElementById("IDKnowSvg");
var moinsde1000E = document.getElementById("moinsde1000ESvg");
var mille5000E = document.getElementById("mille5000ESvg");
var cinqMille10000E =  document.getElementById("cinqMille10000ESvg");
var dixMille20000E =  document.getElementById("dixMille20000ESvg");
var plusde20000E = document.getElementById("plusde20000ESvg");

function dixMille20000EClick() {

  if (dixMille20000EState){
    dixMille20000EState = false;

    dixMille20000E.style.display="none";
  } else {
    dixMille20000EState=true;

    IDKnowState=false;
    moinsde1000EState = false;
    mille5000EState = false;
    cinqMille10000EState = false;
    plusde20000EState = false;
    IDKnow.style.display="none";
    moinsde1000E.style.display = "none";
    mille5000E.style.display = "none";
    cinqMille10000E.style.display = "none";
    plusde20000E.style.display = "none";

    dixMille20000E.style.display="initial";
  }
}

function plusde20000EClick() {

  if (plusde20000EState){
    plusde20000EState = false;
    plusde20000E.style.display="none";
  } else {
    plusde20000EState=true;

    dixMille20000EState=false;
    IDKnowState=false;
    moinsde1000EState = false;
    mille5000EState = false;
    cinqMille10000EState = false;

    IDKnow.style.display="none";
    moinsde1000E.style.display = "none";
    mille5000E.style.display = "none";
    cinqMille10000E.style.display = "none";
    dixMille20000E.style.display = "none";

    plusde20000E.style.display="initial";
  }
}


function cinqMille10000EClick() {

  if (cinqMille10000EState){
    cinqMille10000EState = false;
    cinqMille10000E.style.display="none";
  } else {
    cinqMille10000EState=true;

    plusde20000EState=false;
    dixMille20000EState=false;
    IDKnowState=false;
    moinsde1000EState = false;
    mille5000EState = false;


    IDKnow.style.display="none";
    moinsde1000E.style.display = "none";
    mille5000E.style.display = "none";
    plusde20000E.style.display = "none";
    dixMille20000E.style.display="none";


    cinqMille10000E.style.display="initial";
  }
}


function mille5000EClick() {

  if (mille5000EState){
    mille5000EState = false;
    mille5000E.style.display="none";
  } else {
    mille5000EState=true;
    cinqMille10000EState=false;
    plusde20000EState=false;
    dixMille20000EState=false;
    IDKnowState=false;
    moinsde1000EState = false;
    IDKnow.style.display="none";
    moinsde1000E.style.display = "none";
    dixMille20000E.style.display = "none";
    plusde20000E.style.display="none";
    cinqMille10000E.style.display="none";
    mille5000E.style.display="initial";
  }
}


function moinsde1000EClick() {

  if (moinsde1000EState){
    moinsde1000EState = false;
    moinsde1000E.style.display="none";
  } else {
    moinsde1000EState=true;


      mille5000EState=false;
      cinqMille10000EState=false;
      plusde20000EState=false;
      dixMille20000EState=false;
      IDKnowState=false;

      IDKnow.style.display="none";

      dixMille20000E.style.display = "none";
      plusde20000E.style.display="none";
      cinqMille10000E.style.display="none";
      mille5000E.style.display="none";

    moinsde1000E.style.display="initial";
  }
}


function IDKnowClick() {

  if (IDKnowState){
    IDKnowState = false;
    IDKnow.style.display="none";
  } else {
    IDKnowState=true;

    moinsde1000EState=false;

      mille5000EState=false;
      cinqMille10000EState=false;
      plusde20000EState=false;
      dixMille20000EState=false;


      dixMille20000E.style.display = "none";
      plusde20000E.style.display="none";
      cinqMille10000E.style.display="none";
      mille5000E.style.display="none";

    moinsde1000E.style.display="none";

    IDKnow.style.display="initial";
  }
}

function verify(){

IDKnowClick();
moinsde1000EClick();
mille5000EClick();
cinqMille10000EClick();
dixMille20000EClick();
plusde20000EClick();

}
verify();
