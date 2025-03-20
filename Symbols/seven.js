let sevenCanvas = document.getElementById("seven-canvas");
let ctxSe = sevenCanvas.getContext("2d");

sevenCanvas.width = 260;
sevenCanvas.height = 195;

sevenCanvas.addEventListener("click", function (event) {
  var rect = sevenCanvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  console.log("Clicked at coordinates (x, y):", x, y);
});

function drawSeven(ctx, offsetY) {
  ctx.strokeStyle = "rgba(89, 53, 12, 0.4)";
  // Gradients

  //Border for depth gradients
  const PART1_GRADIENT = ctx.createLinearGradient(49, 0, 90, 0);
  PART1_GRADIENT.addColorStop(0, "#542a16");
  PART1_GRADIENT.addColorStop(0.5, "#e0b831");
  PART1_GRADIENT.addColorStop(1, "#542a16");

  const PART2_GRADIENT = ctx.createLinearGradient(93, 0, 130, 0);
  PART2_GRADIENT.addColorStop(0, "#542a16");
  PART2_GRADIENT.addColorStop(0.5, "#e0b831");
  PART2_GRADIENT.addColorStop(1, "#542a16");

  const PART3_GRADIENT = ctx.createLinearGradient(81, 0, 162, 0);
  PART3_GRADIENT.addColorStop(0, "#542a16");
  PART3_GRADIENT.addColorStop(0.5, "#e0b831");
  PART3_GRADIENT.addColorStop(1, "#542a16");

  const PART4_GRADIENT = ctx.createLinearGradient(150, 0, 200, 0);
  PART4_GRADIENT.addColorStop(0, "#542a16");
  PART4_GRADIENT.addColorStop(0.5, "#e0b831");
  PART4_GRADIENT.addColorStop(1, "#542a16");

  //Red gradient
  const RED_GRADIENT = ctx.createLinearGradient(
    35,
    54 + offsetY,
    210,
    142 + offsetY
  );
  RED_GRADIENT.addColorStop(0, "#960e0e");
  RED_GRADIENT.addColorStop(0.5, "red");
  RED_GRADIENT.addColorStop(1, "#7d0a0a");

  // Border for depth effect

  // I part
  ctx.beginPath();
  ctx.moveTo(49, 96 + offsetY);
  ctx.bezierCurveTo(51, 105 + offsetY, 54, 108 + offsetY, 58, 108 + offsetY);
  ctx.quadraticCurveTo(69, 106 + offsetY, 80, 108 + offsetY);
  ctx.bezierCurveTo(84, 108 + offsetY, 86, 105 + offsetY, 90, 95 + offsetY);
  ctx.lineTo(49, 96 + offsetY);
  ctx.fillStyle = PART1_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // II part
  ctx.beginPath();
  ctx.moveTo(93, 88 + offsetY);
  ctx.bezierCurveTo(100, 70 + offsetY, 109, 72 + offsetY, 124, 72 + offsetY);
  ctx.lineTo(130, 66 + offsetY);
  ctx.quadraticCurveTo(87, 49 + offsetY, 93, 88 + offsetY);
  ctx.fillStyle = PART2_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // III part
  ctx.beginPath();
  ctx.moveTo(160, 173 + offsetY);
  ctx.lineTo(162, 182 + offsetY);
  ctx.bezierCurveTo(163, 185 + offsetY, 159, 191 + offsetY, 150, 190 + offsetY);
  ctx.lineTo(87, 190 + offsetY);
  ctx.bezierCurveTo(82, 190 + offsetY, 81, 182 + offsetY, 81, 175 + offsetY);
  ctx.lineTo(160, 173 + offsetY);
  ctx.fillStyle = PART3_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // IV part
  ctx.beginPath();
  ctx.moveTo(156, 159 + offsetY);
  ctx.bezierCurveTo(157, 124 + offsetY, 187, 93 + offsetY, 200, 67 + offsetY);
  ctx.bezierCurveTo(169, 98 + offsetY, 150, 117 + offsetY, 156, 159 + offsetY);
  ctx.fillStyle = PART4_GRADIENT;
  ctx.fill();
  ctx.stroke();

  //Border
  ctx.beginPath();
  ctx.moveTo(48, 93 + offsetY);
  ctx.lineTo(48, 14 + offsetY);
  ctx.bezierCurveTo(48, 10 + offsetY, 51, 7 + offsetY, 55, 7 + offsetY);
  ctx.lineTo(89, 7 + offsetY);
  ctx.bezierCurveTo(93, 7 + offsetY, 96, 10 + offsetY, 95, 12 + offsetY);
  ctx.bezierCurveTo(125, -6 + offsetY, 155, 19 + offsetY, 170, 16 + offsetY);
  ctx.bezierCurveTo(171, 11 + offsetY, 173, 6 + offsetY, 180, 7 + offsetY);
  ctx.lineTo(210, 7 + offsetY);
  ctx.bezierCurveTo(214, 7 + offsetY, 217, 10 + offsetY, 216, 16 + offsetY);
  ctx.bezierCurveTo(218, 81 + offsetY, 137, 105 + offsetY, 159, 167 + offsetY);
  ctx.bezierCurveTo(162, 173 + offsetY, 158, 177 + offsetY, 152, 177 + offsetY);
  ctx.lineTo(85, 177 + offsetY);
  ctx.quadraticCurveTo(80, 177 + offsetY, 81, 171 + offsetY);
  ctx.bezierCurveTo(78, 136 + offsetY, 93, 97 + offsetY, 129, 66 + offsetY);
  ctx.bezierCurveTo(116, 58 + offsetY, 88, 55 + offsetY, 93, 90 + offsetY);
  ctx.quadraticCurveTo(92, 95 + offsetY, 86, 96 + offsetY);
  ctx.lineTo(53, 96 + offsetY);
  ctx.quadraticCurveTo(48, 96 + offsetY, 48, 93 + offsetY);

  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();

  //Red part
  ctx.beginPath();
  ctx.moveTo(54, 90 + offsetY);
  ctx.lineTo(54, 14 + offsetY);
  ctx.lineTo(90, 14 + offsetY);
  ctx.lineTo(90, 23 + offsetY);
  ctx.bezierCurveTo(125, -7 + offsetY, 176, 44 + offsetY, 178, 14 + offsetY);
  ctx.lineTo(210, 14 + offsetY);
  ctx.bezierCurveTo(215, 75 + offsetY, 135, 96 + offsetY, 152, 167 + offsetY);
  ctx.bezierCurveTo(153, 172 + offsetY, 153, 172 + offsetY, 149, 172 + offsetY);
  ctx.lineTo(89, 172 + offsetY);
  ctx.bezierCurveTo(81, 164 + offsetY, 90, 97 + offsetY, 142, 64 + offsetY);
  ctx.bezierCurveTo(145, 60 + offsetY, 142, 57 + offsetY, 135, 58 + offsetY);
  ctx.bezierCurveTo(126, 62 + offsetY, 117, 52 + offsetY, 103, 56 + offsetY);
  ctx.bezierCurveTo(90, 57 + offsetY, 85, 75 + offsetY, 87, 90 + offsetY);
  ctx.lineTo(54, 90 + offsetY);

  ctx.fillStyle = RED_GRADIENT;
  ctx.strokeStyle = "#a61111";
  ctx.fill();
  ctx.stroke();
}

drawSeven(ctxSe, 0);
