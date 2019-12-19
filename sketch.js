var fixedRect,movingRect
function setup() {

  createCanvas(800,400);
  fixedRect=createSprite(200,400,50,100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  
  movingRect=createSprite(400, 200, 100, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
    else{
      fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
    }

  drawSprites();
}
