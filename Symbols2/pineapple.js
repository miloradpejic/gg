function drawPineapple(ctx, offsetY = 0) {
  let gradient = ctx.createRadialGradient(190, 170 + offsetY, 10, 255, 190 + offsetY, 160);
  gradient.addColorStop(0.35, "#c05500");
  gradient.addColorStop(0.18, "#7e302b");
  gradient.addColorStop(0.95, "#df9328");
  gradient.addColorStop(1, "  #df9328");

  ctx.strokeStyle = " #662e00";
  ctx.lineWidth = 1.1;
  ctx.save();
  
  const centerX = 130;
  const centerY = offsetY + 75;
  ctx.translate(centerX+22, centerY-70);
  ctx.rotate(15 * Math.PI / 180);
  ctx.translate(-centerX, -centerY);


  ctx.scale(1.1,1.08);
  
  ctx.beginPath();
  ctx.moveTo(84, 157 + offsetY);
  ctx.quadraticCurveTo(99, 152 + offsetY, 105, 154 + offsetY);
  ctx.quadraticCurveTo(94, 145 + offsetY, 95, 132 + offsetY);
  ctx.quadraticCurveTo(81, 131 + offsetY, 71, 137 + offsetY);
  ctx.quadraticCurveTo(78, 157 + offsetY, 78, 157 + offsetY);
  ctx.lineTo(83, 155 + offsetY);
  ctx.lineTo(83, 158 + offsetY);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(88, 182 + offsetY);
  ctx.quadraticCurveTo(66, 171 + offsetY, 62, 160 + offsetY);
  ctx.stroke();
  ctx.bezierCurveTo(82, 157 + offsetY, 82, 157 + offsetY, 82, 155 + offsetY);
  ctx.quadraticCurveTo(93, 173 + offsetY, 93, 178 + offsetY);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(80, 83 + offsetY);
  ctx.quadraticCurveTo(90, 76 + offsetY, 102, 79 + offsetY);
  ctx.quadraticCurveTo(106, 106 + offsetY, 109, 99 + offsetY);
  ctx.quadraticCurveTo(85, 104 + offsetY, 83, 105 + offsetY);
  ctx.quadraticCurveTo(78, 84 + offsetY, 80, 82 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(132, 191 + offsetY);
  ctx.quadraticCurveTo(107, 196 + offsetY, 88, 182 + offsetY);
  ctx.stroke();
  ctx.bezierCurveTo(94, 174 + offsetY, 119, 174 + offsetY, 117, 171 + offsetY);
  ctx.quadraticCurveTo(119, 174 + offsetY, 117, 171 + offsetY);
  ctx.quadraticCurveTo(123, 174 + offsetY, 132, 191 + offsetY);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(96, 133 + offsetY);
  ctx.quadraticCurveTo(80, 117 + offsetY, 85, 104 + offsetY);
  ctx.bezierCurveTo(90, 103 + offsetY, 100, 102 + offsetY, 107, 98 + offsetY);
  ctx.bezierCurveTo(117, 123 + offsetY, 118, 118 + offsetY, 117, 123 + offsetY);
  ctx.quadraticCurveTo(102, 125 + offsetY, 91, 133 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(64, 110 + offsetY);
  ctx.bezierCurveTo(71, 102 + offsetY, 84, 102 + offsetY, 86, 105 + offsetY);
  ctx.lineTo(94, 133 + offsetY);
  ctx.quadraticCurveTo(80, 129 + offsetY, 71, 138 + offsetY);
  ctx.quadraticCurveTo(69, 134 + offsetY, 67, 134 + offsetY);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(63, 160 + offsetY);
  ctx.quadraticCurveTo(54, 144 + offsetY, 56, 135 + offsetY);
  ctx.stroke();
  ctx.bezierCurveTo(62, 134 + offsetY, 70, 134 + offsetY, 73, 136 + offsetY);
  ctx.quadraticCurveTo(72, 147 + offsetY, 79, 159 + offsetY);
  ctx.quadraticCurveTo(70, 161 + offsetY, 63, 160 + offsetY);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(57, 135 + offsetY);
  ctx.quadraticCurveTo(59, 120 + offsetY, 64, 108 + offsetY);
  ctx.stroke();
  ctx.quadraticCurveTo(66, 123 + offsetY, 67, 134 + offsetY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(83, 157 + offsetY);
  ctx.quadraticCurveTo(93, 173 + offsetY, 93, 178 + offsetY);
  ctx.quadraticCurveTo(116, 172 + offsetY, 116, 172 + offsetY);
  ctx.quadraticCurveTo(106, 154 + offsetY, 104, 153 + offsetY);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(132, 147 + offsetY);
  ctx.quadraticCurveTo(146, 145 + offsetY, 156, 139 + offsetY);
  ctx.quadraticCurveTo(142, 124 + offsetY, 144, 115 + offsetY);
  ctx.bezierCurveTo(125, 120 + offsetY, 127, 120 + offsetY, 120, 125 + offsetY);
  ctx.quadraticCurveTo(128, 146 + offsetY, 128, 146 + offsetY);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(120, 174 + offsetY);
  ctx.quadraticCurveTo(134, 171 + offsetY, 143, 165 + offsetY);
  ctx.quadraticCurveTo(130, 145 + offsetY, 130, 147 + offsetY);
  ctx.quadraticCurveTo(115, 154 + offsetY, 105.5, 154 + offsetY);
  ctx.lineTo(115, 171 + offsetY);
  ctx.lineTo(118, 171 + offsetY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(130, 147 + offsetY);
  ctx.quadraticCurveTo(111, 154 + offsetY, 102, 154 + offsetY);
  ctx.quadraticCurveTo(93, 138 + offsetY, 94, 132 + offsetY);
  ctx.quadraticCurveTo(100, 125 + offsetY, 119, 123 + offsetY);
  ctx.quadraticCurveTo(126, 142 + offsetY, 129, 144 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(132, 190 + offsetY);
  ctx.quadraticCurveTo(144, 185 + offsetY, 152, 177 + offsetY);
  ctx.quadraticCurveTo(151, 165 + offsetY, 143, 165 + offsetY);
  ctx.quadraticCurveTo(132, 172 + offsetY, 120, 173 + offsetY);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(151, 178 + offsetY);
  ctx.quadraticCurveTo(163, 168 + offsetY, 166, 149 + offsetY);
  ctx.quadraticCurveTo(156, 164 + offsetY, 146, 166 + offsetY);
  ctx.quadraticCurveTo(151, 169 + offsetY, 151, 172 + offsetY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(164, 157 + offsetY);
  ctx.lineTo(164, 151 + offsetY);
  ctx.stroke();
  ctx.lineTo(155, 140 + offsetY);
  ctx.quadraticCurveTo(141, 144 + offsetY, 131, 147 + offsetY);
  ctx.lineTo(142, 164 + offsetY);
  ctx.lineTo(147, 166 + offsetY);
  ctx.quadraticCurveTo(162, 160 + offsetY, 164, 153 + offsetY);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(164, 152 + offsetY);
  ctx.quadraticCurveTo(174, 138 + offsetY, 172, 130 + offsetY);
  ctx.quadraticCurveTo(167, 135 + offsetY, 157, 142 + offsetY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(120, 124 + offsetY);
  ctx.bezierCurveTo(125, 120 + offsetY, 127, 120 + offsetY, 142, 120 + offsetY);
  ctx.quadraticCurveTo(133, 105 + offsetY, 130, 96 + offsetY);
  ctx.quadraticCurveTo(105, 103 + offsetY, 110, 103 + offsetY);
  ctx.quadraticCurveTo(112, 113 + offsetY, 116, 122 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(109, 102 + offsetY);
  ctx.quadraticCurveTo(123, 98 + offsetY, 130, 98 + offsetY);
  ctx.quadraticCurveTo(126, 74 + offsetY, 126, 74 + offsetY);
  ctx.quadraticCurveTo(111, 75 + offsetY, 102, 80 + offsetY);
  ctx.quadraticCurveTo(104, 101 + offsetY, 110, 103 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(65, 108 + offsetY);
  ctx.quadraticCurveTo(71, 93 + offsetY, 80, 82 + offsetY);
  ctx.quadraticCurveTo(81, 99 + offsetY, 83, 103 + offsetY);
  ctx.quadraticCurveTo(75, 103 + offsetY, 68, 106 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(80, 83 + offsetY);
  ctx.quadraticCurveTo(89, 73 + offsetY, 102, 67 + offsetY);
  ctx.quadraticCurveTo(99, 78 + offsetY, 102, 78 + offsetY);
  ctx.quadraticCurveTo(83, 81 + offsetY, 81, 83 + offsetY);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(102, 80 + offsetY);
  ctx.quadraticCurveTo(110, 74 + offsetY, 122, 74 + offsetY);
  ctx.quadraticCurveTo(123, 63 + offsetY, 122, 58 + offsetY);
  ctx.quadraticCurveTo(111, 60 + offsetY, 99, 67 + offsetY);
  ctx.quadraticCurveTo(100, 78 + offsetY, 101, 78 + offsetY);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(126, 74 + offsetY);
  ctx.quadraticCurveTo(143, 70 + offsetY, 143, 70 + offsetY);
  ctx.lineTo(134, 58 + offsetY);
  ctx.quadraticCurveTo(122, 58 + offsetY, 122, 59 + offsetY);
  ctx.quadraticCurveTo(119, 65 + offsetY, 124, 75 + offsetY);
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(123, 74 + offsetY);
  ctx.quadraticCurveTo(143, 70 + offsetY, 145, 68 + offsetY);
  ctx.quadraticCurveTo(151, 82 + offsetY, 152, 91 + offsetY);
  ctx.quadraticCurveTo(134, 95 + offsetY, 131, 99 + offsetY);
  ctx.quadraticCurveTo(125, 90 + offsetY, 123, 74 + offsetY);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(131, 99 + offsetY);
  ctx.quadraticCurveTo(141, 92 + offsetY, 154, 90 + offsetY);
  ctx.quadraticCurveTo(160, 105 + offsetY, 163, 113 + offsetY);
  ctx.quadraticCurveTo(152, 113 + offsetY, 143, 120 + offsetY);
  ctx.quadraticCurveTo(134, 110 + offsetY, 132, 98 + offsetY);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(142, 119 + offsetY);
  ctx.quadraticCurveTo(147, 130 + offsetY, 156, 142 + offsetY);
  ctx.quadraticCurveTo(164, 139 + offsetY, 171, 132 + offsetY);
  ctx.quadraticCurveTo(165, 123 + offsetY, 165, 112 + offsetY);
  ctx.quadraticCurveTo(154, 112 + offsetY, 142, 119 + offsetY);
  ctx.stroke();

  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(172, 132 + offsetY);
  ctx.quadraticCurveTo(177, 120 + offsetY, 176, 108 + offsetY);
  ctx.stroke();
  ctx.quadraticCurveTo(165, 114 + offsetY, 165, 114 + offsetY);
  ctx.quadraticCurveTo(165, 124 + offsetY, 172, 132 + offsetY);
  ctx.stroke();

  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(165, 114 + offsetY);
  ctx.quadraticCurveTo(169, 110 + offsetY, 175, 109 + offsetY);
  ctx.quadraticCurveTo(175, 96 + offsetY, 173, 85 + offsetY);
  ctx.quadraticCurveTo(158, 89 + offsetY, 154, 91 + offsetY);
  ctx.quadraticCurveTo(161, 102 + offsetY, 162, 112 + offsetY);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(151, 90 + offsetY);
  ctx.quadraticCurveTo(150, 80 + offsetY, 146, 72 + offsetY);
  ctx.quadraticCurveTo(171, 76 + offsetY, 171, 76 + offsetY);
  ctx.lineTo(172, 86 + offsetY);
  ctx.quadraticCurveTo(163, 87 + offsetY, 154, 91 + offsetY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // d
  gradient = ctx.createLinearGradient(142, 78 + offsetY, 184, 0 + offsetY);
  gradient.addColorStop(0.2, "#0d6009");
  gradient.addColorStop(0.6, "#65d30a");
  gradient.addColorStop(1, "#308c0d");
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "#014f00";
  ctx.beginPath();
  ctx.moveTo(171, 76 + offsetY);
  ctx.lineTo(146, 72 + offsetY);
  ctx.lineTo(144, 69 + offsetY);
  ctx.lineTo(142, 70 + offsetY);
  ctx.lineTo(134, 57 + offsetY);
  ctx.quadraticCurveTo(135, 34 + offsetY, 116, 8 + offsetY);
  ctx.quadraticCurveTo(132, 10 + offsetY, 140, 24 + offsetY);

  //prva
  ctx.lineTo(142, 2 + offsetY);
  ctx.quadraticCurveTo(153, 12 + offsetY, 152, 14 + offsetY);
  ctx.lineTo(159, 4 + offsetY);
  ctx.lineTo(167, 12 + offsetY);
  ctx.quadraticCurveTo(167, 10 + offsetY, 179, 4 + offsetY);
  ctx.lineTo(177, 12 + offsetY);
  ctx.lineTo(196, 4 + offsetY);
  ctx.quadraticCurveTo(189, 13 + offsetY, 188, 22 + offsetY);
  ctx.quadraticCurveTo(195, 19 + offsetY, 205, 19 + offsetY);
  ctx.quadraticCurveTo(195, 26 + offsetY, 192, 32 + offsetY);
  ctx.quadraticCurveTo(210, 27 + offsetY, 226, 32 + offsetY);
  ctx.quadraticCurveTo(205, 39 + offsetY, 192, 49 + offsetY);
  ctx.quadraticCurveTo(203, 48 + offsetY, 215, 55 + offsetY);
  ctx.quadraticCurveTo(184, 59 + offsetY, 169, 75 + offsetY);
  ctx.stroke();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(140, 24 + offsetY);
  ctx.bezierCurveTo(150, 36 + offsetY, 154, 44 + offsetY, 158, 58 + offsetY);
  ctx.moveTo(153, 14 + offsetY);
  ctx.bezierCurveTo(158, 22 + offsetY, 162, 46 + offsetY, 162, 46 + offsetY);
  ctx.moveTo(156, 22 + offsetY);
  ctx.quadraticCurveTo(166, 11 + offsetY, 179, 4 + offsetY);
  ctx.quadraticCurveTo(175, 13 + offsetY, 177, 26 + offsetY);
  ctx.moveTo(188, 22 + offsetY);
  ctx.quadraticCurveTo(179, 22 + offsetY, 160, 39 + offsetY);
  ctx.moveTo(192, 32 + offsetY);
  ctx.bezierCurveTo(176, 35 + offsetY, 164, 43 + offsetY, 156, 52 + offsetY);
  ctx.moveTo(192, 49 + offsetY);
  ctx.bezierCurveTo(162, 57 + offsetY, 174, 52 + offsetY, 151, 62 + offsetY);
  ctx.stroke();
  ctx.restore();
}
