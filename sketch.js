var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  score = 0;
  survivalTime=0;
  
createCanvas(600,350);


monkey = createSprite(100,250,50,50);
monkey.addAnimation("running", monkey_running)
monkey.scale = 0.1;

ground = createSprite(90,280,1700,10);
ground.shapeColor = "yellow";

ground.velocityX = -4;
    
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  
  background("grey"); 
  console.log(monkey.y);
  if(keyDown("space") && monkey.y >= 235){
      monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.6;

  bananas();
  
  
  obstacles();
  
  if(ground.x < 0){
   ground.x = ground.width/2;
  }
  
  
  monkey.collide(ground);
  
  
  
 if(monkey.isTouching(obstacleGroup)){    obstacleGroup.destroyEach(); 
   score = score-1;                                   
}
  
  
  
  
  if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
    score=score+1;
      }
  
  
  
  
drawSprites();  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  
  
  
  stroke("white");
fill("white");
textSize(15);
text("SCORE: "+score,300,50);
  
}

function bananas(){
  
  if (frameCount % 136 === 0) {
    
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 115;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  
  if(frameCount % 400 === 0){
    
    obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(260,260));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 115;
    
        obstacleGroup.add(obstacle);
  }




}