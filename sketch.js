
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1; 
    
 ground = createSprite(400,350,900,10); 
 ground.velocityX = -4; 
 ground.x = ground.width/2;
  
 bananaGroup = new Group();
 obstaclesGroup = new Group(); 
  
}


function draw() {

 background(0); 
  
 if(ground.x < 0) {
   ground.x  = ground.width/2;
 }
 if(keyDown("space") && monkey.y > 280) {
   monkey.velocityY = -12
 }
  
 monkey.velocityY = monkey.velocityY + 0.8; 
 monkey.collide(ground); 
  
  
 stroke("yellow");
 textSize(20);
 fill("yellow");
 survivalTime = Math.ceil(frameCount/frameRate()) 
 text("Survival Time: " + survivalTime,100,50); 
  
 
 spawnBanana();
 spawnObstacles(); 
  
  
  
  
  
  
 drawSprites(); 
}

function spawnBanana(){
  if(frameCount%80 == 0){
  var banana = createSprite(200,120,40,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1 
  banana.velocityX = -4;
  banana.lifetime = 200;
  
  bananaGroup.add(banana);
}
}

function spawnObstacles(){
  if(frameCount%300 == 0){
  var obstacle = createSprite(280,315,20,20);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.15
  obstacle.velocityX = -4;
  obstacle.lifetime = 200;
  
  obstaclesGroup.add(obstacle);
}
} 