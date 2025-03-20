let orangeCanvas = document.getElementById("orange-canvas");
let ctx6 = orangeCanvas.getContext("2d");

orangeCanvas.width = 260;
orangeCanvas.height = 195;
const ORANGE_MIDDLE_X = orangeCanvas.width / 2;
const ORANGE_MIDDLE_Y = orangeCanvas.height / 2;

function drawOrange(ctx, offsetY) {
  //Gradient
  let x = 130;
  let y = 42 + offsetY;
  let radius = 8;

  const BRANCH_GRADIENT = ctx.createRadialGradient(x, y, 0, x, y, radius);
  BRANCH_GRADIENT.addColorStop(0, "rgba(92, 64, 4, 0.6)");
  BRANCH_GRADIENT.addColorStop(1, "rgba(92, 64, 4, 0)");

  const LEAF_GRADIENT = ctx.createRadialGradient(
    100,
    30 + offsetY,
    2,
    80,
    50 + offsetY,
    110
  );
  LEAF_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.5)");
  LEAF_GRADIENT.addColorStop(0.3, "#02bf02");
  LEAF_GRADIENT.addColorStop(1, "#01450e");

  const ORANGE_GRADIENT = ctx.createRadialGradient(
    80,
    75 + offsetY,
    1,
    90,
    75 + offsetY,
    60
  );

  ORANGE_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  ORANGE_GRADIENT.addColorStop(0.6, "#eda31a");
  ORANGE_GRADIENT.addColorStop(1, "#ff8f00");

  const NOISE_CANVAS = createNoisePattern(ctx, orangeCanvas.width, orangeCanvas.height, 1.3);
  const NOISE_PATTERN = ctx.createPattern(NOISE_CANVAS, 'repeat');

  // Orange
ctx.beginPath();
ctx.arc(130, 110 + offsetY, 80, 0, 2 * Math.PI);
ctx.fillStyle = ORANGE_GRADIENT;
ctx.fill();

// Noise
ctx.globalCompositeOperation = 'multiply';
ctx.beginPath();
ctx.arc(130, 110 + offsetY, 80, 0, 2 * Math.PI);
ctx.fillStyle = NOISE_PATTERN;
ctx.fill();
ctx.globalCompositeOperation = 'source-over';

ctx.strokeStyle = "#805b01";
ctx.stroke();

  // Branch root lines
  ctx.beginPath();
  ctx.moveTo(122, 42 + offsetY);
  ctx.bezierCurveTo(123, 42 + offsetY, 122, 45 + offsetY, 128, 47 + offsetY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(133, 47 + offsetY);
  ctx.bezierCurveTo(136, 45 + offsetY, 136, 45 + offsetY, 135, 44 + offsetY);
  ctx.stroke();

  // Branch
  ctx.beginPath();
  ctx.moveTo(130, 45 + offsetY);
  ctx.bezierCurveTo(120, 30 + offsetY, 120, 15 + offsetY, 141, 4 + offsetY);
  ctx.bezierCurveTo(140, 10 + offsetY, 145, 15 + offsetY, 148, 15 + offsetY);
  ctx.bezierCurveTo(135, 20 + offsetY, 130, 25 + offsetY, 130, 45 + offsetY);
  ctx.strokeStyle = "#413124";
  ctx.fillStyle = "#7B3F00";
  ctx.stroke();
  ctx.fill();

  // Ellipse on the top of branch
  ctx.save();
  ctx.translate(145, 9 + offsetY);
  ctx.rotate(0.9);
  ctx.beginPath();
  ctx.ellipse(0, 0, 7, 3, 0, 0, Math.PI * 2, false);

  ctx.strokeStyle = "#381c06";
  ctx.fillStyle = "#6E260E";
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Right leaf
  ctx.beginPath();
  ctx.moveTo(133, 30 + offsetY);
  ctx.bezierCurveTo(170, 10 + offsetY, 215, 40 + offsetY, 240, 85 + offsetY);
  ctx.stroke();
  ctx.bezierCurveTo(215, 40 + offsetY, 160, 100 + offsetY, 131, 35 + offsetY);
  ctx.fillStyle = LEAF_GRADIENT;
  ctx.strokeStyle = "#025412";
  ctx.fill();
  ctx.stroke();

  // Right leaf darker part
  ctx.beginPath();
  ctx.moveTo(240, 85 + offsetY);
  ctx.bezierCurveTo(215, 70 + offsetY, 215, 72 + offsetY, 198, 68 + offsetY);
  ctx.bezierCurveTo(200, 65 + offsetY, 230, 65 + offsetY, 240, 85 + offsetY);
  ctx.fillStyle = "#013208";
  ctx.fill();
  ctx.stroke();

  // Right leaf patterns
  ctx.beginPath();
  ctx.moveTo(132, 32 + offsetY);
  ctx.bezierCurveTo(170, 25 + offsetY, 215, 40 + offsetY, 240, 85 + offsetY);
  ctx.stroke();
/*
  // Dots
  let dotRadius = 1.2;

  let dotPositions = [
    { x: 140, y: 150 },
    { x: 170, y: 140 },
    { x: 200, y: 100 },
    { x: 170, y: 80 },
    { x: 175, y: 110 },
    { x: 195, y: 135 },
    { x: 160, y: 170 },
    { x: 125, y: 175 },
    { x: 95, y: 160 },
    { x: 130, y: 105 },
  ];

  ctx.beginPath();
  ctx.strokeStyle = "rgba(120, 78, 1, 0.5)";
  dotPositions.forEach((pos) => {
    ctx.moveTo(pos.x + dotRadius, pos.y + offsetY);
    ctx.arc(pos.x, pos.y + offsetY, dotRadius, 0, Math.PI * 2);
  });
  ctx.stroke();
*/
  ctx.fillStyle = BRANCH_GRADIENT;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

drawOrange(ctx6, 0);

function createNoisePattern(ctx, width, height, noiseOpacity) {
  const noiseCanvas = document.createElement('canvas');
  noiseCanvas.width = width;
  noiseCanvas.height = height;
  const noiseCtx = noiseCanvas.getContext('2d');
  const imageData = noiseCtx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255;     //R
    data[i + 1] = 164; //G
    data[i + 2] = 0;   //B
    data[i + 3] = Math.random() * 250 * noiseOpacity; //alpha 
  }
  noiseCtx.putImageData(imageData, 0, 0);
  return noiseCanvas;
}