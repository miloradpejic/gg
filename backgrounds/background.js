const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 1920;
const HEIGHT = 1080;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.width = WIDTH + "px";
canvas.style.height = HEIGHT + "px";
let lineWidth;

canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  const percentageCoordinates = calculatePercentageCoordinates(
    clickX,
    clickY,
    canvas.width,
    canvas.height
  );
});
function calculatePercentageCoordinates(clickX, clickY, width, height) {
  const percentageX = (clickX / width) * 100;
  const percentageY = (clickY / height) * 100;
  return { x: percentageX, y: percentageY };
}

function rotateShape(ctx, x, y, width, height, angle) {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  ctx.translate(centerX, centerY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.translate(-centerX, -centerY);
}

function drawcloud1(
  ctx,
  x,
  y,
  width,
  height,
  angle = 0,
  invertVertical = false,
  color = "#ffdeab"
) {
  ctx.save();
  rotateShape(ctx, x, y, width, height, angle);
  ctx.translate(x, y);
  if (invertVertical) {
    ctx.scale(-1, 1);
  }
  ctx.beginPath();
  ctx.moveTo(width * 0.052, 0);
  ctx.quadraticCurveTo(
    width * 0.416,
    height * 0.28,
    width * 0.364,
    height * 0.476
  );
  ctx.bezierCurveTo(
    width * 0.702,
    height * 0.616,
    width * 1.664,
    height,
    0,
    height
  );
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawCloud2(
  ctx,
  x,
  y,
  width,
  height,
  angle = 0,
  invertVertical = false,
  color = "#ffdeab"
) {
  ctx.save();
  rotateShape(ctx, x, y, width, height, angle);
  ctx.translate(x, y);
  if (invertVertical) {
    ctx.scale(-1, 1);
  }
  ctx.moveTo(0, height * 0.95);
  ctx.quadraticCurveTo(
    width * 0.06,
    height * 0.81,
    width * 0.19,
    height * 0.75
  );
  ctx.quadraticCurveTo(width * 0.22, height * 0.2, width * 0.53, height * 0.27);
  ctx.quadraticCurveTo(width * 0.6, height * 0.11, width * 0.71, height * 0.04);
  ctx.quadraticCurveTo(width * 0.92, 0, width * 0.89, height * 0.5);
  ctx.lineTo(width * 0.89, height * 0.56);
  ctx.bezierCurveTo(
    width * 1.14,
    height * 0.67,
    width * 0.89,
    height * 0.97,
    width * 0.76,
    height * 0.95
  );
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawName(ctx, width, height) {
  let fontSize;
  if (width > height) {
    fontSize = 100 * (height / 1080);
  } else {
    fontSize = 70 * (height / 1080);
  }
  ctx.font = "900 " + fontSize + 'px "Lilita One", sans-serif';
  let text1 = "FRUIT";
  let text2 = "FRENZY";

  let textWidth1 = ctx.measureText(text1).width;
  let textWidth2 = ctx.measureText(text2).width;

  let spaceWidth = ctx.measureText(" ").width;

  let textX1 = (width - textWidth1 - textWidth2 - spaceWidth) / 2;
  let textX2 = textX1 + textWidth1 + spaceWidth;
  let textY = height * 0.032 + fontSize / 2;

  ctx.fillStyle = "#ff8800";
  ctx.fillText(text1, textX1, textY);

  ctx.fillStyle = "#e81759";
  ctx.fillText(text2, textX2, textY);

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "rgba(255,255,255,0.9)"; //ffaf1a
  ctx.strokeText(text1, textX1, textY);

  ctx.translate(-1, -1);
  ctx.lineWidth = lineWidth * 0.5;
  ctx.strokeStyle = "#ff8800"; //rgba(0,0,0,0.8)
  ctx.strokeText(text1, textX1, textY);
  ctx.translate(1, 1);

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "white";
  ctx.strokeText(text2, textX2, textY);
  ctx.translate(-1, -1);
  ctx.lineWidth = lineWidth * 0.5;
  ctx.strokeStyle = "rgba(220, 30, 30, 0.9)";
  ctx.strokeText(text2, textX2, textY);
  ctx.translate(1, 1);
}
function drawObala(width, height) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, height * 0.85);
  ctx.quadraticCurveTo(
    width * 0.07,
    height * 0.74,
    width * 0.08,
    height * 0.78
  );
  ctx.quadraticCurveTo(width * 0.1, height * 0.77, width * 0.16, height * 0.82);
  ctx.quadraticCurveTo(
    width * 0.19,
    height * 0.83,
    width * 0.225,
    height * 0.88
  );
  ctx.bezierCurveTo(
    width * 0.36,
    height * 0.97,
    width * 0.7,
    height * 0.98,
    width * 0.77,
    height * 0.87
  );
  ctx.bezierCurveTo(
    width * 0.79,
    height * 0.84,
    width * 0.9,
    height * 0.88,
    width * 0.93,
    height * 0.81
  );
  ctx.quadraticCurveTo(width * 0.94, height * 0.779, width, height * 0.77);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fillStyle = "#301934";
  ctx.fill();
  ctx.restore();
}
function drawShorePortrait(ctx, width, height) {
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(
    width * 0.35,
    height * 1.05,
    width * 0.7,
    height * 0.15,
    0.55,
    0,
    Math.PI * 2
  );
  ctx.ellipse(
    width * 1.2,
    height * 0.96,
    width * 0.72,
    height * 0.2,
    -0.3,
    0,
    Math.PI * 2
  );
  ctx.ellipse(
    width * 0.5,
    height * 1.07,
    width * 0.7,
    height * 0.2,
    0,
    0,
    Math.PI * 2
  );
  ctx.closePath();
  ctx.fillStyle = "#301934";
  ctx.fill();
  ctx.restore();
}
function drawSea(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  const gradientSea = ctx.createLinearGradient(0, height * 0.77, 0, height);
  gradientSea.addColorStop(0.02, "#fbdd90");
  gradientSea.addColorStop(0.08, "#f99932");
  gradientSea.addColorStop(0.15, "#f54e82");
  gradientSea.addColorStop(0.35, "#af70d2");
  gradientSea.addColorStop(0.5, "rgba(102,146,251,255)");
  ctx.beginPath();
  ctx.moveTo(0, height * 0.77);
  ctx.lineTo(width, height * 0.77);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fillStyle = gradientSea;
  ctx.fill();
  ctx.restore();
}
function wallet(ctx, width, height) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, height * 0.8689);
  ctx.lineTo(width / 2 - width * 0.155, height * 0.869);
  ctx.lineTo(width / 2 - width * 0.135, height * 0.835);
  ctx.lineTo(width / 2 + width * 0.15, height * 0.835);
  ctx.lineTo(width / 2 + width * 0.17, height * 0.869);
  ctx.lineTo(width, height * 0.869);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fillStyle = "rgba(10,5,10,0.8)";
  ctx.fill();
  ctx.restore();
}
function walletPortrait(ctx, width, height) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, height * 0.9);
  ctx.lineTo(width, height * 0.9);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.fill();
  ctx.restore();
}

