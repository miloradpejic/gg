let elementsCanvas = document.getElementById("elements-canvas");
elementsCanvas.width = 260;
elementsCanvas.height = 195 * 8;
let ctx3 = elementsCanvas.getContext("2d");
const SYMBOL_HEIGHT = 195;

const ELEMENTS_MIDDLE_X = elementsCanvas.width / 2;
const ELEMENTS_MIDDLE_Y = elementsCanvas.height / 2;
const ELEMENTS_QUARTER_Y = elementsCanvas.height / 4;

ctx3.fillStyle = "transparent";
ctx3.fillRect(0, 0, elementsCanvas.width, elementsCanvas.height);
// Sprite canvas for the symbols, in descending order
/*drawOrange(ctx3, 0);
drawLemon(ctx3, SYMBOL_HEIGHT);
drawCherriesV2(ctx3, SYMBOL_HEIGHT * 2);
drawWatermelon(ctx3, SYMBOL_HEIGHT * 3);
drawSeven(ctx3, SYMBOL_HEIGHT * 4);
drawDiamondV2(ctx3, SYMBOL_HEIGHT * 5);
drawGrapes(ctx3, SYMBOL_HEIGHT * 6);
drawScatterV2(ctx3, SYMBOL_HEIGHT * 7);
*/
drawParrot(ctx3, 0);
drawDiamondV2(ctx3, SYMBOL_HEIGHT);
drawSeven(ctx3, SYMBOL_HEIGHT * 2);
drawWatermelon(ctx3, SYMBOL_HEIGHT * 3);
drawPineapple(ctx3, SYMBOL_HEIGHT * 4);
drawCherriesV2(ctx3, SYMBOL_HEIGHT * 5);
drawLemon(ctx3, SYMBOL_HEIGHT * 6);
drawOrange(ctx3, SYMBOL_HEIGHT * 7);


//blurred
let scaleDownFactor = 0.5;
let blurredElementsCanvas = document.getElementById("blurred-elements-canvas");
blurredElementsCanvas.width = 260 * scaleDownFactor;
blurredElementsCanvas.height = (195 * 8) * scaleDownFactor;
let ctx_blur = blurredElementsCanvas.getContext("2d");
const BLUR_SYMBOL_HEIGHT = 195;
ctx_blur.fillStyle = "transparent";
ctx_blur.fillRect(0, 0, blurredElementsCanvas.width, blurredElementsCanvas.height);
ctx_blur.scale(scaleDownFactor, scaleDownFactor);
ctx_blur.filter = "blur(3px)";
drawParrot(ctx_blur, 0);
drawDiamondV2(ctx_blur, BLUR_SYMBOL_HEIGHT);
drawSeven(ctx_blur, BLUR_SYMBOL_HEIGHT * 2);
drawWatermelon(ctx_blur, BLUR_SYMBOL_HEIGHT * 3);
drawPineapple(ctx_blur, BLUR_SYMBOL_HEIGHT * 4);
drawCherriesV2(ctx_blur, BLUR_SYMBOL_HEIGHT * 5);
drawLemon(ctx_blur, BLUR_SYMBOL_HEIGHT * 6);
drawOrange(ctx_blur, BLUR_SYMBOL_HEIGHT * 7);
ctx_blur.filter = "none";