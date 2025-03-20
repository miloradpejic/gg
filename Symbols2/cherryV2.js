let cherryV2Canvas = document.getElementById("cherry-v2-canvas");
cherryV2Canvas.width = 260;
cherryV2Canvas.height = 195;
let ctx8 = cherryV2Canvas.getContext("2d");

function drawCherriesV2(ctx, offsetY = 0) {
  const MIDDLE_X = cherryV2Canvas.width / 2;
  const MIDDLE_Y = cherryV2Canvas.height / 2;


  LEAF_GRADIENT.addColorStop(0, "rgba(255, 255, 255, 0.7)");
  LEAF_GRADIENT.addColorStop(0.2, "#02b002");
  LEAF_GRADIENT.addColorStop(1, "#01360b");

sadada

  LEFT_CHERRY_GRADIENT.addColorStop(0, "rgba(242, 136, 157, 1)");
  LEFT_CHERRY_GRADIENT.addColorStop(0.5, "#D2042D");
  LEFT_CHERRY_GRADIENT.addColorStop(1, "#ab0223");

  const RIGHT_CHERRY_GRADIENT = ctx.createRadialGradient(
    120,
    132 + offsetY,
    1,
    120,
    135 + offsetY,
    50
  );

  RIGHT_CHERRY_GRADIENT.addColorStop(0, "rgba(245, 154, 172, 1)");
  RIGHT_CHERRY_GRADIENT.addColorStop(0.5, "#D2042D");
  RIGHT_CHERRY_GRADIENT.addColorStop(1, "#ab0223");

  const STEM_GRADIENT = ctx.createLinearGradient(
    MIDDLE_X + 74,
    MIDDLE_Y - 96 + offsetY,
    MIDDLE_X - 10,
    MIDDLE_Y + 12 + offsetY
  );
  STEM_GRADIENT.addColorStop(0, "#01400d");
  STEM_GRADIENT.addColorStop(0.97, "#02b002");
  STEM_GRADIENT.addColorStop(1, "rgba(255, 255, 255, 0.7)");

  ctx.strokeStyle = "rgba(0,0,0,0.4)";
  ctx.lineWidth = 2;

  // Cherries

  // left cherry
  ctx.beginPath();
  ctx.moveTo(MIDDLE_X, MIDDLE_Y + 5 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X,
    MIDDLE_Y + 2 + offsetY,
    MIDDLE_X - 5,
    MIDDLE_Y - 25 + offsetY,
    MIDDLE_X - 50,
    MIDDLE_Y - 35 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 50,
    MIDDLE_Y - 34 + offsetY,
    MIDDLE_X - 88,
    MIDDLE_Y - 45 + offsetY,
    MIDDLE_X - 96,
    MIDDLE_Y + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 96,
    MIDDLE_Y - 4 + offsetY,
    MIDDLE_X - 105,
    MIDDLE_Y + 56 + offsetY,
    MIDDLE_X - 36,
    MIDDLE_Y + 53 + offsetY
  );
  ctx.fillStyle = LEFT_CHERRY_GRADIENT;
  ctx.fill();
  ctx.strokeStyle = "#82011c";
  ctx.stroke();

  // right cherry
  ctx.beginPath();
  ctx.moveTo(MIDDLE_X + 15, MIDDLE_Y + 6 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X + 15,
    MIDDLE_Y + 6 + offsetY,
    MIDDLE_X - 10,
    MIDDLE_Y + offsetY,
    MIDDLE_X - 28,
    MIDDLE_Y + 21 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 28,
    MIDDLE_Y + 21 + offsetY,
    MIDDLE_X - 45,
    MIDDLE_Y + 46 + offsetY,
    MIDDLE_X - 29,
    MIDDLE_Y + 67 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 19,
    MIDDLE_Y + 83 + offsetY,
    MIDDLE_X - 3,
    MIDDLE_Y + 97 + offsetY,
    MIDDLE_X + 38,
    MIDDLE_Y + 90 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 59,
    MIDDLE_Y + 83 + offsetY,
    MIDDLE_X + 72,
    MIDDLE_Y + 67 + offsetY,
    MIDDLE_X + 73,
    MIDDLE_Y + 45 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 72,
    MIDDLE_Y + 47 + offsetY,
    MIDDLE_X + 83,
    MIDDLE_Y + 2 + offsetY,
    MIDDLE_X + 15,
    MIDDLE_Y + 6 + offsetY
  );
  ctx.fillStyle = RIGHT_CHERRY_GRADIENT;
  ctx.fill();
  ctx.stroke();

  // stem
  ctx.beginPath();
  ctx.strokeStyle = "#046316";
  ctx.lineWidth = 2;
  ctx.moveTo(MIDDLE_X + 75, MIDDLE_Y - 85 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X + 75,
    MIDDLE_Y - 85 + offsetY,
    MIDDLE_X,
    MIDDLE_Y - 85 + offsetY,
    MIDDLE_X - 30,
    MIDDLE_Y - 27 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 30,
    MIDDLE_Y - 27 + offsetY,
    MIDDLE_X - 34,
    MIDDLE_Y - 14 + offsetY,
    MIDDLE_X - 46,
    MIDDLE_Y - 20 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 46,
    MIDDLE_Y - 20 + offsetY,
    MIDDLE_X - 43,
    MIDDLE_Y - 7 + offsetY,
    MIDDLE_X - 23,
    MIDDLE_Y - 6 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 23,
    MIDDLE_Y - 6 + offsetY,
    MIDDLE_X - 28,
    MIDDLE_Y - 18 + offsetY,
    MIDDLE_X - 21,
    MIDDLE_Y - 28 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X - 21,
    MIDDLE_Y - 28 + offsetY,
    MIDDLE_X + 9,
    MIDDLE_Y - 70 + offsetY,
    MIDDLE_X + 57,
    MIDDLE_Y - 76 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 57,
    MIDDLE_Y - 76 + offsetY,
    MIDDLE_X + 20,
    MIDDLE_Y - 35 + offsetY,
    MIDDLE_X + 18,
    MIDDLE_Y - 5 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 18,
    MIDDLE_Y - 5 + offsetY,
    MIDDLE_X + 16,
    MIDDLE_Y + 15 + offsetY,
    MIDDLE_X + 4,
    MIDDLE_Y + 17 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 4,
    MIDDLE_Y + 17 + offsetY,
    MIDDLE_X + 21,
    MIDDLE_Y + 26 + offsetY,
    MIDDLE_X + 33,
    MIDDLE_Y + 20 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 33,
    MIDDLE_Y + 20 + offsetY,
    MIDDLE_X + 18,
    MIDDLE_Y + 12 + offsetY,
    MIDDLE_X + 31,
    MIDDLE_Y - 15 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 31,
    MIDDLE_Y - 15 + offsetY,
    MIDDLE_X + 42,
    MIDDLE_Y - 57 + offsetY,
    MIDDLE_X + 75,
    MIDDLE_Y - 78 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 75,
    MIDDLE_Y - 78 + offsetY,
    MIDDLE_X + 75,
    MIDDLE_Y - 85 + offsetY,
    MIDDLE_X + 75,
    MIDDLE_Y - 85 + offsetY
  );
  ctx.fillStyle = STEM_GRADIENT;
  ctx.fill();
  ctx.stroke();
  // leaf
  ctx.beginPath();
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.moveTo(MIDDLE_X + 74, MIDDLE_Y - 84 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X + 74,
    MIDDLE_Y - 84 + offsetY,
    MIDDLE_X + 130,
    MIDDLE_Y - 40 + offsetY,
    MIDDLE_X + 102,
    MIDDLE_Y + 24 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 102,
    MIDDLE_Y + 24 + offsetY,
    MIDDLE_X + 70,
    MIDDLE_Y + 20 + offsetY,
    MIDDLE_X + 54,
    MIDDLE_Y - 3 + offsetY
  );
  ctx.bezierCurveTo(
    MIDDLE_X + 54,
    MIDDLE_Y - 3 + offsetY,
    MIDDLE_X + 29,
    MIDDLE_Y - 40 + offsetY,
    MIDDLE_X + 74,
    MIDDLE_Y - 84 + offsetY
  );
  ctx.fillStyle = LEAF_GRADIENT;
  ctx.fill();
  ctx.moveTo(MIDDLE_X + 74, MIDDLE_Y - 84 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X + 74,
    MIDDLE_Y - 84 + offsetY,
    MIDDLE_X + 49,
    MIDDLE_Y - 45 + offsetY,
    MIDDLE_X + 98,
    MIDDLE_Y + 18 + offsetY
  );
  ctx.strokeStyle = "#015c12";
  ctx.stroke();

  // cherry details
  ctx.beginPath();
  ctx.moveTo(MIDDLE_X + 49, MIDDLE_Y + 21 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X + 49,
    MIDDLE_Y + 21 + offsetY,
    MIDDLE_X + 21,
    MIDDLE_Y + 38 + offsetY,
    MIDDLE_X - 7,
    MIDDLE_Y + 20 + offsetY
  );
  ctx.strokeStyle = "rgba(0,0,0,0.21)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(MIDDLE_X - 49, MIDDLE_Y - 20 + offsetY);
  ctx.bezierCurveTo(
    MIDDLE_X - 49,
    MIDDLE_Y - 20 + offsetY,
    MIDDLE_X - 44,
    MIDDLE_Y + 5 + offsetY,
    MIDDLE_X - 18,
    MIDDLE_Y - 3 + offsetY
  );
  ctx.stroke();
  ctx.closePath();
}
drawCherriesV2(ctx8);
