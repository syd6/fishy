var spr;
function setup() {
  createCanvas(400, 400);
  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
  spr.rotateToDirection = true;
  spr.maxSpeed = 2;
  spr.friction = 0.99;
}
function draw() {
  background(50);
  if (mouseIsPressed) {
    spr.attractionPoint(0.5, mouseX, mouseY);
  }
  drawSprites();
}