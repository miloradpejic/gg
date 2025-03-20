let watermelonCanvas = document.getElementById("watermelon-canvas");
let ctxW = watermelonCanvas.getContext("2d");
watermelonCanvas.width = 260;
watermelonCanvas.height = 195;
let points;
watermelonCanvas.addEventListener("click", function (event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  console.log("Clicked at coordinates (x, y):", x, y);
});
function drawCurveThroughPoints(ctx, points) {
  ctx.moveTo(points[0].x, points[0].y);
  for (var i = 1; i < points.length - 2; i++) {
    var xc = (points[i].x + points[i + 1].x) / 2;
    var yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.quadraticCurveTo(
    points[i].x,
    points[i].y,
    points[i + 1].x,
    points[i + 1].y
  );
  //ctx.stroke();
}
function drawSeed(ctx, x, y, angle, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(
    -3 * scale,
    -6 * scale,
    -5 * scale,
    -10 * scale,
    0,
    -12 * scale
  );
  ctx.bezierCurveTo(5 * scale, -10 * scale, 3 * scale, -6 * scale, 0, 0);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // White dots inside seed
  ctx.beginPath();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
  ctx.arc(0, -10 * scale, scale, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}
function drawWatermelon(ctx, offsetY) {
  //Gradient
  let x = 90;
  let y = 100 + offsetY;
  let radius = 50;

  const WHITE_GRADIENT = ctx.createRadialGradient(x, y, 0, x, y, radius);
  WHITE_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.5)");
  WHITE_GRADIENT.addColorStop(1, "rgba(255, 255, 255, 0)");

  // Green part
  ctx.beginPath();
  ctx.moveTo(98, 14 + offsetY);
  ctx.bezierCurveTo(25, 96 + offsetY, 50, 145 + offsetY, 67, 169 + offsetY);
  ctx.bezierCurveTo(115, 210 + offsetY, 196, 180 + offsetY, 232, 120 + offsetY);
  ctx.ellipse(
    165,
    67 + offsetY,
    41,
    85,
    -Math.PI / 3.5,
    Math.PI / 2,
    (Math.PI * 3) / 2,
    false
  );
  ctx.fillStyle = "#046e11";
  ctx.strokeStyle = "#014515";
  ctx.fill();
  ctx.stroke();

  // Light green curves for the green part
  ctx.beginPath();

  points = [
    { x: 96, y: 40 + offsetY },
    { x: 80, y: 49 + offsetY },
    { x: 85, y: 68 + offsetY },
    { x: 75, y: 78 + offsetY },
    { x: 60, y: 100 + offsetY },
    { x: 75, y: 133 + offsetY },
    { x: 60, y: 145 + offsetY },
    { x: 69, y: 155 + offsetY },
    { x: 67, y: 170 + offsetY },
  ];
  drawCurveThroughPoints(ctx, points);

  points = [
    { x: 67, y: 170 + offsetY },
    { x: 85, y: 155 + offsetY },
    { x: 85, y: 145 + offsetY },
    { x: 90, y: 133 + offsetY },
    { x: 83, y: 121 + offsetY },
    { x: 94, y: 104 + offsetY },
    { x: 92, y: 85 + offsetY },
    { x: 98, y: 78 + offsetY },
    { x: 111, y: 69 + offsetY },
  ];
  drawCurveThroughPoints(ctx, points);
  ctx.lineTo(96, 40 + offsetY);
  ctx.fillStyle = "#46ba2b";
  ctx.fill();

  points = [
    { x: 132, y: 94 + offsetY },
    { x: 131, y: 113 + offsetY },
    { x: 112, y: 118 + offsetY },
    { x: 113, y: 137 + offsetY },
    { x: 95, y: 153 + offsetY },
    { x: 100, y: 162 + offsetY },
    { x: 67, y: 170 + offsetY },
  ];
  drawCurveThroughPoints(ctx, points);

  points = [
    { x: 67, y: 170 + offsetY },
    { x: 110, y: 169 + offsetY },
    { x: 108, y: 160 + offsetY },
    { x: 136, y: 154 + offsetY },
    { x: 134, y: 135 + offsetY },
    { x: 160, y: 130 + offsetY },
    { x: 161, y: 115 + offsetY },
  ];
  drawCurveThroughPoints(ctx, points);
  ctx.lineTo(132, 94 + offsetY);
  ctx.fill();

  points = [
    { x: 196, y: 128 + offsetY },
    { x: 166, y: 141 + offsetY },
    { x: 175, y: 152 + offsetY },
    { x: 144, y: 160 + offsetY },
    { x: 143, y: 169 + offsetY },
    { x: 110, y: 180 + offsetY },
    { x: 67, y: 170 + offsetY },
  ];
  drawCurveThroughPoints(ctx, points);

  points = [
    { x: 67, y: 170 + offsetY },
    { x: 116, y: 186 + offsetY },
    { x: 143, y: 181 + offsetY },
    { x: 156, y: 169 + offsetY },
    { x: 171, y: 167 + offsetY },
    { x: 200, y: 155 + offsetY },
    { x: 200, y: 140 + offsetY },
    { x: 221, y: 127 + offsetY },
  ];
  drawCurveThroughPoints(ctx, points);
  ctx.lineTo(196, 128 + offsetY);
  ctx.fill();

  // Outter border
  ctx.beginPath();
  ctx.ellipse(165, 67 + offsetY, 48, 85, -Math.PI / 3.5, 0, 2 * Math.PI);
  ctx.fillStyle = "#55C960";
  ctx.fill();
  ctx.strokeStyle = "darkgreen";
  ctx.stroke();
  ctx.closePath();

  // White border
  ctx.beginPath();
  ctx.ellipse(166, 65 + offsetY, 46, 82, -Math.PI / 3.5, 0, 2 * Math.PI);

  // Set the shadow properties
  ctx.shadowColor = "white";
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = "white";
  ctx.fill();

  // Reset the shadow properties so they don't affect other elements
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Inner border (red part)
  ctx.beginPath();
  ctx.ellipse(166, 65 + offsetY, 42, 79, -Math.PI / 3.5, 0, 2 * Math.PI);
  ctx.fillStyle = "#D2042D";
  ctx.fill();

  // Central light red part
  ctx.beginPath();
  ctx.moveTo(145, 47 + offsetY);
  ctx.bezierCurveTo(155, 44 + offsetY, 190, 61 + offsetY, 193, 86 + offsetY);
  ctx.moveTo(193, 86 + offsetY);
  ctx.bezierCurveTo(185, 95 + offsetY, 132, 52 + offsetY, 145, 47 + offsetY);
  ctx.fillStyle = "#F0224B";
  ctx.fill();
  ctx.fillStyle = "black";

  // Seeds
  drawSeed(ctx, 132, 34 + offsetY, -0.8, 0.9);
  drawSeed(ctx, 148, 37 + offsetY, -0.1, 0.8);
  drawSeed(ctx, 164, 37 + offsetY, 0.35, 0.75);
  drawSeed(ctx, 180, 49 + offsetY, 0.7, 0.7);
  drawSeed(ctx, 196, 61 + offsetY, 1.2, 0.7);
  drawSeed(ctx, 201, 77 + offsetY, 1.5, 0.75);
  drawSeed(ctx, 207, 95 + offsetY, 2, 0.85);
  drawSeed(ctx, 190, 96 + offsetY, 2.8, 0.95);
  drawSeed(ctx, 173, 95 + offsetY, 3.4);
  drawSeed(ctx, 157, 82 + offsetY, 3.9);
  drawSeed(ctx, 140, 70 + offsetY, 4.2);
  drawSeed(ctx, 133, 52 + offsetY, 4.7, 0.95);

  ctx.fillStyle = WHITE_GRADIENT;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

drawWatermelon(ctxW, 0);
