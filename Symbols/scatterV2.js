let scatterV2Canvas = document.getElementById("scatter-v2-canvas");
scatterV2Canvas.width = 260;
scatterV2Canvas.height = 195;
let ctxS = scatterV2Canvas.getContext("2d");

function drawScatterV2(ctx, offsetY){
const MID_X = scatterV2Canvas.width / 2;
const MID_Y = scatterV2Canvas.height / 2;
ctx.strokeStyle = '#fff492';

// Gradients
let outerGradient1 = ctx.createLinearGradient(0, 0 + offsetY, MID_X + 125, MID_Y - 26 + offsetY);
outerGradient1.addColorStop(0, '#fbbb19');
outerGradient1.addColorStop(1, '#fbe84e');


// outer star (clockwise)
ctx.beginPath();
ctx.moveTo(MID_X + 1, MID_Y - 90 + offsetY);
ctx.lineTo(MID_X + 42, MID_Y - 42 + offsetY);
ctx.lineTo(MID_X + 26, MID_Y - 25 + offsetY);
ctx.lineTo(MID_X + 4, MID_Y - 52 + offsetY);
ctx.lineTo(MID_X + 1, MID_Y - 90 + offsetY);
ctx.fillStyle = '#fbe84e';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(MID_X + 42, MID_Y - 42 + offsetY);
ctx.lineTo(MID_X + 108, MID_Y - 26 + offsetY);
ctx.lineTo(MID_X + 63, MID_Y - 15 + offsetY);
ctx.lineTo(MID_X + 26, MID_Y - 25 + offsetY);
ctx.fillStyle = outerGradient1;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(MID_X + 108, MID_Y - 26 + offsetY);
ctx.lineTo(MID_X + 64, MID_Y + 20 + offsetY);
ctx.lineTo(MID_X + 39, MID_Y + 14 + offsetY);
ctx.lineTo(MID_X + 63, MID_Y - 15 + offsetY);
ctx.fillStyle = '#f8bb12';
ctx.fill();
ctx.closePath();
//77 - > 90
ctx.beginPath();
ctx.moveTo(MID_X + 64, MID_Y + 20 + offsetY);
ctx.lineTo(MID_X + 70, MID_Y + 90 + offsetY);
ctx.lineTo(MID_X + 39, MID_Y + 43 + offsetY);
ctx.lineTo(MID_X + 39, MID_Y + 13 + offsetY);
ctx.fillStyle = '#fbe84e';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(MID_X + 70, MID_Y + 90 + offsetY);
ctx.lineTo(MID_X + 38, MID_Y + 46 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y + 35 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y + 58 + offsetY);
ctx.lineTo(MID_X + 70, MID_Y + 90 + offsetY);
ctx.fillStyle = '#f8bb12';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(MID_X + 1, MID_Y + 35 + offsetY);
ctx.lineTo(MID_X - 34, MID_Y + 46 + offsetY);
ctx.lineTo(MID_X - 70, MID_Y + 90 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y + 58 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y + 36 + offsetY);
ctx.fillStyle = '#fbe84e';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(MID_X - 70, MID_Y + 90 + offsetY);
ctx.lineTo(MID_X - 36, MID_Y + 43 + offsetY);
ctx.lineTo(MID_X - 34, MID_Y + 11 + offsetY);
ctx.lineTo(MID_X - 63, MID_Y + 20 + offsetY);
ctx.lineTo(MID_X - 70, MID_Y + 90 + offsetY);
ctx.fillStyle = '#f8bb12';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(MID_X - 34, MID_Y + 11 + offsetY);
ctx.lineTo(MID_X - 58, MID_Y - 12 + offsetY);
ctx.lineTo(MID_X - 102, MID_Y - 24 + offsetY);
ctx.lineTo(MID_X - 63, MID_Y + 20 + offsetY);
ctx.lineTo(MID_X - 34, MID_Y + 11 + offsetY);
ctx.fillStyle = '#fbe84e';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(MID_X - 102, MID_Y - 24 + offsetY);
ctx.lineTo(MID_X - 56, MID_Y - 15 + offsetY);
ctx.lineTo(MID_X - 22, MID_Y - 25 + offsetY);
ctx.lineTo(MID_X - 36, MID_Y - 43 + offsetY);
ctx.lineTo(MID_X - 102, MID_Y - 24 + offsetY);
ctx.fillStyle = '#f8bb12';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(MID_X - 22, MID_Y - 25 + offsetY);
ctx.lineTo(MID_X, MID_Y - 52 + offsetY);
ctx.lineTo(MID_X + 1, MID_Y - 90 + offsetY);
ctx.lineTo(MID_X - 37, MID_Y - 43 + offsetY);
ctx.lineTo(MID_X - 22, MID_Y - 25 + offsetY);
ctx.fillStyle = '#fbe84e';
ctx.fill();
ctx.closePath();

ctx.strokeStyle = 'rgba(0,0,0,0.3)';
ctx.lineWidth = 0.5;
ctx.stroke();
ctx.closePath();

// inner star outline
ctx.beginPath();
ctx.moveTo(MID_X + 64, MID_Y - 15 + offsetY);
ctx.lineTo(MID_X + 40, MID_Y + 13 + offsetY);
ctx.lineTo(MID_X + 41, MID_Y + 45 + offsetY);
ctx.lineTo(MID_X + 70, MID_Y + 90 + offsetY);
ctx.lineTo(MID_X + 38, MID_Y + 47 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y + 35 + offsetY);
ctx.lineTo(MID_X - 34, MID_Y + 46 + offsetY);
ctx.lineTo(MID_X - 70, MID_Y + 90 + offsetY);
ctx.lineTo(MID_X - 36, MID_Y + 43 + offsetY);
ctx.lineTo(MID_X - 34, MID_Y + 13 + offsetY);
ctx.lineTo(MID_X - 57, MID_Y - 11 + offsetY);
ctx.lineTo(MID_X - 102, MID_Y - 24 + offsetY);
ctx.lineTo(MID_X - 56, MID_Y - 15 + offsetY);
ctx.lineTo(MID_X - 22, MID_Y - 25 + offsetY);
ctx.lineTo(MID_X, MID_Y - 52 + offsetY);
ctx.lineTo(MID_X + 1, MID_Y - 88 + offsetY);
ctx.lineTo(MID_X + 5, MID_Y - 51 + offsetY);
ctx.lineTo(MID_X + 26, MID_Y - 25 + offsetY);
ctx.lineTo(MID_X + 64, MID_Y - 15 + offsetY);

ctx.lineWidth = 0.7;
ctx.strokeStyle = '#fff492';
ctx.stroke();
ctx.fillStyle = '#fff492';
ctx.fill();
ctx.closePath();

// inner star
ctx.beginPath();
ctx.moveTo(MID_X + 2, MID_Y - 52 + offsetY);
ctx.lineTo(MID_X + 24, MID_Y - 23 + offsetY);
ctx.lineTo(MID_X + 64, MID_Y - 15 + offsetY);
ctx.lineTo(MID_X + 36, MID_Y + 12 + offsetY);
ctx.lineTo(MID_X + 43, MID_Y + 52 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y + 34 + offsetY);
ctx.lineTo(MID_X - 40, MID_Y + 52 + offsetY);
ctx.lineTo(MID_X - 29, MID_Y + 12 + offsetY);
ctx.lineTo(MID_X - 55, MID_Y - 12 + offsetY);
ctx.lineTo(MID_X - 19, MID_Y - 22 + offsetY);
ctx.lineTo(MID_X + 2, MID_Y - 52 + offsetY);
ctx.strokeStyle = 'rgba(255,244,146,0.98)';
ctx.stroke();
ctx.fillStyle = '#3385ff';
ctx.fill();
ctx.closePath();

ctx.font = '55px "Lilita One"';
let textX = MID_X - ctx.measureText("SCATTER").width / 2;
let textY = (MID_Y + 50) + offsetY;
let gradient = ctx.createLinearGradient(
  textX,
  textY,
  textX,
  textY - 45
);
gradient.addColorStop(0.5, "#3385ff");
gradient.addColorStop(1, "#66a3ff");
let offset = 5;
for (let i = 0; i < 10; i++) {
  ctx.fillStyle = `rgba(0, 0, 39, ${0.8 - i * 0.09})`;
  ctx.fillText("SCATTER", textX, textY + offset + i);
}

ctx.fillStyle = gradient;
ctx.fillText("SCATTER", textX, textY);
ctx.strokeStyle = "rgba(0, 0, 39, 0.8)";
ctx.lineWidth = 2.4;
ctx.strokeStyle = "white";
ctx.strokeText("SCATTER", textX, textY);
}
drawScatterV2(ctxS, 0);

scatterV2Canvas.addEventListener('click', function(event) {
    var rect = scatterV2Canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("MiddleX +/-: ", Math.abs((scatterV2Canvas.width / 2) - x), "MiddleY +/-: ", Math.abs((scatterV2Canvas.height / 2) - y));
});