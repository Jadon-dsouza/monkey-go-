
var monkey , monkey_running, monkey_collided;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survival;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 600); 
  
 monkey = createSprite(80,350,5,5);
 monkey.addAnimation("moving",monkey_running);
 
 monkey.scale= 0.1;

 ground = createSprite(400,380,2000,10);
 ground.velocityX=-4;
 ground.x = ground.width /2
 console.log(ground.x);
  
 banana = createSprite(280,150,200,29);
 banana.addImage("banana",bananaImage);
 banana.scale=0.1;
  
  obstaclesGroup = createGroup();
 

  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false;
  
  survival = 0;
  
  
}


function draw() {
background(255);
text("survival time : "+ survival , 500,50);
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
drawSprites();
}
  
function spawnObstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(600,165,10,40);
   
   obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height);
  obstacle.debug = false;
   
            
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
   




