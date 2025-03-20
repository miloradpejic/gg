let app=document.querySelector('.containerCont');
let screenHeight = app.clientHeight;
let screenWidth = app.clientWidth;
let scaleFont = Math.min(screenHeight, screenWidth);
let infoContainer=document.querySelector('.info-container');
let lineInfo=document.querySelector('.line-info');
let betContainer=document.querySelector('.bet-btns');
let winText=document.querySelector('.win-text');
let extraBtns=document.querySelector('.extra-btns');
let btnStart=document.querySelector('.btn-start-container');
let miscBtn=document.querySelector('.misc-buttons');
let mobileContainer=document.querySelector('.mobile-container');
let mobilemenu=document.querySelector('.mobile-misc-menu-btn');

function setupPortrait(){
  let popUpMenuText=document.querySelector('.pop-up-label-menu');
  let popUpMiscBtns=document.querySelector('.pop-up-misc-btns');
  let popUpBetBtns=document.querySelector('.pop-up-bet-btns');
  let popUpBetInfo=document.querySelector('.pop-up-bet-info-container');
  mobileContainer.style.fontSize=0.042*scaleFont+'px';
  miscBtn.style.fontSize=0.055*scaleFont+'px';
  lineInfo.style.fontSize=0.04*scaleFont+'px';
  infoContainer.style.fontSize =0.032*scaleFont+"px";
  mobilemenu.style.fontSize=0.055*scaleFont+'px';
  
  /* pop up */
  popUpMenuText.style.fontSize=0.06*scaleFont+'px';
  popUpMiscBtns.style.fontSize=0.05*scaleFont+'px';
  popUpBetBtns.style.fontSize=0.05*scaleFont+'px';
  popUpBetInfo.style.fontSize=0.05*scaleFont+'px';
}
function setupLandscape(){
    betContainer.style.fontSize=0.0155*scaleFont+'px';
    lineInfo.style.fontSize=0.03*scaleFont+'px';
    infoContainer.style.fontSize =0.024*scaleFont+"px";
    extraBtns.style.fontSize=0.02*scaleFont+'px';
    btnStart.style.fontSize=0.024*scaleFont+'px';
    miscBtn.style.fontSize=0.035*scaleFont+'px';
}

function setupStylesForOrientation() {
    screenHeight = app.offsetHeight;
    screenWidth = app.offsetWidth;

    scaleFont = Math.min(screenHeight, screenWidth);
    if (window.innerWidth > window.innerHeight) {
      setupLandscape();
    } else {
      setupPortrait();
    }
  }
  


  window.addEventListener('load',setupStylesForOrientation);
