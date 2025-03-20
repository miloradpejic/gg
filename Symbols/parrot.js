let parrotCanvas = document.getElementById("parrot-canvas");
let parrot_ctx = parrotCanvas.getContext("2d");
parrotCanvas.width = 260;
parrotCanvas.height = 195;

const X = parrotCanvas.width / 2;
const Y = parrotCanvas.height / 2;

function drawParrot(ctx, offsetY) {

  let radius = 22.5;
  //Gradients 
  const WHITE_GRADIENT = ctx.createRadialGradient(X, Y+10, 0, X, Y, radius);
  WHITE_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.3)");
  WHITE_GRADIENT.addColorStop(1, "rgba(255, 255, 255, 0)");

  const HEAD_GRADIENT = ctx.createLinearGradient(
    X + 16,
    Y - 48 + offsetY,
    X - 39,
    Y - 51 + offsetY
  );
  HEAD_GRADIENT.addColorStop(1, "#0f3b04");
  HEAD_GRADIENT.addColorStop(0.6, "#3aeb34");
  HEAD_GRADIENT.addColorStop(0, "#990000");

  const BODY_GRADIENT = ctx.createRadialGradient(
    X,
    Y + 2  + offsetY,
    2,
    X,
    Y + 2 + offsetY,
    50
  );
  BODY_GRADIENT.addColorStop(0, "red");
  BODY_GRADIENT.addColorStop(0.6, "#990000");

  const EYE_GRADIENT = ctx.createRadialGradient(
    X ,
    Y - 34  + offsetY,
    2,
    X,
    Y - 34 + offsetY,
    30
  );
  EYE_GRADIENT.addColorStop(0, "#bcbfbb");
  EYE_GRADIENT.addColorStop(1, "white");


  const NOSE_GRADIENT = ctx.createRadialGradient(
    X  - 15,
    Y - 34  + offsetY,
    10,
    X - 20,
    Y - 34 + offsetY,
    20
  );
  NOSE_GRADIENT.addColorStop(0, "white");
  NOSE_GRADIENT.addColorStop(0.7, "#db1f07");
  //NOSE_GRADIENT.addColorStop(1, "#db1f07");

  const BEAK1_GRADIENT = ctx.createRadialGradient(
    X - 42,
    Y - 16  + offsetY,
    5,
    X - 42,
    Y - 19 + offsetY,
    20
  );
  BEAK1_GRADIENT.addColorStop(0, "black");
  BEAK1_GRADIENT.addColorStop(0.25, "#e8b990");

  const BEAK2_GRADIENT = ctx.createRadialGradient(
    X - 19,
    Y - 19  + offsetY,
    2,
    X - 17,
    Y - 19 + offsetY,
    30
  );
  BEAK2_GRADIENT.addColorStop(0.55, "black");
  BEAK2_GRADIENT.addColorStop(1, "gray");

  const RED_GRADIENT = ctx.createRadialGradient(
    X,
    Y - 78  + offsetY,
    55,
    X - 3,
    Y - 78 + offsetY,
    70
  );
  RED_GRADIENT.addColorStop(0, "red");
  RED_GRADIENT.addColorStop(0.3, "red");
  RED_GRADIENT.addColorStop(1, "#960c02");

  const YELLOW_GRADIENT = ctx.createRadialGradient(
    X,
    Y - 70  + offsetY,
    55,
    X,
    Y - 70 + offsetY,
    80
  );
  YELLOW_GRADIENT.addColorStop(0.5, "#f0de62");
  YELLOW_GRADIENT.addColorStop(1, "#f5d605");

  const TOP_YELLOW_GRADIENT = ctx.createRadialGradient(
    X,
    Y - 70  + offsetY,
    90,
    X,
    Y - 70 + offsetY,
    120
  );
  TOP_YELLOW_GRADIENT.addColorStop(0.4, "#f5d605");
  TOP_YELLOW_GRADIENT.addColorStop(1, "#9e8a02");
  

  const GREEN_GRADIENT = ctx.createRadialGradient(
    X + 4,
    Y - 70  + offsetY,
    80,
    X,
    Y - 70 + offsetY,
    100
  );
  GREEN_GRADIENT.addColorStop(0.35, "#29c215");
  GREEN_GRADIENT.addColorStop(1, "#0f3b04");

  const BLUE_GRADIENT = ctx.createRadialGradient(
    X + 4,
    Y - 70  + offsetY,
    100,
    X,
    Y - 70 + offsetY,
    120
  );
  BLUE_GRADIENT.addColorStop(0.2, "#4588ff");
  BLUE_GRADIENT.addColorStop(1, "#0243b5");

  const TEXT_GRADIENT = ctx.createLinearGradient(
    X,
    Y +  + offsetY,
    X,
    Y + 75 + offsetY,
  );
  TEXT_GRADIENT.addColorStop(0, "red");
  TEXT_GRADIENT.addColorStop(0.2, "#c5032a");



  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Parrot Wings (left)

  // Outter close part of the wing
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.lineWidth = 0.5;

  // (from the top) Feather 1
  ctx.beginPath();
  ctx.moveTo(X - 74, (Y - 58) + offsetY);
  ctx.quadraticCurveTo(X - 92, (Y - 67) + offsetY, X - 118, (Y - 89) + offsetY);
  ctx.quadraticCurveTo(X - 124, (Y - 70) + offsetY, X - 70, (Y - 46) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y - 40) + offsetY, X - 74, (Y - 58) + offsetY);
  ctx.fillStyle = TOP_YELLOW_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 2
  ctx.beginPath();
  ctx.moveTo(X - 100, (Y - 64) + offsetY);
  ctx.quadraticCurveTo(X - 110, (Y - 71) + offsetY, X - 120, (Y - 68) + offsetY);
  ctx.quadraticCurveTo(X - 112, (Y - 52) + offsetY, X - 60, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X - 64, (Y - 47) + offsetY, X - 100, (Y - 64) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Feather 3
  ctx.beginPath();
  ctx.moveTo(X - 102, (Y - 53) + offsetY);
  ctx.quadraticCurveTo(X - 112, (Y - 56) + offsetY, X - 118, (Y - 53) + offsetY);
  ctx.quadraticCurveTo(X - 114, (Y - 38) + offsetY, X - 74, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X - 78, (Y - 47) + offsetY, X - 102, (Y - 53) + offsetY);
  ctx.fillStyle = BLUE_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 4
  ctx.beginPath();
  ctx.moveTo(X - 100, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X - 104, (Y - 40) + offsetY, X - 110, (Y - 38) + offsetY);
  ctx.quadraticCurveTo(X - 107, (Y - 24) + offsetY, X - 80, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X - 76, (Y - 33) + offsetY, X - 100, (Y - 39) + offsetY);
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 5
  ctx.beginPath();
  ctx.moveTo(X - 96, (Y - 28) + offsetY);
  ctx.quadraticCurveTo(X - 102, (Y - 29) + offsetY, X - 104, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X - 101, (Y - 10) + offsetY, X - 74, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X - 20, (Y - 15) + offsetY, X - 96, (Y - 28) + offsetY);
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 6
  ctx.beginPath();
  ctx.moveTo(X - 89, (Y - 19) + offsetY);
  ctx.quadraticCurveTo(X - 97, (Y - 18) + offsetY, X - 98, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X - 86, (Y - 3) + offsetY, X - 74, (Y - 8) + offsetY);
  ctx.quadraticCurveTo(X - 50, (Y -20) + offsetY, X - 89, (Y - 19) + offsetY);
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 7
  ctx.beginPath();
  ctx.moveTo(X - 78, (Y - 9) + offsetY);
  ctx.quadraticCurveTo(X - 87, (Y - 7) + offsetY, X - 92, (Y - 1) + offsetY);
  ctx.quadraticCurveTo(X - 82, (Y + 5) + offsetY, X - 74, (Y + 2) + offsetY);
  ctx.quadraticCurveTo(X - 20, (Y - 8) + offsetY, X - 78, (Y - 9) + offsetY);
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 8
  ctx.beginPath();
  ctx.moveTo(X - 66, (Y - 3) + offsetY);
  ctx.quadraticCurveTo(X - 74, Y + offsetY, X - 79, (Y + 5) + offsetY);
  ctx.quadraticCurveTo(X - 72, (Y + 10) + offsetY, X - 55, (Y + 3) + offsetY);
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 9
  ctx.beginPath();
  ctx.moveTo(X - 66, (Y + 5) + offsetY);
  ctx.quadraticCurveTo(X - 75, (Y + 6) + offsetY, X - 74, (Y + 11) + offsetY);
  ctx.quadraticCurveTo(X - 59, (Y + 15) + offsetY, X - 55, (Y + 6) + offsetY);
  ctx.quadraticCurveTo(X - 50, (Y - 5) + offsetY, X - 62, (Y + 5) + offsetY);
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Outter middle part of the wing

  // (from the top) Feather 1
  ctx.beginPath();
  ctx.moveTo(X - 65, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X - 74, (Y - 48) + offsetY, X - 90, (Y - 42) + offsetY);
  ctx.quadraticCurveTo(X - 85, (Y - 30) + offsetY, X - 60, (Y - 28) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y - 32) + offsetY, X - 65, (Y - 34) + offsetY);
  ctx.closePath();
  ctx.fillStyle = GREEN_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 2
  ctx.beginPath();
  ctx.moveTo(X - 79, (Y - 32) + offsetY);
  ctx.quadraticCurveTo(X - 84, (Y - 36) + offsetY, X - 91, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X - 85, (Y - 19) + offsetY, X - 60, (Y - 21) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y - 29) + offsetY, X - 79, (Y - 32) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 3
  ctx.beginPath();
  ctx.moveTo(X - 71, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X - 78, (Y - 29) + offsetY, X - 91, (Y - 26) + offsetY);
  ctx.quadraticCurveTo(X - 80, (Y - 15) + offsetY, X - 60, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y - 24) + offsetY, X - 71, (Y - 25) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 4
  ctx.beginPath();
  ctx.moveTo(X - 71, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X - 80, (Y - 19) + offsetY, X - 84, (Y - 14) + offsetY);
  ctx.quadraticCurveTo(X - 76, (Y - 10) + offsetY, X - 60, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y - 19) + offsetY, X - 71, (Y - 18) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 5
  ctx.beginPath();
  ctx.moveTo(X - 73, (Y - 11) + offsetY);
  ctx.quadraticCurveTo(X - 78, (Y - 12) + offsetY, X - 82, (Y - 7) + offsetY);
  ctx.quadraticCurveTo(X - 75, Y + offsetY, X - 49, (Y - 11) + offsetY);
  ctx.quadraticCurveTo(X - 45, (Y - 20) + offsetY, X - 73, (Y - 11) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 6
  ctx.beginPath();
  ctx.moveTo(X - 63, (Y - 6) + offsetY);
  ctx.quadraticCurveTo(X - 70, (Y - 5) + offsetY, X - 75, Y + offsetY, X - 50, (Y - 7) + offsetY);
  ctx.quadraticCurveTo(X - 58, (Y + 5) + offsetY, X - 48, (Y - 7) + offsetY);
  ctx.quadraticCurveTo(X - 45, (Y - 14) + offsetY, X - 63, (Y - 6) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 7
  ctx.beginPath();
  ctx.moveTo(X - 57, Y + offsetY);
  ctx.quadraticCurveTo(X - 65, (Y + 2) + offsetY, X - 66, (Y + 5) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y + 12) + offsetY, X - 44, (Y - 2) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y - 11) + offsetY, X - 57, Y + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 8
  ctx.beginPath();
  ctx.moveTo(X - 52, (Y + 3) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y + 5) + offsetY, X - 62, (Y + 13) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y + 15) + offsetY, X - 40, (Y + 1) + offsetY);
  ctx.quadraticCurveTo(X - 35, (Y - 6) + offsetY, X - 52, (Y + 3) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 9
  ctx.beginPath();
  ctx.moveTo(X - 47, (Y + 6) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y + 8) + offsetY, X - 57, (Y + 15) + offsetY);
  ctx.quadraticCurveTo(X - 50, (Y + 17) + offsetY, X - 35, (Y + 4) + offsetY);
  ctx.quadraticCurveTo(X - 30, (Y - 5) + offsetY, X - 47, (Y + 6) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 10
  ctx.beginPath();
  ctx.moveTo(X - 42, (Y + 9) + offsetY);
  ctx.quadraticCurveTo(X - 50, (Y + 11) + offsetY, X - 52, (Y + 18) + offsetY);
  ctx.quadraticCurveTo(X - 45, (Y + 20) + offsetY, X - 30, (Y + 6) + offsetY);
  ctx.quadraticCurveTo(X - 25, (Y - 2) + offsetY, X - 42, (Y + 9) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 11
  ctx.beginPath();
  ctx.moveTo(X - 37, (Y + 12) + offsetY);
  ctx.quadraticCurveTo(X - 45, (Y + 14) + offsetY, X - 47, (Y + 21) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y + 23) + offsetY, X - 25, (Y + 9) + offsetY);
  ctx.quadraticCurveTo(X - 20, (Y - 7) + offsetY, X - 37, (Y + 12) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 12
  ctx.beginPath();
  ctx.moveTo(X - 32, (Y + 15) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y + 17) + offsetY, X - 42, (Y + 24) + offsetY);
  ctx.quadraticCurveTo(X - 35, (Y + 26) + offsetY, X - 20, (Y + 12) + offsetY);
  ctx.quadraticCurveTo(X - 15, (Y + 3) + offsetY, X - 32, (Y + 15) + offsetY);
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

   // (from the top) Feather 1
  ctx.beginPath();
  ctx.moveTo(X - 55, (Y - 47) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y - 55) + offsetY, X - 76, (Y - 60) + offsetY);
  ctx.quadraticCurveTo(X - 75, (Y - 45) + offsetY, X - 45, (Y - 32) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y - 38) + offsetY, X - 55, (Y - 47) + offsetY);
  ctx.closePath();
  ctx.fillStyle = RED_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // First feather
  ctx.beginPath();
  ctx.moveTo(X - 39, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X - 44, (Y - 46) + offsetY, X - 58, (Y - 52) + offsetY);
  ctx.quadraticCurveTo(X - 52, (Y - 37) + offsetY, X - 40, (Y - 29) + offsetY);
  ctx.quadraticCurveTo(X - 35, (Y - 32) + offsetY, X - 39, (Y - 39) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();

  // Feather 2
  ctx.beginPath();
  ctx.moveTo(X - 67, (Y - 45) + offsetY);
  ctx.quadraticCurveTo(X - 75, (Y - 50) + offsetY, X - 73, (Y - 46) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y - 21) + offsetY, X - 38, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X - 50, (Y - 41) + offsetY, X - 67, (Y - 45) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();

  // Feather 3
  ctx.beginPath();
  ctx.moveTo(X - 60, (Y - 33) + offsetY);
  ctx.quadraticCurveTo(X - 70, (Y - 35) + offsetY, X - 75, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X - 70, (Y - 22) + offsetY, X - 47, (Y - 24) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y - 29) + offsetY, X - 60, (Y - 32) + offsetY);
  ctx.closePath();
  ctx.fillStyle = YELLOW_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 4
  ctx.beginPath();
  ctx.moveTo(X - 54, (Y - 24) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y - 26) + offsetY, X - 71, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X - 65, (Y - 19) + offsetY, X - 42, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X - 35, (Y - 26) + offsetY, X - 54, (Y - 24) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Feather 5
  ctx.beginPath();
  ctx.moveTo(X - 48, (Y - 19) + offsetY);
  ctx.quadraticCurveTo(X - 55, (Y - 21) + offsetY, X - 66, (Y - 17) + offsetY);
  ctx.quadraticCurveTo(X - 50, (Y - 7) + offsetY, X - 34, (Y - 15) + offsetY);
  ctx.quadraticCurveTo(X - 25, (Y - 24) + offsetY, X - 48, (Y - 18) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 6
  ctx.beginPath();
  ctx.moveTo(X - 50, (Y - 11) + offsetY);
  ctx.quadraticCurveTo(X - 48, (Y - 12) + offsetY, X - 54, (Y - 10) + offsetY);
  ctx.quadraticCurveTo(X - 43, (Y - 5) + offsetY, X - 27, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X - 20, (Y - 25) + offsetY, X - 50, (Y - 11) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 7
  ctx.beginPath();
  ctx.moveTo(X - 34, (Y - 9) + offsetY);
  ctx.quadraticCurveTo(X - 37, (Y - 8) + offsetY, X - 36, (Y - 6) + offsetY);
  ctx.quadraticCurveTo(X - 32, (Y - 3) + offsetY, X - 20, (Y - 10) + offsetY);
  ctx.quadraticCurveTo(X - 15, (Y - 23) + offsetY, X - 34, (Y - 9) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 8
  ctx.beginPath();
  ctx.moveTo(X - 45, (Y - 7) + offsetY);
  ctx.quadraticCurveTo(X - 45, (Y - 12) + offsetY, X - 50, (Y - 2) + offsetY);
  ctx.quadraticCurveTo(X - 45, (Y + 1) + offsetY, X - 30, (Y - 6) + offsetY);
  ctx.quadraticCurveTo(X - 21, (Y - 18) + offsetY, X - 45, (Y - 9) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 9
  ctx.beginPath();
  ctx.moveTo(X - 41, (Y - 1) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y - 5) + offsetY, X - 45, (Y + 2) + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y + 5) + offsetY, X - 27, (Y - 5) + offsetY);
  ctx.quadraticCurveTo(X - 20, (Y - 15) + offsetY, X - 41, (Y - 1) + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 10
  ctx.beginPath();
  ctx.moveTo(X - 35, Y + offsetY);
  ctx.quadraticCurveTo(X - 40, (Y + 2) + offsetY, X - 38, (Y + 5) + offsetY);
  ctx.quadraticCurveTo(X - 33, (Y + 6) + offsetY, X - 25, Y + offsetY);
  ctx.quadraticCurveTo(X - 15, (Y - 15) + offsetY, X - 35, Y + offsetY);
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Parrot beak
  ctx.beginPath();
  ctx.moveTo(X - 40, (Y - 15) + offsetY);
  ctx.quadraticCurveTo(X - 53, (Y - 28) + offsetY, X - 40, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X - 35, (Y - 28) + offsetY, X - 28, (Y - 31) + offsetY);
  ctx.bezierCurveTo(X - 28, (Y - 20) + offsetY, X - 41, (Y - 28) + offsetY, X - 40, (Y - 15) + offsetY);
  ctx.strokeStyle = "#363534";
  ctx.fillStyle = BEAK1_GRADIENT;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(X - 28, (Y - 29) + offsetY);
  ctx.quadraticCurveTo(X - 14, (Y - 25) + offsetY, X - 20, (Y - 11) + offsetY);
  ctx.quadraticCurveTo(X - 31, (Y - 14) + offsetY, X - 37, (Y - 21) + offsetY);
  ctx.quadraticCurveTo(X - 27, (Y - 21) + offsetY, X - 28, (Y - 29) + offsetY);
  ctx.fillStyle = BEAK2_GRADIENT;
  ctx.strokeStyle = "black";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();  

  // Parrot body
  ctx.strokeStyle = "rgba(0,0,0,0.7)";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(X + 3, (Y - 39) + offsetY);
  ctx.bezierCurveTo(X + 22, (Y - 21) + offsetY, X + 19, (Y - 5) + offsetY, X + 26, Y + offsetY);
  ctx.bezierCurveTo(X + 28, (Y + 8) + offsetY, X + 24, (Y + 9) + offsetY, X + 29, (Y + 18) + offsetY);
  ctx.lineTo(X - 26, (Y + 18) + offsetY);
  ctx.bezierCurveTo(X - 32, (Y + 9) + offsetY, X - 20, (Y + 8) + offsetY, X - 27, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X - 20, (Y - 11) + offsetY, X - 20, (Y - 11) + offsetY);
  ctx.quadraticCurveTo(X - 15, (Y - 24) + offsetY, X - 29, (Y - 29) + offsetY);
  ctx.quadraticCurveTo(X - 28, (Y - 36) + offsetY, X - 40, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X - 18, (Y - 55) + offsetY, X + 3, (Y - 39) + offsetY);
  ctx.fillStyle = BODY_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // body parts
  ctx.beginPath();
  ctx.moveTo(X - 41, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X - 1, (Y - 66) + offsetY, X + 18.5, (Y - 17) + offsetY);
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.stroke();
  
  ctx.strokeStyle = 'transparent';
  ctx.beginPath();
  ctx.moveTo(X - 41, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X - 1, (Y - 66) + offsetY, X + 18.5, (Y - 17) + offsetY);
  ctx.quadraticCurveTo(X + 12, (Y - 18) + offsetY, X + 15, (Y - 13) + offsetY);
  ctx.bezierCurveTo(X + 4, (Y - 31) + offsetY, X - 16.5, (Y - 45) + offsetY, X - 29, (Y - 35) + offsetY);
  ctx.quadraticCurveTo(X - 29, (Y - 38) + offsetY, X - 38, (Y - 39) + offsetY);
  ctx.fillStyle = HEAD_GRADIENT;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(X - 29, (Y - 35) + offsetY);
  ctx.quadraticCurveTo(X - 25, (Y - 31) + offsetY, X - 30, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X - 23, (Y - 26) + offsetY, X - 17, (Y - 17) + offsetY);
  ctx.quadraticCurveTo(X - 15, (Y - 21) + offsetY, X - 14, (Y - 24) + offsetY);
  ctx.quadraticCurveTo(X - 10, (Y - 24) + offsetY, X - 10, (Y - 21) + offsetY);
  ctx.quadraticCurveTo(X - 7, (Y - 24) + offsetY, X - 11, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X - 7, (Y - 30) + offsetY, X - 6, (Y - 33) + offsetY);
  ctx.quadraticCurveTo(X - 18, (Y - 44) + offsetY, X - 29, (Y - 35) + offsetY);
  ctx.fillStyle = EYE_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // parrot nose 
  ctx.beginPath();
  ctx.moveTo(X - 38, (Y - 32) + offsetY);
  ctx.quadraticCurveTo(X - 44, (Y - 38) + offsetY, X - 39, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X - 27, (Y - 39) + offsetY, X - 29, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X - 39, (Y - 30) + offsetY, X - 38, (Y - 34) + offsetY);
  ctx.fillStyle = NOSE_GRADIENT;
  ctx.fill();
  ctx.strokeStyle = "rgba(0,0,0,0.4)";
  ctx.stroke();
  ctx.closePath();
  

  // Parrot eye
  ctx.beginPath();
  ctx.moveTo(X - 22, (Y - 33) + offsetY);
  ctx.bezierCurveTo(X - 23, (Y - 38) + offsetY, X - 16, (Y - 39) + offsetY, X - 13, (Y - 36) + offsetY);
  ctx.bezierCurveTo(X - 11, (Y - 35) + offsetY, X - 18, (Y - 32) + offsetY, X - 22, (Y - 33) + offsetY);
  ctx.fillStyle = "#c7af4d";
  ctx.fill();
  ctx.closePath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 0.8;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(X - 18, (Y - 36) + offsetY);
  ctx.arc(X - 19, (Y - 36) + offsetY, 1.6, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#7d8362";
  ctx.stroke();

    // Parrot tail

  // (from the left) First feather

  // First feather
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.beginPath();
  ctx.moveTo(X - 14, (Y + 52) + offsetY);
  ctx.quadraticCurveTo(X - 10, (Y + 65) + offsetY, X - 24.5, (Y + 83) + offsetY);
  ctx.quadraticCurveTo(X - 36, (Y + 62) + offsetY, X - 14, (Y + 52) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "#4588ff";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(X - 50, (Y + 54) + offsetY);
  ctx.quadraticCurveTo(X - 60, (Y + 62) + offsetY, X - 76, (Y + 56) + offsetY);
  ctx.quadraticCurveTo(X - 70, (Y + 50) + offsetY, X - 50, (Y + 54) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "#9e8a02";
  ctx.fill();
  ctx.stroke();

  // Second feather
  ctx.beginPath();
  ctx.moveTo(X - 15, (Y + 50) + offsetY);
  ctx.quadraticCurveTo(X - 29, (Y + 68) + offsetY, X - 41, (Y + 58) + offsetY);
  ctx.quadraticCurveTo(X - 35, (Y + 52) + offsetY, X - 15, (Y + 50) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();

  // Fourth feather
  ctx.beginPath();
  ctx.moveTo(X - 11, (Y + 91) + offsetY);
  ctx.quadraticCurveTo(X + 6, (Y + 79) + offsetY, X - 7.5, (Y + 47) + offsetY);
  ctx.quadraticCurveTo(X - 21, (Y + 60) + offsetY, X - 11, (Y + 91) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Sixth feather
  ctx.beginPath();
  ctx.moveTo(X + 20, (Y + 53) + offsetY);
  ctx.quadraticCurveTo(X + 34, (Y + 60) + offsetY, X + 33.5, (Y + 82) + offsetY);
  ctx.quadraticCurveTo(X + 10, (Y + 75) + offsetY, X + 10, (Y + 53) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Eighth feather
  ctx.beginPath();
  ctx.moveTo(X + 23, (Y + 54) + offsetY);
  ctx.quadraticCurveTo(X + 50, (Y + 60) + offsetY, X + 60, (Y + 70) + offsetY);
  ctx.quadraticCurveTo(X + 35, (Y + 75) + offsetY, X + 23, (Y + 54) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Seventh feather
  ctx.beginPath();
  ctx.moveTo(X + 16.5, (Y + 48) + offsetY);
  ctx.quadraticCurveTo(X + 45, (Y + 55) + offsetY, X + 49, (Y + 62) + offsetY);
  ctx.quadraticCurveTo(X + 30, (Y + 63) + offsetY, X + 16.5, (Y + 48) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "#5ffdfc";
  ctx.fill();
  ctx.stroke();


  // First to draw feather
  ctx.beginPath();
  ctx.moveTo(X - 4.5, (Y + 48) + offsetY);
  ctx.quadraticCurveTo(X + 21, (Y + 55) + offsetY, X + 16, (Y + 79) + offsetY);
  ctx.quadraticCurveTo(X - 5, (Y + 75) + offsetY, X - 4.5, (Y + 48) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "red"; // red/yellow
  ctx.fill();
  ctx.stroke();

  // SCATTER text

ctx.save();
ctx.scale(1.5, 1.3);

// Draw the text
ctx.font = 'bold 38px "Lilita One"';
let text = "SCATTER";
let textWidth = ctx.measureText(text).width;
let textX = (X - textWidth / 2) / 5;
let textY = (Y + 40 + offsetY) / 1.2;
let offset = 7;

for (let i = 0; i < 15; i++) {
  ctx.fillStyle = `rgba(0, 0, 39, ${0.8 - i * 0.08})`;
  ctx.fillText(text, textX, textY + offset + i);
}
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 8;
ctx.strokeText(text, textX, textY + offset);

ctx.fillStyle = TEXT_GRADIENT;
ctx.shadowBlur = 3;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.fillText(text, textX, textY + offset);

ctx.shadowBlur = 0;
ctx.restore();

 // Parrot Wings (right)

   // Outter end part of the wing

  // (from the top) Feather 1
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.beginPath();
  ctx.moveTo(X + 79, (Y - 60) + offsetY);
  ctx.quadraticCurveTo(X + 102, (Y - 71) + offsetY, X + 121, (Y - 89) + offsetY);
  ctx.quadraticCurveTo(X + 131, (Y - 70) + offsetY, X + 70, (Y - 46) + offsetY);
  ctx.quadraticCurveTo(X + 75, (Y - 50) + offsetY, X + 79, (Y - 60) + offsetY);
  ctx.closePath();
  ctx.fillStyle = TOP_YELLOW_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 2
  ctx.beginPath();
  ctx.moveTo(X + 106, (Y - 63) + offsetY);
  ctx.quadraticCurveTo(X + 115, (Y - 71) + offsetY, X + 125, (Y - 68) + offsetY);
  ctx.quadraticCurveTo(X + 117, (Y - 52) + offsetY, X + 71, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X + 67, (Y - 47) + offsetY, X + 106, (Y - 63) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Feather 3
  ctx.beginPath();
  ctx.moveTo(X + 108, (Y - 52) + offsetY);
  ctx.quadraticCurveTo(X + 118, (Y - 56) + offsetY, X + 122, (Y - 53) + offsetY);
  ctx.quadraticCurveTo(X + 116, (Y - 38) + offsetY, X + 74, (Y - 32) + offsetY);
  ctx.quadraticCurveTo(X + 78, (Y - 41) + offsetY, X + 108, (Y - 52) + offsetY);
ctx.closePath();
ctx.fillStyle = BLUE_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 4
  ctx.beginPath();
  ctx.moveTo(X + 106, (Y - 39) + offsetY);
  ctx.quadraticCurveTo(X + 110, (Y - 40) + offsetY, X + 116, (Y - 38) + offsetY);
  ctx.quadraticCurveTo(X + 113, (Y - 27) + offsetY, X + 74, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X + 76, (Y - 33) + offsetY, X + 106, (Y - 39) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 5
  ctx.beginPath();
  ctx.moveTo(X + 102, (Y - 28) + offsetY);
  ctx.quadraticCurveTo(X + 108, (Y - 29) + offsetY, X + 110, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X + 107, (Y - 10) + offsetY, X + 74, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X + 20, (Y - 15) + offsetY, X + 102, (Y - 28) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 6
  ctx.beginPath();
  ctx.moveTo(X + 95, (Y - 19) + offsetY);
  ctx.quadraticCurveTo(X + 103, (Y - 18) + offsetY, X + 104, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X + 92, (Y - 7) + offsetY, X + 77, (Y - 8) + offsetY);
  ctx.quadraticCurveTo(X + 50, (Y - 15) + offsetY, X + 95, (Y - 19) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 7
  ctx.beginPath();
  ctx.moveTo(X + 84, (Y - 9) + offsetY);
  ctx.quadraticCurveTo(X + 93, (Y - 7) + offsetY, X + 98, (Y - 1) + offsetY);
  ctx.quadraticCurveTo(X + 88, (Y + 3) + offsetY, X + 75, (Y - 2) + offsetY);
  ctx.quadraticCurveTo(X + 20, (Y - 8) + offsetY, X + 84, (Y - 9) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 8
  ctx.beginPath();
  ctx.moveTo(X + 72, (Y - 3) + offsetY);
  ctx.quadraticCurveTo(X + 80, Y + offsetY, X + 85, (Y + 5) + offsetY);
  ctx.quadraticCurveTo(X + 78, (Y + 10) + offsetY, X + 65, (Y + 3) + offsetY);
  ctx.quadraticCurveTo(X + 55, (Y - 3) + offsetY, X + 72, (Y - 3) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 9
  ctx.beginPath();
  ctx.moveTo(X + 68, (Y + 5) + offsetY);
  ctx.quadraticCurveTo(X + 73, (Y + 7) + offsetY, X + 72, (Y + 13) + offsetY);
  ctx.quadraticCurveTo(X + 65, (Y + 15) + offsetY, X + 55, (Y + 6) + offsetY);
  ctx.quadraticCurveTo(X + 50, Y + offsetY, X + 68, (Y + 5) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Feather 10
  ctx.beginPath();
  ctx.moveTo(X + 55, (Y + 11) + offsetY);
  ctx.quadraticCurveTo(X + 60, (Y + 5) + offsetY, X + 60.5, (Y + 18) + offsetY);
  ctx.quadraticCurveTo(X + 55, (Y + 20) + offsetY, X + 45, (Y + 12) + offsetY);
  ctx.quadraticCurveTo(X + 40, (Y + 5) + offsetY, X + 56.5, (Y + 11) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "#0d34b5";
  ctx.fill();
  ctx.stroke();

  // Outter mid part of the wing

  // (from the top) Feather 1
  ctx.beginPath();
  ctx.moveTo(X + 80, (Y - 41) + offsetY);
  ctx.quadraticCurveTo(X + 87, (Y - 43) + offsetY, X + 93, (Y - 42) + offsetY);
  ctx.quadraticCurveTo(X + 88, (Y - 32) + offsetY, X + 60, (Y - 28) + offsetY);
  ctx.quadraticCurveTo(X + 45, (Y - 30) + offsetY, X + 80, (Y - 41) + offsetY);
  ctx.closePath();
  ctx.fillStyle = GREEN_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 2
  ctx.beginPath();
  ctx.moveTo(X + 82, (Y - 33) + offsetY);
  ctx.quadraticCurveTo(X + 90, (Y - 34) + offsetY, X + 95, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X + 93, (Y - 26) + offsetY, X + 70, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X + 45, (Y - 27) + offsetY, X + 82, (Y - 33) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 3
  ctx.beginPath();
  ctx.moveTo(X + 84, (Y - 26) + offsetY);
  ctx.quadraticCurveTo(X + 91, (Y - 27) + offsetY, X + 95, (Y - 26) + offsetY);
  ctx.quadraticCurveTo(X + 93, (Y - 18) + offsetY, X + 57, (Y - 18.5) + offsetY);
  ctx.quadraticCurveTo(X + 45, (Y - 22) + offsetY, X + 84, (Y - 26) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  // Feather 4
  ctx.beginPath();
  ctx.moveTo(X + 74, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X + 85, (Y - 18) + offsetY, X + 87, (Y - 14) + offsetY);
  ctx.quadraticCurveTo(X + 80, (Y - 10) + offsetY, X + 60, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X + 45, (Y - 18) + offsetY, X + 74, (Y - 18) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

    // Feather 5
    ctx.beginPath();
    ctx.moveTo(X + 70, (Y - 11) + offsetY);
    ctx.quadraticCurveTo(X + 80, (Y - 10) + offsetY, X + 81, (Y - 7) + offsetY);
    ctx.quadraticCurveTo(X + 75, (Y - 4) + offsetY, X + 54, (Y - 9) + offsetY);
    ctx.quadraticCurveTo(X + 40, (Y - 20) + offsetY, X + 70, (Y - 11) + offsetY);
    ctx.closePath();
    //ctx.fillStyle = "green";
  ctx.fill();
    ctx.stroke();

    // Feather 6
    ctx.beginPath();
    ctx.moveTo(X + 63, (Y - 7) + offsetY);
    ctx.quadraticCurveTo(X + 75, (Y - 5) + offsetY, X + 76, Y + offsetY);
    ctx.quadraticCurveTo(X + 68, (Y + 4) + offsetY, X + 50, (Y - 7) + offsetY);
    ctx.quadraticCurveTo(X + 45, (Y - 14) + offsetY, X + 63, (Y - 7) + offsetY);
    ctx.closePath();
    //ctx.fillStyle = "green";
  ctx.fill();
    ctx.stroke();

    // Feather 7 (small blue ones)
    ctx.beginPath();
    ctx.moveTo(X + 39, (Y - 10) + offsetY);
    ctx.quadraticCurveTo(X + 54, (Y - 9) + offsetY, X + 58, (Y - 1) + offsetY);
    ctx.quadraticCurveTo(X + 48, (Y + 3) + offsetY, X + 35, (Y - 2) + offsetY);
    ctx.quadraticCurveTo(X + 25, (Y - 8) + offsetY, X + 39, (Y - 10) + offsetY);
    ctx.closePath();
    ctx.fillStyle = YELLOW_GRADIENT;
  ctx.fill();
    ctx.stroke();

    // Feather 8
    ctx.beginPath();
    ctx.moveTo(X + 29, (Y - 6) + offsetY);
    ctx.quadraticCurveTo(X + 40, (Y - 5) + offsetY, X + 45, Y + offsetY);
    ctx.quadraticCurveTo(X + 35, (Y + 4) + offsetY, X + 20, (Y - 6) + offsetY);
    ctx.quadraticCurveTo(X + 15, (Y - 14) + offsetY, X + 29, (Y - 6) + offsetY);
    ctx.closePath();
    //ctx.fillStyle = "yellow";
  ctx.fill();
    ctx.stroke();

    // Feather 9
    ctx.beginPath();
    ctx.moveTo(X + 27, (Y - 2) + offsetY);
    ctx.quadraticCurveTo(X + 35, (Y + 2) + offsetY, X + 37, (Y + 2) + offsetY);
    ctx.quadraticCurveTo(X + 30, (Y + 6) + offsetY, X + 25, (Y - 2) + offsetY);
    //ctx.fillStyle = "yellow";
  ctx.fill();
    ctx.stroke();

    // Feather 10 (continuing the bigger, yellow ones)
    ctx.beginPath();
    ctx.moveTo(X + 61, (Y - 1) + offsetY);
    ctx.quadraticCurveTo(X + 70, (Y + 6) + offsetY, X + 67, (Y + 4) + offsetY);
    ctx.quadraticCurveTo(X + 60, (Y + 7) + offsetY, X + 46, (Y - 1) + offsetY);
    ctx.quadraticCurveTo(X + 40, (Y - 8) + offsetY, X + 61, (Y - 1) + offsetY);
    ctx.fillStyle = GREEN_GRADIENT;
  ctx.fill();
    ctx.stroke();

    // Feather 11
    ctx.beginPath();
    ctx.moveTo(X + 55, (Y + 3) + offsetY);
    ctx.quadraticCurveTo(X + 65, (Y + 11) + offsetY, X + 63, (Y + 12) + offsetY);
    ctx.quadraticCurveTo(X + 55, (Y + 12) + offsetY, X + 40, Y + offsetY);
    ctx.quadraticCurveTo(X + 35, (Y - 6) + offsetY, X + 55, (Y + 3) + offsetY);
    //ctx.fillStyle = "green";
  ctx.fill();
    ctx.stroke();

    // Feather 12
    ctx.beginPath();
    ctx.moveTo(X + 49, (Y + 6) + offsetY);
    ctx.quadraticCurveTo(X + 55, (Y + 14) + offsetY, X + 54, (Y + 13) + offsetY);
    ctx.quadraticCurveTo(X + 48, (Y + 14) + offsetY, X + 35, (Y + 3) + offsetY);
    ctx.quadraticCurveTo(X + 35, (Y - 4) + offsetY, X + 49, (Y + 6) + offsetY);
    //ctx.fillStyle = "green";
  ctx.fill();
    ctx.stroke();

    // Feather 13
    ctx.beginPath();
    ctx.moveTo(X + 43, (Y + 9) + offsetY);
    ctx.quadraticCurveTo(X + 50, (Y + 17) + offsetY, X + 47, (Y + 16) + offsetY);
    ctx.quadraticCurveTo(X + 42, (Y + 17) + offsetY, X + 30, (Y + 6) + offsetY);
    ctx.quadraticCurveTo(X + 30, (Y - 2) + offsetY, X + 43, (Y + 9) + offsetY);
    //ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();

    // Feather 14
    ctx.beginPath();
    ctx.moveTo(X + 37, (Y + 12) + offsetY);
    ctx.quadraticCurveTo(X + 45, (Y + 19) + offsetY, X + 41, (Y + 18) + offsetY);
    ctx.quadraticCurveTo(X + 23, (Y + 19) + offsetY, X + 25, (Y + 1) + offsetY);
    ctx.quadraticCurveTo(X + 29, Y + offsetY, X + 37, (Y + 12) + offsetY);
    //ctx.fillStyle = "green";
  ctx.fill();
    ctx.stroke();

  // Outter middle part of the wing

  // (from the top) Feather 1
  ctx.beginPath();
  ctx.moveTo(X + 56, (Y - 47) + offsetY);
  ctx.quadraticCurveTo(X + 66, (Y - 57) + offsetY, X + 79, (Y - 60) + offsetY);
  ctx.bezierCurveTo(X + 75, (Y - 44) + offsetY, X + 55, (Y - 41) + offsetY, X + 48, (Y - 31) + offsetY);
  ctx.quadraticCurveTo(X + 43, (Y - 38) + offsetY, X + 56, (Y - 47) + offsetY);
  ctx.closePath();
  ctx.fillStyle = RED_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 2
  ctx.beginPath();
  ctx.moveTo(X + 66, (Y - 45) + offsetY);
  ctx.quadraticCurveTo(X + 77, (Y - 50) + offsetY, X + 77, (Y - 46) + offsetY);
  ctx.quadraticCurveTo(X + 69, (Y - 33) + offsetY, X + 47, (Y - 30) + offsetY);
  ctx.quadraticCurveTo(X + 52, (Y - 37) + offsetY, X + 66, (Y - 45) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();

  // Feather 3
  ctx.beginPath();
  ctx.moveTo(X + 60, (Y - 33) + offsetY);
  ctx.quadraticCurveTo(X + 70, (Y - 35) + offsetY, X + 76, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X + 70, (Y - 26) + offsetY, X + 48, (Y - 23) + offsetY);
  ctx.quadraticCurveTo(X + 40, (Y - 29) + offsetY, X + 60, (Y - 32) + offsetY);
  ctx.closePath();
  ctx.fillStyle = YELLOW_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // Feather 4
  ctx.beginPath();
  ctx.moveTo(X + 54, (Y - 24) + offsetY);
  ctx.quadraticCurveTo(X + 60, (Y - 26) + offsetY, X + 71, (Y - 25) + offsetY);
  ctx.quadraticCurveTo(X + 65, (Y - 19) + offsetY, X + 42, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X + 35, (Y - 26) + offsetY, X + 54, (Y - 24) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Feather 5
  ctx.beginPath();
  ctx.moveTo(X + 48, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X + 55, (Y - 21) + offsetY, X + 66, (Y - 18) + offsetY);
  ctx.quadraticCurveTo(X + 50, (Y - 7) + offsetY, X + 34, (Y - 15) + offsetY);
  ctx.quadraticCurveTo(X + 25, (Y - 24) + offsetY, X + 48, (Y - 17) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "yellow";
  ctx.fill();;
  ctx.stroke();

  // feather 6
  ctx.beginPath();
  ctx.moveTo(X + 50, (Y - 11) + offsetY);
  ctx.quadraticCurveTo(X + 48, (Y - 12) + offsetY, X + 54, (Y - 10) + offsetY);
  ctx.quadraticCurveTo(X + 43, (Y - 5) + offsetY, X + 27, (Y - 13) + offsetY);
  ctx.quadraticCurveTo(X + 20, (Y - 25) + offsetY, X + 50, (Y - 11) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 7
  ctx.beginPath();
  ctx.moveTo(X + 34, (Y - 9) + offsetY);
  ctx.quadraticCurveTo(X + 37, (Y - 8) + offsetY, X + 36, (Y - 6) + offsetY);
  ctx.quadraticCurveTo(X + 32, (Y - 3) + offsetY, X + 20, (Y - 10) + offsetY);
  ctx.quadraticCurveTo(X + 15, (Y - 23) + offsetY, X + 34, (Y - 9) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // feather 8
  ctx.beginPath();
  ctx.moveTo(X + 27, (Y - 6) + offsetY);
  ctx.quadraticCurveTo(X + 28, (Y - 7) + offsetY, X + 29, (Y - 2) + offsetY);
  ctx.quadraticCurveTo(X + 24, Y + offsetY, X + 20, (Y - 6) + offsetY);
  ctx.quadraticCurveTo(X + 15, (Y - 14) + offsetY, X + 27, (Y - 6) + offsetY);
  ctx.closePath();
  //ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Outter close part of the wing
  ctx.beginPath();
  ctx.moveTo(X + 17, (Y - 21) + offsetY);
  ctx.bezierCurveTo(X + 36, (Y - 27) + offsetY, X + 37, (Y - 44) + offsetY, X + 60, (Y - 51) + offsetY);
  ctx.bezierCurveTo(X + 54, (Y - 47) + offsetY, X + 55, (Y - 38) + offsetY, X + 43, (Y - 32.5) + offsetY);
  ctx.lineTo(X + 47, (Y - 34) + offsetY);
  ctx.quadraticCurveTo(X + 58, (Y - 25) + offsetY, X + 42, (Y - 24) + offsetY);
  ctx.lineTo(X + 39, (Y - 25.5) + offsetY);
  ctx.quadraticCurveTo(X + 55, (Y - 14) + offsetY, X + 32, (Y - 20) + offsetY);
  ctx.quadraticCurveTo(X + 40, (Y - 9) + offsetY, X + 26, (Y - 17) + offsetY);
  ctx.quadraticCurveTo(X + 30, (Y - 8) + offsetY, X + 20, (Y - 13) + offsetY);
  ctx.lineTo(X + 17, (Y - 21) + offsetY);
  ctx.closePath();
  ctx.fillStyle = RED_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // claws
  ctx.beginPath();
  ctx.moveTo(X - 19, (Y + 17) + offsetY);
  ctx.quadraticCurveTo(X - 12, (Y + 22) + offsetY, X - 10, (Y + 26) + offsetY);
  ctx.quadraticCurveTo(X - 10, (Y + 12) + offsetY, X - 19, (Y + 17) + offsetY);
  ctx.closePath();
  ctx.fillStyle = "#628b86";
  ctx.lineWidth = 1.3;
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(X - 12.5, (Y + 17) + offsetY);
  ctx.quadraticCurveTo(X - 5, (Y + 23) + offsetY, X - 3, (Y + 25) + offsetY);
  ctx.quadraticCurveTo(X - 4, (Y + 10) + offsetY, X - 12.5, (Y + 17) + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(X + 24.5, (Y + 17) + offsetY);
  ctx.quadraticCurveTo(X + 14, (Y + 13) + offsetY, X + 16.5, (Y + 25) + offsetY);
  ctx.quadraticCurveTo(X + 20, (Y + 20) + offsetY, X + 24.5, (Y + 17) + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(X + 17, (Y + 17) + offsetY);
  ctx.quadraticCurveTo(X + 6, (Y + 9) + offsetY, X + 7, (Y +25) + offsetY);
  ctx.quadraticCurveTo(X + 13, (Y + 18) + offsetY, X + 17, (Y + 17) + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = WHITE_GRADIENT;
  ctx.fillRect(X - radius, Y - radius, radius * 2, radius * 2);
  
};
drawParrot(ctx, 0);