const GAME_LINES = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [1, 2, 3, 2, 1],
    [2, 1, 0, 1, 2],
    [0, 0, 1, 2, 3],
    [3, 3, 2, 1, 0],
    [2, 3, 3, 3, 2],
    [1, 0, 0, 0, 1],
    [0, 1, 2, 3, 3],
    [3, 2, 1, 0, 0],
    [2, 3, 2, 1, 2],
    [1, 0, 1, 2, 1],
    [0, 1, 0, 1, 0],
    [3, 2, 3, 2, 3],
    [1, 2, 1, 0, 1],
    [2, 1, 2, 3, 2],
    [0, 1, 1, 1, 0],
    [3, 2, 2, 2, 3],
    [1, 1, 2, 3, 3],
    [2, 2, 1, 0, 0],
    [0, 1, 2, 2, 3],
    [3, 2, 1, 1, 0],
    [1, 2, 2, 2, 3],
    [2, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [3, 3, 2, 3, 3],
    [2, 2, 3, 2, 2],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 1, 2],
    [3, 3, 3, 2, 1],
    [2, 3, 3, 2, 1],
    [1, 0, 0, 1, 2],
    [0, 1, 1, 2, 3],
    [3, 2, 2, 1, 0],
    [2, 3, 2, 1, 0],
    [1, 0, 1, 2, 3],
    [0, 1, 2, 3, 2],
    [3, 2, 1, 0, 1],
  ];

  
  
  function calculateWin() {
    if (!idMatrix) return;
    let totalWinAmount = 0;
    let scatterCount = countScatters();
    for (let i = 0; i < GAME_LINES.length; i++) {
      let result = checkWin(GAME_LINES[i], idMatrix);
      if (result.win) {
        let symbolName = symbols.find(symbol => symbol.id === result.symbol).name;
        let winAmount = calculateWinAmount(result.symbol, result.count, result.wildCount);
        totalWinAmount += winAmount;
        let winData = {
          'WinLine No.': i+1,
          'WinLine': GAME_LINES[i].join(', '),
          'Winning Symbol': symbolName,
          'Quantity': result.count,
          'Wild Quantity': result.wildCount,
          'Win amount' : winAmount.toFixed(2)
        };
        console.table(winData);
      }
    }
    if(scatterCount >= 3){
        let scatterWinAmount = 1.00 * symbols.find(sym => sym.id === 0).values[`${scatterCount}`];
        totalWinAmount += scatterWinAmount;
        console.log('Scatter Win Amount: ', '$'+scatterWinAmount.toFixed(2));
    }
    console.log('Total Win Amount: ', '$'+totalWinAmount.toFixed(2));
    return totalWinAmount;
  }

  function calculateWinAmount(symbol, quantity, wildCount){
    let winAmountSymbol = 1.00 * symbols.find(sym => sym.id === symbol).values[`${quantity}`];
    let winAmountWild = 1.00 * symbols.find(sym => sym.id === 1).values[`${wildCount}`];

    let winResult = winAmountWild > winAmountSymbol ? winAmountWild : winAmountSymbol;

    return winResult;
  }

  function checkWin(gameLine, resultMatrix) {
    let consecutiveCount = 1;
    let currentId = null;
    let wildCount = 1;
    let wildFlag = true;
    
    for (let i = 1; i < gameLine.length; i++) {
      let reelIndex = gameLine[i];

      let symbolIndex = i;
      let currentSymbol = resultMatrix[reelIndex][symbolIndex];
      let previousSymbol = resultMatrix[gameLine[i - 1]][symbolIndex - 1];

      if(resultMatrix[gameLine[0]][0] === 0){
        return {win:false};
      }

      if(resultMatrix[gameLine[0]][0] === 1 && currentSymbol === 1 && wildFlag){
        wildCount++;
      }
      else{
        wildFlag = false;
      }

      if (resultMatrix[gameLine[0]][0] !== 1 && currentId == null && resultMatrix[gameLine[0]][0] !== 0) {
        currentId = resultMatrix[gameLine[0]][0];
        wildCount = 0;
      }

      if (currentSymbol !== 1 && currentId == null && currentSymbol !== 0) {
        currentId = currentSymbol;
        wildCount >= 3 ? wildCount = wildCount : wildCount = 0;
      }
      if(currentId === 0){
      console.log('asdasda')
      }
      if (
        previousSymbol === currentSymbol ||
        (previousSymbol === 1 && currentSymbol === currentId) ||
        currentSymbol === 1
      ) {
        consecutiveCount++;
      } else {
        if (consecutiveCount >= 3) {
          return { win: true, symbol: currentId ? currentId : 1, count: consecutiveCount, wildCount : wildCount };
        }
        consecutiveCount = 1;
        return { win: false };
      }
    }


    if (consecutiveCount >= 3) {
      return { win: true, symbol: currentId ? currentId : 1, count: consecutiveCount, wildCount : wildCount  };
    }
    return { win: false };
  }

  function countScatters(){
    let scatterCount = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 5; j++) {
        if (idMatrix[i][j] === 0) {
          scatterCount++;
        }
      }
    }
    return scatterCount;
  }

  function drawWinLines() {
    winCtx.strokeStyle = 'red';
    winCtx.lineWidth = 4;
    for (let i = 0; i < GAME_LINES.length; i++) {
        winCtx.beginPath();
        winCtx.moveTo(0, (i + 1) * scaledSymbolHeight);
      for (let j = 0; j < GAME_LINES[i].length; j++) {
        winCtx.lineTo((j + 1) * scaledSymbolWidth, (i + 1) * scaledSymbolHeight);
      }
      winCtx.stroke();
    }
  }
  