function drawLemon(ctx, offsetY) {
  // Gradients
  const LEMON_GRADIENT = ctx.createRadialGradient(
    80,
    75 + offsetY,
    1,
    90,
    75 + offsetY,
    50
  );

  LEMON_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  LEMON_GRADIENT.addColorStop(0.2, "#FAFA33");
  LEMON_GRADIENT.addColorStop(1, "#ebd302");

  const NOISE_CANVAS = createNoisePattern(ctx, orangeCanvas.width, orangeCanvas.height, 1);
  const NOISE_PATTERN = ctx.createPattern(NOISE_CANVAS, 'repeat');

  const LEAF_GRADIENT = ctx.createRadialGradient(
    150,
    25 + offsetY,
    1,
    150,
    70 + offsetY,
    80
  );
  LEAF_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.7)");
  LEAF_GRADIENT.addColorStop(0.3, "#02b002");
  LEAF_GRADIENT.addColorStop(1, "#01360b");

  // Lemon
  ctx.beginPath();
  ctx.moveTo(158, 37 + offsetY);
  ctx.bezierCurveTo(149, 29 + offsetY, 138, 31 + offsetY, 131, 38 + offsetY);
  ctx.bezierCurveTo(92, 32 + offsetY, 46, 72 + offsetY, 55, 134 + offsetY);
  ctx.bezierCurveTo(56, 157 + offsetY, 72, 160 + offsetY, 77, 173 + offsetY);
  ctx.bezierCurveTo(76, 181 + offsetY, 80, 186 + offsetY, 84, 186 + offsetY);
  ctx.bezierCurveTo(89, 192 + offsetY, 97, 188 + offsetY, 101, 184 + offsetY);
  ctx.bezierCurveTo(143, 180 + offsetY, 164, 177 + offsetY, 182, 137 + offsetY);
  ctx.bezierCurveTo(193, 120 + offsetY, 192, 64 + offsetY, 170, 43 + offsetY);
  ctx.bezierCurveTo(169, 37 + offsetY, 162, 34 + offsetY, 158, 37 + offsetY);  
  ctx.fillStyle = LEMON_GRADIENT;
  ctx.strokeStyle = "#6b4110";
  ctx.fill();
  ctx.stroke();

  // Noise
  ctx.globalCompositeOperation = 'multiply';
  ctx.beginPath();
  ctx.moveTo(158, 37 + offsetY);
  ctx.bezierCurveTo(149, 29 + offsetY, 138, 31 + offsetY, 131, 38 + offsetY);
  ctx.bezierCurveTo(92, 32 + offsetY, 46, 72 + offsetY, 55, 134 + offsetY);
  ctx.bezierCurveTo(56, 157 + offsetY, 72, 160 + offsetY, 77, 173 + offsetY);
  ctx.bezierCurveTo(76, 181 + offsetY, 80, 186 + offsetY, 84, 186 + offsetY);
  ctx.bezierCurveTo(89, 192 + offsetY, 97, 188 + offsetY, 101, 184 + offsetY);
  ctx.bezierCurveTo(143, 180 + offsetY, 164, 177 + offsetY, 182, 137 + offsetY);
  ctx.bezierCurveTo(193, 120 + offsetY, 192, 64 + offsetY, 170, 43 + offsetY);
  ctx.bezierCurveTo(169, 37 + offsetY, 162, 34 + offsetY, 158, 37 + offsetY);
  ctx.fillStyle = NOISE_PATTERN;
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  // Branch
  ctx.beginPath();
  ctx.moveTo(156, 36 + offsetY);
  ctx.bezierCurveTo(157, 26 + offsetY, 168, 20 + offsetY, 172, 8 + offsetY);
  ctx.bezierCurveTo(174, 5 + offsetY, 178, 8 + offsetY, 177, 12 + offsetY);
  ctx.bezierCurveTo(175, 23 + offsetY, 166, 27 + offsetY, 166, 37 + offsetY);
  ctx.closePath();
  ctx.fillStyle = "#144b02";
  ctx.fill();
  ctx.strokeStyle = "#025412";
  ctx.stroke();

  // Leaf branch
  ctx.beginPath();
  ctx.moveTo(172, 23 + offsetY);
  ctx.quadraticCurveTo(176, 24 + offsetY, 178, 27 + offsetY);
  ctx.moveTo(172, 23 + offsetY);
  ctx.lineTo(171, 25 + offsetY);
  ctx.quadraticCurveTo(174, 25 + offsetY, 176, 28 + offsetY);
  ctx.lineTo(177, 27 + offsetY);
  ctx.fillStyle = "025412";
  ctx.fill();
  ctx.strokeStyle = "#025412";
  ctx.stroke();

  // Leaf
  ctx.beginPath();
  ctx.moveTo(177, 27 + offsetY);
  ctx.bezierCurveTo(240, 35 + offsetY, 227, 88 + offsetY, 199, 129 + offsetY);
  ctx.bezierCurveTo(157, 99 + offsetY, 155, 53 + offsetY, 177, 27 + offsetY);
  ctx.moveTo(177, 27 + offsetY);
  ctx.bezierCurveTo(201, 43 + offsetY, 210, 82 + offsetY, 200, 106 + offsetY);
  ctx.fillStyle = LEAF_GRADIENT;
  ctx.fill();
  ctx.strokeStyle = "#025412";
  ctx.stroke();

  // Dots
  /*let dotRadius = 1.2;

  let dotPositions = [
    { x: 168, y: 144 },
    { x: 150, y: 157 },
    { x: 131, y: 157 },
    { x: 118, y: 169 },
    { x: 134, y: 39 },
    { x: 103, y: 180 },
  ];

  ctx.beginPath();
  ctx.strokeStyle = "rgba(87, 87, 3, 0.4)";
  dotPositions.forEach((pos) => {
    ctx.moveTo(pos.x + dotRadius, pos.y + offsetY);
    ctx.arc(pos.x, pos.y + offsetY, dotRadius, 0, Math.PI * 2);
  });
  ctx.stroke();*/
}

function createNoisePattern(ctx, width, height, noiseOpacity) {
  const noiseCanvas = document.createElement('canvas');
  noiseCanvas.width = width;
  noiseCanvas.height = height;
  const noiseCtx = noiseCanvas.getContext('2d');
  const imageData = noiseCtx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 250;     //R
    data[i + 1] = 225; //G
    data[i + 2] = 0;   //B
    data[i + 3] = Math.random() * 255 * noiseOpacity; //alpha 
  }
  noiseCtx.putImageData(imageData, 0, 0);
  return noiseCanvas;
}