
var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(800,400);
  
  fixedRectangle = createSprite(400, 300, 50, 90);
  fixedRectangle.shapeColor = ("green");
  fixedRectangle.velocityY = -3;


  movingRectangle = createSprite(400, 100, 90, 50);
  movingRectangle.shapeColor = ("green");
  movingRectangle.velocityY = 3;

  object1 = createSprite(100, 100, 50, 50);
  object1.shapeColor = ("green");

  object2 = createSprite(200, 100, 50, 50);
  object2.shapeColor = ("green");

  fixedRectangle.debug = true;
  movingRectangle.debug = true;


}

function draw() {
  background(64,224,208);  

  // movingRectangle.x = mouseX;
  // movingRectangle.y = mouseY;

  // if(isTouching(movingRectangle,object1)){
  //   movingRectangle.shapeColor = "red";
  //   object1.shapeColor = "red";
  // }
  // else {
  //   movingRectangle.shapeColor = "green";
  //   object1.shapeColor = "green";
  // }
 
    bounceOff(movingRectangle, fixedRectangle);

  drawSprites();
}