function drawBackground(ctx, width, height) {
  const gradienBg = ctx.createLinearGradient(0, 0, 0, height);
  gradienBg.addColorStop(0.02, "rgba(102,146,251,255)");
  gradienBg.addColorStop(0.2, "#af70d2");
  gradienBg.addColorStop(0.23, "#af70d2");
  gradienBg.addColorStop(0.4, "#f54e82");
  gradienBg.addColorStop(0.6, "#ffa866");
  gradienBg.addColorStop(0.8, "#fbdd90");
  ctx.rect(0, 0, width, height);
  ctx.fillStyle = gradienBg;
  ctx.fill();
  // sun

  if (width > height) {
    ctx.save();
    let sunGradient = ctx.createRadialGradient(
      width * 0.015,
      height * 0.703,
      0,
      width * 0.015,
      height * 0.703,
      height * 0.088
    );
    sunGradient.addColorStop(0.64, "#f9eac3"); // Početna boja na centru kruga
    sunGradient.addColorStop(0.9, " #ffda58");
    sunGradient.addColorStop(1, "#ffa866");
    ctx.beginPath();
    ctx.arc(width * 0.015, height * 0.703, height * 0.088, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = sunGradient;
    ctx.fill();
    ctx.restore();
    drawcloud1(
      ctx,
      width,
      -height * 0.02,
      width * 0.38,
      height * 0.15,
      0,
      true
    );
    drawcloud1(ctx, 0, height * 0.02, width * 0.32, height * 0.15, 0, false);
    drawCloud2(
      ctx,
      width * 0.01,
      height * 0.55,
      width * 0.25,
      height * 0.17,
      -2,
      false
    );
    drawCloud2(
      ctx,
      width * 0.95,
      height * 0.4,
      width * 0.22,
      height * 0.17,
      2,
      true
    );
    drawSea(ctx, 0, 0, width, height);
    drawObala(width, height);
    palmTree(
      ctx,
      width * 0.87,
      height * 0.38,
      width * 0.14,
      height * 0.41,
      -15
    );
    palmTree(ctx, width * 0.8, height * 0.655, width * 0.12, height * 0.21, 10);
    palmTree(
      ctx,
      width * 0.004,
      height * 0.382,
      width * 0.165,
      height * 0.4,
      -5
    );
    reels(ctx, width, height);
    wallet(ctx, width, height);
    drawName(ctx, width, height);
    drawLineBackground(ctx,width*0.89,height/2-height*0.16/4,height*0.12);
    drawLineBackground(ctx,width*0.11,height/2-height*0.16/4,height*0.12);
  } else {
    ctx.save();
    let sunGradient = ctx.createRadialGradient(
      width * 0.015,
      height * 0.73,
      0,
      width * 0.015,
      height * 0.73,
      height * 0.05
    );
    sunGradient.addColorStop(0.64, "#f9eac3"); // Početna boja na centru kruga
    sunGradient.addColorStop(0.9, " #ffda58");
    sunGradient.addColorStop(1, "#ffa866");
    ctx.beginPath();
    ctx.arc(width * 0.015, height * 0.73, height * 0.05, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = sunGradient;
    ctx.fill();
    ctx.restore();
    drawcloud1(
      ctx,
      width,
      -height * 0.02,
      width * 0.32,
      height * 0.13,
      0,
      true
    );
    drawcloud1(ctx, 0, height * 0.02, width * 0.32, height * 0.12, 0, false);
    drawCloud2(
      ctx,
      width * 0.01,
      height * 0.55,
      width * 0.35,
      height * 0.14,
      -2,
      false
    );
    drawCloud2(
      ctx,
      width * 1.1,
      height * 0.45,
      width * 0.48,
      height * 0.12,
      0,
      true
    );
    drawSea(ctx, 0, 0, width, height);
    drawShorePortrait(ctx, width, height);
    palmTree(ctx, width * 0.68, height * 0.51, width * 0.45, height * 0.31, -8);
    palmTree(ctx, width * 0.58, height * 0.685, width * 0.3, height * 0.21, -6);
    palmTree(ctx, width * 0.03, height * 0.55, width * 0.38, height * 0.32, 4);
    reels(ctx, width, height);
    walletPortrait(ctx, width, height);
    drawName(ctx, width, height);
  }
}
function reels(ctx, width, height) {
  const REELS_GRADIENT = ctx.createRadialGradient(
    width * 0.5,
    height * 0.5,
    0,
    width * 0.5,
    height * 0.5,
    width * 0.5
  );
  REELS_GRADIENT.addColorStop(0, "#19031c");
  REELS_GRADIENT.addColorStop(0.7, "#511b48");
  ctx.save();
  if (width > height) {
    const rectWidth = width * 0.68;
    const rectHeight = height * 0.73;
    const rectX = width * 0.16;
    const rectY = height * 0.1;
    ctx.fillStyle = REELS_GRADIENT;
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    ctx.strokeStyle = "#873f75";
    ctx.lineWidth = lineWidth * 1.4;
    ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

    ctx.strokeStyle = "#ffaf1a";
    ctx.lineWidth = lineWidth * 2;
    ctx.strokeRect(rectX - 5, rectY - 5, rectWidth + 10, rectHeight + 10);
  } else {
    const rectWidth = width - 15;
    const rectHeight = width / 1.667;
    const rectX = 7.5;
    const rectY = height * 0.1;
    ctx.fillStyle = REELS_GRADIENT;
    ctx.fillRect(7.5, rectY, rectWidth, rectHeight);
    ctx.strokeStyle = "#873f75";
    ctx.lineWidth = 5;
    ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

    ctx.strokeStyle = "#ffaf1a";
    ctx.lineWidth = 7;
    ctx.strokeRect(rectX - 5, rectY - 5, rectWidth + 10, rectHeight + 10);
  }
  ctx.restore();
}
function palmTree(ctx, x, y, width, height, angle = 0) {
  ctx.save();
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  ctx.translate(centerX, centerY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.translate(-centerX, -centerY);
  ctx.beginPath();
  ctx.moveTo(x + width * 0.39, y + height);
  ctx.quadraticCurveTo(
    x + width * 0.45,
    y + height * 0.65,
    x + width * 0.42,
    y + height * 0.32
  );
  ctx.lineTo(x + width * 0.33, y + height * 0.45);
  ctx.lineTo(x + width * 0.24, y + height * 0.48);
  ctx.quadraticCurveTo(
    x + width * 0.28,
    y + height * 0.33,
    x + width * 0.37,
    y + height * 0.31
  );
  ctx.quadraticCurveTo(
    x + width * 0.25,
    y + height * 0.32,
    x + width * 0.16,
    y + height * 0.42
  );
  ctx.quadraticCurveTo(
    x + width * 0.15,
    y + height * 0.26,
    x + width * 0.32,
    y + height * 0.275
  );
  ctx.quadraticCurveTo(
    x + width * 0.122,
    y + height * 0.25,
    x + width * 0.082,
    y + height * 0.346
  );
  ctx.quadraticCurveTo(
    x + width * 0.08,
    y + height * 0.15,
    x + width * 0.3,
    y + height * 0.23
  );
  ctx.quadraticCurveTo(
    x + width * 0.17,
    y + height * 0.14,
    x + width * 0.008,
    y + height * 0.16
  );
  ctx.quadraticCurveTo(
    x + width * 0.18,
    y + height * 0.05,
    x + width * 0.35,
    y + height * 0.17
  );
  ctx.quadraticCurveTo(
    x + width * 0.33,
    y + height * 0.09,
    x + width * 0.16,
    y + height * 0.02
  );
  ctx.quadraticCurveTo(
    x + width * 0.43,
    y + height * 0.03,
    x + width * 0.44,
    y + height * 0.15
  );
  ctx.quadraticCurveTo(
    x + width * 0.55,
    y + height * 0.01,
    x + width * 0.79,
    y + height * 0.03
  );
  ctx.quadraticCurveTo(
    x + width * 0.55,
    y + height * 0.11,
    x + width * 0.5,
    y + height * 0.21
  );
  ctx.bezierCurveTo(
    x + width * 0.74,
    y + height * 0.02,
    x + width * 0.98,
    y + height * 0.021,
    x + width * 0.98,
    y + height * 0.25
  );
  ctx.quadraticCurveTo(
    x + width * 0.85,
    y + height * 0.12,
    x + width * 0.6,
    y + height * 0.221
  );
  ctx.quadraticCurveTo(
    x + width * 0.83,
    y + height * 0.15,
    x + width * 0.81,
    y + height * 0.38
  );
  ctx.quadraticCurveTo(
    x + width * 0.68,
    y + height * 0.25,
    x + width * 0.51,
    y + height * 0.29
  );
  ctx.lineTo(x + width * 0.63, y + height * 0.32);
  ctx.lineTo(x + width * 0.66, y + height * 0.42);
  ctx.quadraticCurveTo(
    x + width * 0.54,
    y + height * 0.38,
    x + width * 0.46,
    y + height * 0.34
  );
  ctx.quadraticCurveTo(
    x + width * 0.5,
    y + height * 0.68,
    x + width * 0.48,
    y + height
  );
  ctx.fillStyle = "#301934";
  ctx.fill();
  ctx.restore();
}
function resizeBackground() {
  let containerCont = document.querySelector(".containerCont");

  let innerWidth = containerCont.clientWidth;
  let innerHeight = containerCont.clientHeight;

  canvas.width = innerWidth;
  canvas.height = innerHeight;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  lineWidth = Math.max(ctx.canvas.width, ctx.canvas.height) * 0.00225;

  drawBackground(ctx, innerWidth, innerHeight);
}

resizeBackground();

function drawLineBackground(ctx, x, y, radius) {
  ctx.save();
  ctx.beginPath();
  const OUT_GRADIENT = ctx.createRadialGradient(
    x,
    y,
    0,
    x,
    y,
    radius * 0.48
  );
  OUT_GRADIENT.addColorStop(0.98 , "rgba(255, 191,0,0.9)");
  OUT_GRADIENT.addColorStop(1, "rgba(255, 153, 0,0.8)");
  ctx.arc(x, y, radius * 0.48, 0, 2 * Math.PI);
  ctx.strokeStyle = OUT_GRADIENT;
  ctx.lineWidth=radius*0.08;
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.clip();
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.45, 0, 2 * Math.PI);
  const LINE_GRADIENT = ctx.createRadialGradient(
    x,
    y,
    0,
    x,
    y,
    radius * 0.45
  );
  LINE_GRADIENT.addColorStop(0.7, "rgba(25, 3, 28,0.9)");
  LINE_GRADIENT.addColorStop(0.8, "rgba(81, 27, 72,0.8)");
  ctx.fillStyle=LINE_GRADIENT;
  ctx.fill();
  ctx.restore();
  const TEXT = '40';
  const FONT_SIZE = radius * 0.4;
  ctx.font = "900 " + FONT_SIZE + 'px "Lilita One", sans-serif';
  let textWidth = ctx.measureText(TEXT).width;
  let textX = x - textWidth / 2;
  let textY = y + FONT_SIZE / 3;
  ctx.fillStyle = "#E81759";
  ctx.fillText(TEXT, textX, textY);
  ctx.lineWidth = radius*0.0015;
  ctx.strokeStyle = "rgba(255,255,255,0.9)";
  ctx.strokeText(TEXT, textX, textY);
}
