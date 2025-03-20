let resultMatrix = [];
let startMatrix = [];
let sprites = [];
let timeStep = 300; 
let spinDuration = 500;
let animationIds = [];
let initialRandomNum = 20;
let drawingCanvas, symbolWidth, symbolHeight;
let idMatrix = null;
let id;

function convertToIdMatrix() {
    idMatrix = resultMatrix[0].map((col, i) => resultMatrix.map(row => row[i]));

    /*idMatrix = [
        [1, 1, 1, 1, 1],
        [0, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ]*/
}

function easeInOutBack(t, b, c, d, s) {
    if (s == undefined) s = 0.9;
    if ((t/=d) < 0.9) return c*t + b; 
    return c*((t-=1)*t*(((s*=(1.525))+1)*t + s) + 1) + b; 
}

function generateStartReels() {
    for(let i = 0; i < 5; i++){
        startMatrix[i] = [];
        let scatter = false;
        for(let j = 0; j < 4; j++){
            id = Math.floor(Math.random() * 8);
            while (scatter && id === 0) {
              id = Math.floor(Math.random() * 8);
            }
            if (id === 0) {
            scatter = true;
            }
            startMatrix[i][j] = id;
        }
    }
}

function getCanvasAndDimensions(p, i) {
    if(p >= 4 && p < sprites[i].length - 4) {
        drawingCanvas = blurredElementsCanvas;
        symbolWidth = SYMBOL_WIDTH * scaleDownFactor;
        symbolHeight = SYMBOL_HEIGHT * scaleDownFactor;
    } else {
        drawingCanvas = elementsCanvas;
        symbolWidth = SYMBOL_WIDTH;
        symbolHeight = SYMBOL_HEIGHT;
    }
}

function drawReel(i, pos) {
    let k = pos / 195;
    let p = Math.floor(k) + 4;
    let offset = (pos % 195) * scaledSymbolHeight / 195;

    gameCtx.clearRect(i * scaledSymbolWidth, 0, (i + 1) * scaledSymbolWidth, gameCanvas.height);

    getCanvasAndDimensions(p, i);

    gameCtx.drawImage(
        drawingCanvas,
        0,
        sprites[i][p] * symbolHeight,
        symbolWidth,
        symbolHeight,
        i * scaledSymbolWidth,
        0 - scaledSymbolHeight + offset,
        scaledSymbolWidth,
        scaledSymbolHeight 
    );

    for(let j = 0; j < 4; j++) {
        let id = sprites[i][p - 1 - j];

        getCanvasAndDimensions(p - 1 - j, i);

        gameCtx.drawImage(
            drawingCanvas,
            0,
            id * symbolHeight,
            symbolWidth,
            symbolHeight,
            i * scaledSymbolWidth,
            j * scaledSymbolHeight + offset, 
            scaledSymbolWidth,
            scaledSymbolHeight
        );
    }
}

function generateArrays() {
    console.clear();
    sprites = Array(5).fill().map((_, i) => {
        let randomNum = Math.floor((initialRandomNum * (spinDuration + i * timeStep)) / spinDuration);
        let sprite = [...startMatrix[i]].reverse().concat(
            Array(randomNum - 8).fill().map(() => Math.floor(Math.random() * 8)),
            resultMatrix[i].slice(0, 4).reverse()
        );
        return sprite;
    });
    
    startMatrix = resultMatrix.map(row => [...row]);
}

function generateResult(){
    for(let i = 0; i < 5; i++){
        resultMatrix[i] = [];
        let scatter = false;
        for(let j = 0; j < 4; j++){
            id = Math.floor(Math.random() * 8);
            while (scatter && id === 0) {
              id = Math.floor(Math.random() * 8);
            }
            if (id === 0) {
            scatter = true;
            }
            resultMatrix[i][j] = id;
        }
    }
}

function startSpinAnimation() {
    for(let i = 0; i < 5; i++){
        if(animationIds[i] !== undefined) {
            cancelAnimationFrame(animationIds[i]);
        }
    }

    let startTimes = new Array(5).fill(null);  
    let stopDifferences = new Array(5).fill(0);
    stopped = new Array(5).fill(false);

    for(let i = 0; i < 5; i++){
        animationIds[i] = requestAnimationFrame((timestamp) =>
    animate(timestamp, i, startTimes, stopDifferences, stopped));
    }
}

function animate(timestamp, i, startTimes, stopDifferences, stopped) {
    if(startTimes[i] === null) {
        startTimes[i] = timestamp;
    }
     
    let progress = timestamp - startTimes[i];

    if(stopDifferences[i] === 0 && stopped[i]){
        stopDifferences[i] = spinDuration + i * timeStep - (50 * i) - progress;
    }

    if(stopped[i]){
        progress += stopDifferences[i];
    }

    let duration = spinDuration + i * timeStep;
    let s = 1.7 * (spinDuration / duration); 
    let position = easeInOutBack(progress, 0, 1, duration, s);
    drawReel(i, position * (sprites[i].length - 4) * 195);  
    
    if(progress >= spinDuration + i * timeStep) {
        cancelAnimationFrame(animationIds[i]);
        if(i==4 && startButton.innerHTML === "STOP"){
            startButton.innerHTML = "START";
            startButton.style.backgroundColor = "#f1c40f";
        }
        stopped[i] = false;
        convertToIdMatrix();
        if(i==4){
            console.log(idMatrix);
            let win = calculateWin();

            if(win > 0){
                gameCanvas.style.opacity = 0.7;
                winCanvas.style.visibility = 'visible';
                drawWinLines();
            }
        }
        return;
    }
    else {
        animationIds[i] = requestAnimationFrame((timestamp) =>
        animate(timestamp, i, startTimes, stopDifferences, stopped));
    }
}

