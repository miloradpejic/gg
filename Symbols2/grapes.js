let grapeCanvas = document.getElementById("grape-canvas");
let context = grapeCanvas.getContext("2d");
const GRAPE_WIDTH = 260;
const GRAPE_HEIGHT = 195;
grapeCanvas.width = GRAPE_WIDTH;
grapeCanvas.height = GRAPE_HEIGHT;
grapeCanvas.style.width = GRAPE_WIDTH + "px";
grapeCanvas.style.height = GRAPE_HEIGHT + "px";





function drawGrapes(context, offSetY) {
  ctx.save();
      let grapesPosition = [
        { x: 51.1, y: offSetY + 169.4 },
        { x: 86.8, y: offSetY + 167.3 },
        { x: 58.1, y: offSetY + 139.3 },
        { x: 66.5, y: offSetY + 107.1 },
        { x: 89.6, y: offSetY + 134.4 },
        { x: 119, y: offSetY + 156.1 },
        { x: 149.1, y: offSetY + 150 },
        { x: 80.5, y: offSetY + 78.4 },
        { x: 177.8, y: offSetY + 95.2 },
        { x: 149.8, y: offSetY + 77 },
        { x: 103.6, y: offSetY + 104.3 },
        { x: 178.5, y: offSetY + 133 },
        { x: 131.6, y: offSetY + 49.7 },
        { x: 93.8, y: offSetY + 47.6 },
        { x: 121.8, y: offSetY + 121.1 },
        { x: 157.5, y: offSetY + 118.3 },
        { x: 107.8, y: offSetY + 67.9 },
        { x: 131.6, y: offSetY + 91.7 }
        ];
     
  
  
    context.beginPath();
    var gradient = context.createLinearGradient(
      140.7,
      offSetY,
      256.9,
      offSetY+77
    );
  
    gradient.addColorStop(0.01, "black");
    gradient.addColorStop(0.5, "rgb(70,38,9)");
    gradient.addColorStop(1, "darkgreen");
  
    context.moveTo(149.1, offSetY+37.1);
    context.bezierCurveTo(
      196,
      offSetY+14,
      199.5,
      offSetY+32.2,
      217,
      offSetY+3.5
    );
    context.arcTo(
      217,
      offSetY + 2.8,
      217,
      offSetY - 7,
      14
      
    );
    context.quadraticCurveTo(
      227.5,
      offSetY + 4.9,
      228.9,
      offSetY + 9.8
      
    );
    context.bezierCurveTo(
      219.1,
      offSetY + 21,
      199.5,
      offSetY + 25.9,
      180.6,
      offSetY + 31.5
    );
    context.bezierCurveTo(
      171.5,
      offSetY + 46.2,
      180.6,
      offSetY + 62.3,
      181.3,
      offSetY + 63
    );
    context.quadraticCurveTo(
      183.4,
      offSetY+78.4,
      182.7,
      offSetY+80.5
    );
    context.lineTo(177.8, offSetY+77.7);
    context.bezierCurveTo(
      177.8,
      offSetY+73.5,
      177.8,
      offSetY+68.6,
      174.3,
      offSetY+60.9
    );
    context.lineTo(160.3, offSetY+63.7);
    context.lineTo(158.55, offSetY+58.1);
    context.lineTo(172.55, offSetY+56.7);
    context.quadraticCurveTo(
      169.4,
      offSetY+44.1,
      172.9,
      offSetY+32.2
    );
    context.lineTo(147.35, offSetY+43.4);
    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
  
    context.beginPath();
    context.moveTo(196.7, offSetY+27.3);
    context.quadraticCurveTo(
      199.5,
      offSetY+36.4,
     207.2,
      offSetY+44.1
    );
    context.lineTo(209.3, offSetY+44.1);
    context.lineTo(210.35, offSetY+41.3);
    context.quadraticCurveTo(
      199.5,
      offSetY+36.4,
      200.2,
      offSetY+25.9
    );
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
  
    gradient = context.createRadialGradient(
      214.2,
      offSetY+47.6,
      10.5,
      249.2,
      offSetY+85.4,
      70
    );
    gradient.addColorStop(0.1, " #6B8E23");
    gradient.addColorStop(0.2, "#6B8E23");
  
    context.beginPath();
    context.moveTo(209, offSetY+44.1);
    context.quadraticCurveTo(
      198.8,
      offSetY+49,
      198.8,
      offSetY+63.7
    );
    context.lineTo(204.4, offSetY+59.5);
    context.quadraticCurveTo(
      206.5,
      offSetY+74.2,
      221.2,
      offSetY+87.5
    );
    context.bezierCurveTo(
      218.4,
      offSetY+77,
     216.3,
      offSetY+71.4,
      217.7,
      offSetY+68.6
    );
    context.quadraticCurveTo(
      226.1,
      offSetY+77,
      247.1,
      offSetY+81.2
    );
    context.quadraticCurveTo(
      242.9,
      offSetY+58.8,
      233.8,
      offSetY+53.2
    );
    context.quadraticCurveTo(
      247.3,
      offSetY+51.1,
      253.4,
      offSetY+56.7
    );
    context.quadraticCurveTo(
      240.8,
      offSetY+39.2,
      224.7,
      offSetY+38.5
    );
    context.lineTo(230.3, offSetY+31.5);
    context.quadraticCurveTo(
      218.4,
      offSetY+29.4,
      209.3,
      offSetY+43.4
    );
    context.closePath();
    context.lineWidth = 0.6;
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
  
    context.beginPath();
    context.moveTo(213.5, offSetY+47.6);
    context.quadraticCurveTo(
      214.9,
      offSetY+41.3,
      220.5,
      offSetY+36.4
    );
    context.quadraticCurveTo(
      217,
      offSetY+41.3,
      216.3,
      offSetY+46.9
    );
    context.quadraticCurveTo(
      225.4,
      offSetY+42,
      240.1,
      offSetY+46.2
    );
    context.quadraticCurveTo(
      225.4,
      offSetY+45.5,
      216.3,
      offSetY+49
    );
    context.lineTo(232.4, offSetY+66.5);
    context.lineTo(214.9, offSetY+51.1);
    context.quadraticCurveTo(
      210,
      offSetY+59.5,
      212.8,
      offSetY+73.5
    );
    context.bezierCurveTo(
      208.6,
      offSetY+63,
      210,
      offSetY+54.6,
      212.8,
      offSetY+50.4
    );
    context.quadraticCurveTo(
      207.9,
      offSetY+51.1,
      203,
      offSetY+54.6
    );
    context.quadraticCurveTo(
      206.5,
      offSetY+49,
      212.8,
      offSetY+46.9
    );
    context.closePath();
    context.strokeStyle = "rgba(255,255,255)";
    context.lineWidth = 0.15;
    context.fillStyle = "rgba(255,255,255,0.2)";
    context.fill();
    context.stroke();
  
    grapesPosition.forEach((grapes) => {
      let gradient = context.createRadialGradient(
        grapes.x - 5.2,
        grapes.y - 3.5,
      0,
        grapes.x+2 ,
        grapes.y-6,
        25
      );
      gradient.addColorStop(0.01, "white");
      gradient.addColorStop(0.2, "#0851A2");
      gradient.addColorStop(1,'#201b41');
    
      let x = grapes.x;
      let y = grapes.y;
      let radius = 22;
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fillStyle = gradient;
      context.fill();
      context.lineWidth = 0.6;
      context.strokeStyle = "black";
  
      
    });
  ctx.restore();
  }
drawGrapes(context, 0);