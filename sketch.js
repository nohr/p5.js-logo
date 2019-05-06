let font,
  fontsize = 140;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/setbackt.ttf');
}

function setup() {
  createCanvas(710, 400);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(210, .5, .5 * mouseY);
  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5);
    drawO(width * 0.5);
}
//the n hri in nohri
function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(255);
  text('n hri', x, 160);
}
// the o in nohri
function drawO(x) {
    fill(255, .9 * mouseX / .5, .7 * mouseY);
    text('o ', x - 16, 160);
}
