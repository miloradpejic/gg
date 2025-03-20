const button={
    mobileBetIncerease:document.querySelector('.pop-up-increase-bet'),
    popUpInfo:document.querySelector('.pop-up-info-btn'),
    popUpVolume:document.querySelector('.pop-up-volume-btn'),
    popUpFullscreen:document.querySelector('.pop-up-fullscreen-btn'),
    mobileBetDecrease:document.querySelector('.pop-up-decrease-bet'),
    popUpClose:document.querySelector('.btn-pop-up-close'),
    info:document.querySelector('.info-btn'),
    hamburger:document.querySelector('.mobile-misc-menu'),
    mobileStart:document.querySelector('.mobile-start-button'),
    mobileAuto:document.querySelector('.mobile-auto'),
    mobileStop:document.querySelector('.mobile-stop-button'),
    mobileCollect:document.querySelector('.mobile-collect-button'),
    mobileBet:document.querySelector('.mobile-bet'),
    info:document.querySelector('.info-btn'),
    volume:document.querySelector('.volume-btn'),
    fullscreen:document.querySelector('.fullscreen-btn'),
    start:document.getElementById('start-button'),
    stop:document.getElementById('stop-button'),
    collect:document.getElementById('collect-button'),
    gamble:document.querySelector('.gamble-btn'),
    auto:document.querySelector('.auto-btn'),
    increaseBet:document.querySelector('increase-bet'),
    decreaseBet:document.querySelector('.decrease-bet')
};
const label={
    popUpBet:document.querySelector('.pop-up-bet-text'),
    credit:document.querySelector('.credit-value'),
    bet:document.querySelector('.bet-value'),
    win:document.querySelector('.win-value'),
    lineInfo:document.querySelector('.line-info')
}

button.hamburger.onclick=()=>{
    let popUp=document.querySelector('.mobile-pop-up');
    popUp.style.display='flex';
}
button.popUpClose.onclick=()=>{
    let popUp=document.querySelector('.mobile-pop-up');
    popUp.style.display='none';
}