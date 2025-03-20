let diamondCanvas_v2 = document.getElementById("diamond-v2-canvas");
diamondCanvas_v2.width = 260;
diamondCanvas_v2.height = 195;
let ctx5 = diamondCanvas_v2.getContext("2d");

const DIA_MIDDLE_X = diamondCanvas_v2.width / 2;
const DIA_MIDDLE_Y = diamondCanvas_v2.height / 2;
const DIA_QUARTER_Y = diamondCanvas_v2.height / 4;

diamondCanvas_v2.addEventListener('click', function(event) {
  var rect = diamondCanvas_v2.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  console.log("MiddleX23 +/-: ", Math.abs((diamondCanvas_v2.width / 2) - x), "MiddleY +/-: ", Math.abs((diamondCanvas_v2.height / 2) - y));
});


// add offsetY to all y values
function drawDiamondV2(ctx5, offsetY) {

  //Gradients 
  const TOP_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X - 5,
    DIA_MIDDLE_Y - 105 + offsetY,
    DIA_MIDDLE_X + 22,
    DIA_QUARTER_Y + 20 + offsetY
  );
  TOP_GRADIENT.addColorStop(0, "white");
  TOP_GRADIENT.addColorStop(0.5, "#7f9af1");
  TOP_GRADIENT.addColorStop(1, "white");
  
  const PART1_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X + 55, 
    (DIA_QUARTER_Y - 20) + offsetY, 
    DIA_MIDDLE_X + 105, 
    (DIA_QUARTER_Y + 20) + offsetY 
  );
  PART1_GRADIENT.addColorStop(0, "#6b92f9");
  PART1_GRADIENT.addColorStop(0.8, "#6b92f9");
  PART1_GRADIENT.addColorStop(1, "#B9F2FF");

  const PART2_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X, 
    (DIA_MIDDLE_Y + 20) + offsetY, 
    DIA_MIDDLE_X, 
    (DIA_QUARTER_Y - 10) + offsetY 
  );
  
  PART2_GRADIENT.addColorStop(0, '#6b92f9');
  PART2_GRADIENT.addColorStop(1, '#B9F2FF');

  const PART3_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X - 40,
    DIA_QUARTER_Y - 15 + offsetY,
    DIA_MIDDLE_X + 40,
    DIA_QUARTER_Y - 25 + offsetY
  );
  PART3_GRADIENT.addColorStop(0, "#B9F2FF");
  PART3_GRADIENT.addColorStop(0.4, "#6b92f9");
  PART3_GRADIENT.addColorStop(1, "#B9F2FF");

  const PART4_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X -112, 
    (DIA_QUARTER_Y - 20) + offsetY, 
    DIA_MIDDLE_X + 150, 
    (DIA_QUARTER_Y + 100) + offsetY 
  );
  PART4_GRADIENT.addColorStop(0, "#6b92f9");
  PART4_GRADIENT.addColorStop(0.8, "#9cc6f5");
  PART4_GRADIENT.addColorStop(1, "#B9F2FF");

  const PART5_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X -1, 
    DIA_MIDDLE_Y - 45 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y - 10 + offsetY 
  );
  PART5_GRADIENT.addColorStop(0, "#6b92f9");
  PART5_GRADIENT.addColorStop(0.6, "#9cc6f5");
  PART5_GRADIENT.addColorStop(1, "#B9F2FF");

  const PART6_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X - 15, 
    DIA_MIDDLE_Y - 15 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART6_GRADIENT.addColorStop(1, "#6b92f9");
  PART6_GRADIENT.addColorStop(0.2, "#9cc6f5");
  PART6_GRADIENT.addColorStop(0, "#B9F2FF");

  const PART7_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X - 15, 
    DIA_MIDDLE_Y - 15 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART7_GRADIENT.addColorStop(1, "#6b92f9");
  PART7_GRADIENT.addColorStop(0, "#9cc6f5");
  PART7_GRADIENT.addColorStop(0, "#B9F2FF");

  const PART8_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X - 53, 
    DIA_MIDDLE_Y - 27 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART8_GRADIENT.addColorStop(1, "#6b92f9");
  PART8_GRADIENT.addColorStop(0.2, "#9cc6f5");
  PART8_GRADIENT.addColorStop(0, "#B9F2FF");

  const PART9_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X + 62, 
    DIA_MIDDLE_Y - 27 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART9_GRADIENT.addColorStop(0, "#6b92f9");
  PART9_GRADIENT.addColorStop(0.2, "#9cc6f5");
  PART9_GRADIENT.addColorStop(1, "#B9F2FF");

  const PART10_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X + 62, 
    DIA_MIDDLE_Y - 27 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART10_GRADIENT.addColorStop(0, "white");
  PART10_GRADIENT.addColorStop(0.1, "#d4dffc");
  PART10_GRADIENT.addColorStop(0.7, "#B9F2FF");
  const PART11_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X + 97, 
    DIA_MIDDLE_Y - 42 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART11_GRADIENT.addColorStop(1, "#6b92f9");
  PART11_GRADIENT.addColorStop(0.3, "#9cc6f5");
  PART11_GRADIENT.addColorStop(0, "#B9F2FF");

  const PART12_GRADIENT = ctx5.createLinearGradient(
    DIA_MIDDLE_X - 110, 
    DIA_MIDDLE_Y - 39 + offsetY, 
    DIA_MIDDLE_X, 
    DIA_MIDDLE_Y + 92 + offsetY 
  );
  PART12_GRADIENT.addColorStop(1, "#6b92f9");
  PART12_GRADIENT.addColorStop(0.1, "#9cc6f5");
  PART12_GRADIENT.addColorStop(0, "#B9F2FF");

  
  ctx5.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx5.lineWidth = 0.7;
    // Diamond top
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X - 75, (DIA_QUARTER_Y - 20) + offsetY); // top left

    // lightblue
    ctx5.lineTo(DIA_MIDDLE_X, DIA_QUARTER_Y - 45 + offsetY); // top middle
  ctx5.lineTo(DIA_MIDDLE_X + 50, DIA_QUARTER_Y - 35 + offsetY); // top right
  ctx5.lineTo(DIA_MIDDLE_X + 75, DIA_QUARTER_Y - 20 + offsetY); // top right
  ctx5.lineTo(DIA_MIDDLE_X + 55, DIA_QUARTER_Y - 5 + offsetY); // right middle
  ctx5.lineTo(DIA_MIDDLE_X, DIA_QUARTER_Y + 10 + offsetY); // bottom middle
  ctx5.lineTo(DIA_MIDDLE_X - 55, DIA_QUARTER_Y - 5 + offsetY); // left middle
  ctx5.lineTo(DIA_MIDDLE_X - 75, DIA_QUARTER_Y - 20 + offsetY); // bottom left
  ctx5.lineTo(DIA_MIDDLE_X - 50, DIA_QUARTER_Y - 35 + offsetY); // left middle
  ctx5.lineTo(DIA_MIDDLE_X, DIA_QUARTER_Y - 45 + offsetY); // top middle
  ctx5.closePath();
  ctx5.fillStyle = TOP_GRADIENT;
  ctx5.fill();
  ctx5.stroke();

    // blue
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X + 75, (DIA_QUARTER_Y - 20) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 105, (DIA_QUARTER_Y + 20) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 55, (DIA_QUARTER_Y - 5) + offsetY);
    ctx5.closePath();
    ctx5.fillStyle = PART4_GRADIENT;
    ctx5.fill();
    ctx5.stroke();

    // red
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X + 105, (DIA_QUARTER_Y + 20) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 55, (DIA_QUARTER_Y - 5) + offsetY);
    ctx5.closePath();
    ctx5.fillStyle = PART5_GRADIENT;
    ctx5.fill();
    ctx5.stroke();

    // green
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X + 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_QUARTER_Y + 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 55, (DIA_QUARTER_Y - 5) + offsetY);
    ctx5.closePath();
    ctx5.fillStyle = PART4_GRADIENT;
    ctx5.fill();
    ctx5.stroke();

    // orange
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_QUARTER_Y + 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.closePath();
    ctx5.fillStyle = PART5_GRADIENT;
    ctx5.fill();
    ctx5.stroke();

    // purple
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X - 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 55, (DIA_QUARTER_Y - 5) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_QUARTER_Y + 10) + offsetY);
    ctx5.closePath();
    ctx5.fillStyle = PART4_GRADIENT;
    ctx5.fill();
    ctx5.stroke();

    // yellow
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X - 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 55, (DIA_QUARTER_Y - 5) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 105, (DIA_QUARTER_Y + 20) + offsetY);
    ctx5.closePath();
    ctx5.fillStyle = PART5_GRADIENT;
    ctx5.fill();
    ctx5.stroke();

    // pink
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X - 105, (DIA_QUARTER_Y + 20) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 55, (DIA_QUARTER_Y - 5) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 75, (DIA_QUARTER_Y - 20) + offsetY); 
    ctx5.closePath();
    ctx5.fillStyle = PART10_GRADIENT;
    ctx5.fill();

    // turquoise
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.91) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.91) + offsetY);
    ctx5.closePath();
    ctx5.stroke();
    ctx5.fillStyle = PART7_GRADIENT;
    ctx5.fill();

    // darkblue
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.closePath();
    ctx5.stroke();
    ctx5.fillStyle = PART6_GRADIENT;
    ctx5.fill();

    // darkorange
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);  // * 1.93
    ctx5.lineTo(DIA_MIDDLE_X + 105, (DIA_QUARTER_Y + 20) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.closePath();
    ctx5.stroke();
    ctx5.fillStyle = PART11_GRADIENT;
    ctx5.fill();

    // darkgreen
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 105, (DIA_QUARTER_Y + 20) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.closePath();
    ctx5.stroke();
    ctx5.fillStyle = PART12_GRADIENT;
    ctx5.fill();

    // darkred
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 70, (DIA_MIDDLE_Y - 18) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X - 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.closePath();
    ctx5.stroke();
    ctx5.fillStyle = PART8_GRADIENT;
    ctx5.fill();

    // black
    ctx5.beginPath();
    ctx5.moveTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 70, (DIA_MIDDLE_Y - 18) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X + 35, (DIA_MIDDLE_Y - 10) + offsetY);
    ctx5.lineTo(DIA_MIDDLE_X, (DIA_MIDDLE_Y * 1.95) + offsetY);
    ctx5.closePath();
    ctx5.stroke();
    ctx5.fillStyle = PART9_GRADIENT;
    ctx5.fill();

  ctx5.font = '68px "Lilita One"';
  let textX = DIA_MIDDLE_X - ctx5.measureText("WILD").width / 2;
  let textY = DIA_MIDDLE_Y + 60 + offsetY;
  let offset = 3;
  for (let i = 0; i < 10; i++) {
    ctx5.fillStyle = `rgba(0, 0, 39, ${0.8 - i * 0.08})`;
    ctx5.fillText("WILD", textX, textY + offset + i);
  }
  const WILD_GRADIENT = ctx5.createLinearGradient(
    textX,
    textY,
    textX,
    textY - 45
  );
  //WILD_GRADIENT.addColorStop(1, "#960e0e");
  WILD_GRADIENT.addColorStop(0.5
    , "red");
  WILD_GRADIENT.addColorStop(0, "#7d0a0a");
  
  ctx5.fillStyle = WILD_GRADIENT;
  ctx5.fillText("WILD", textX, textY);
  
  ctx5.lineWidth = 2.4;
  ctx5.strokeStyle = "white"; // text border
  ctx5.strokeText("WILD", textX, textY);
}
drawDiamondV2(ctx5, 0);

// Control points

/*
  ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X - 60, DIA_QUARTER_Y - 20, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X - 62.5, DIA_MIDDLE_Y - 20, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X - 55, DIA_QUARTER_Y, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X, DIA_QUARTER_Y - 40, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X + 55, DIA_QUARTER_Y, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'green';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X + 60, DIA_QUARTER_Y - 20, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X + 85, DIA_QUARTER_Y + 20, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X + 35, DIA_MIDDLE_Y - 10, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X - 35, DIA_MIDDLE_Y - 10, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X - 85, DIA_QUARTER_Y + 20, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X, DIA_QUARTER_Y + 10, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();

ctx5.beginPath();
ctx5.arc(DIA_MIDDLE_X, DIA_MIDDLE_Y * 1.91, 5, 0, 2 * Math.PI);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();
*/
