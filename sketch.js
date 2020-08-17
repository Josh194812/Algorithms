var moving_rectangle, rectange, collision;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,50,50);
  rectangle = createSprite(200,240,50,50);
  collision=false;

  rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  moving_rectangle.x=mouseX;
  moving_rectangle.y=mouseY;
  Collision();
  if(collision==true){
    moving_rectangle.shapeColor="red";
    rectangle.shapeColor="red";
  }
  else {
      rectangle.shapeColor="green";
      moving_rectangle.shapeColor="green";
  }
    
  
  drawSprites();

}

function Collision(){
  if (moving_rectangle.x-rectangle.x<=moving_rectangle.width/2+rectangle.width/2 
    && moving_rectangle.y-rectangle.y<=moving_rectangle.height/2+rectangle.height/2
    && rectangle.x-moving_rectangle.x<=moving_rectangle.width/2+rectangle.width/2 
    && rectangle.y-moving_rectangle.y<=moving_rectangle.height/2+rectangle.height/2 
     ){
      collision=true;
    } else{
      collision=false;
    }

}
