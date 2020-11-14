var bullet,wall;
var speed,weight,damage,thickness;
var bulletRightEdge,wallLeftEdge;
function setup(){
  createCanvas(1100,400);

  speed=random(100,200);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);

  wall=createSprite(1000,200,thickness,height/2);

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  bullet.depth=wall.depth+1;
  console.log(damage);

}
function draw(){
  background("black");
  drawSprites();

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
     if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  }
}

function hasCollided(object1,object2){

    bulletRightEdge=object1.x+object1.width;
    wallLeftEdge=object2.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }else{
      return false;
    }

}