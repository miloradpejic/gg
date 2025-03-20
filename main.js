let winCanvas = document.getElementById("win-canvas");
let winCtx = winCanvas.getContext("2d");
let gameCanvas = document.getElementById("game-canvas");
let gameCtx = gameCanvas.getContext("2d");
const SYMBOL_WIDTH = 260;
let scale;
let scaledSymbolWidth;
let scaledSymbolHeight;
const SCATTER_VALUES = {
  3: 2.00,
  4: 8.00,
  5: 20.00 
};
const WILD_VALUES = {
  3: 0.40,
  4: 4.00,
  5: 10.00 
};
const HIGH_VALUES = {
  3: 0.20,
  4: 0.80,
  5: 4.00 
};
const MEDIUM_VALUES = {
  3: 0.20,
  4: 0.40,
  5: 2.00 
};
const LOW_VALUES = {
  3: 0.10,
  4: 0.20,
  5: 1.00 
};
let symbols = [
  { id: 0, name: "SCATTER", values: SCATTER_VALUES},
  { id: 1, name: "WILD", values: WILD_VALUES},
  { id: 2, name: "Seven", values: HIGH_VALUES},
  { id: 3, name: "Watermelon", values: MEDIUM_VALUES},
  { id: 4, name: "Pineapple", values: MEDIUM_VALUES},
  { id: 5, name: "Cherries", values: LOW_VALUES},
  { id: 6, name: "Lemon", values: LOW_VALUES},
  { id: 7, name: "Orange", values: LOW_VALUES},
];
/*
  quantity = 3;
  symbol = 'watermelon';

  win = bet * (quantity * MEDIUM_VALUES[symbol]);

  -> 20.00 * (3 * 0.20) = 12.00
 */
function drawReels(){
  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  gameCtx.fillStyle = "transparent";
  gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  scaledSymbolWidth = gameCanvas.width / 5;
  scaledSymbolHeight = gameCanvas.height / 4;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) { 
      let id = startMatrix[i][j];
      gameCtx.drawImage(
        elementsCanvas,
        0,
        id * SYMBOL_HEIGHT,
        SYMBOL_WIDTH,
        SYMBOL_HEIGHT,
        i * scaledSymbolWidth,
        j * scaledSymbolHeight,
        scaledSymbolWidth,
        scaledSymbolHeight
      );
    }
  }
}

function orientationCheck(){
if (window.matchMedia("(orientation: portrait)").matches) {
  //PORTRAIT mode
  document.body.classList.add("portrait");
} else {
  document.body.classList.remove("portrait");
}
}

function resizeReels() {
  let container = document.querySelector('.containerCont');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let aspectRatio = width / height;

  if (aspectRatio > 1) { // Landscape
    scale = Math.min(width / 1920, height / 1080);
    gameCanvas.width = 1300 * scale;
    gameCanvas.height = 780 * scale;
    winCanvas.width = 1300 * scale;
    winCanvas.height = 780 * scale;
  } else { // Portrait
    scale = Math.min(container.clientWidth / 1920, height / 1080);
    gameCanvas.width = container.clientWidth - 15;
    gameCanvas.height = (container.clientWidth - 15) / 1.667;
    winCanvas.width = container.clientWidth - 15;
    winCanvas.height = (container.clientWidth - 15) / 1.667;
  }
  drawReels();
}

function resize() {
  orientationCheck();
  resizeReels();
  setGameContainerDimensions();
  resizeBackground();
  setupStylesForOrientation();
}

window.onload = function() {
  generateStartReels();
  setGameContainerDimensions();
  resize();
};

window.addEventListener('resize', resize);

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function() {
  if(startButton.innerHTML === "START"){
    startButton.innerHTML = "STOP";
    startButton.style.backgroundColor = "#ff0000";
    generateResult();
    generateArrays();
    startSpinAnimation();
  }
  else{
    startButton.innerHTML = "START";
    startButton.style.backgroundColor = "#f1c40f";
    stopped.fill(true);
  }

});

function setGameContainerDimensions() {
  let aspectRatio = window.innerHeight >= window.innerWidth ? 9 / 16 : 16 / 9;

  let containerWidth = document.body.clientWidth;
  let containerHeight = document.body.clientHeight;

  let containerCont = document.querySelector('.containerCont');

  if (containerWidth / containerHeight > aspectRatio) {
    containerCont.style.width = containerHeight * aspectRatio + "px";
    containerCont.style.height = containerHeight + "px";
  } else {
    containerCont.style.width = containerWidth + "px";
    containerCont.style.height = containerWidth / aspectRatio + "px";
  }
}
setGameContainerDimensions();
