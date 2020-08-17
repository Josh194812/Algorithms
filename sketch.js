var moving_rectangle, rectange, collision;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,20,20);
  rectangle = createSprite(200,240,20,20);
  collision=false;

  rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  moving_rectangle.x=mouseX;
  moving_rectangle.y=mouseY;
  if(collision==true){
    moving_rectangle.shapeColor="red";
    rectangle.shapeColor="red";
  }
  
  drawSprites();

}

function Collision(){
  if (moving_rectangle.x-rectangle.x<=moving_rectangle.width/2+rectangle.width/2 
    || moving_rectangle.y-rectangle.y<=moving_rectangle.height/2+rectangle.height/2 ){
      collision=true;
    }

}