const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;
var girl, girlImage;
var snow, snowImage1, snowImage2;

function preload(){
 bg = loadImage("snow1.jpg");

 girlImage = loadImage("girl.png");

 snowImage1 = loadImage("snow4.webp");
 snowImage2 = loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);

  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImage);
  girl.scale = 0.7;

}
function draw() {
  background(bg);  
 
  if(keyCode === LEFT_ARROW){
    girl.x = girl.x - 5;
 }
 if(keyCode === RIGHT_ARROW){
    girl.x = girl.x + 5;
 } 
  
  snowfall();
  drawSprites();
}

function snowfall(){
  if(frameCount % 60 === 0){
     snow = createSprite(500,2,70,80);
     snow.x = Math.round(random(10,790));
     snow.velocityY = 12;
     snow.scale = 0.08; 
     snow.lifetime = 200;
     
     var rand = Math.round(random(1,2))
     switch(rand){
       case 1 : snow.addImage(snowImage1);
                break; 
       case 2 : snow.addImage(snowImage2);
                break;
      default : break;
     } 
  }
}