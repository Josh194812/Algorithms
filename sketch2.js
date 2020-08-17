var moving_rectangle, rectange;

function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,50,50);
  moving_rectangle.velocityY=3;

  rectangle = createSprite(200,300,50,50);
  collision=false;

  rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  if (moving_rectangle.x-rectangle.x<=moving_rectangle.width/2+rectangle.width/2 
    && rectangle.x-moving_rectangle.x<=moving_rectangle.width/2+rectangle.width/2 
     ){
        moving_rectangle.velocityX=(-1)*moving_rectangle.velocityX
     }
     if(moving_rectangle.y-rectangle.y<=moving_rectangle.height/2+rectangle.height/2
        && rectangle.y-moving_rectangle.y<=moving_rectangle.height/2+rectangle.height/2 ){
            moving_rectangle.velocityY=(-1)*moving_rectangle.velocityY
        }
        
  
  drawSprites();

}
