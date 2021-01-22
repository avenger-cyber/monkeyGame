var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;
var obstacle;
var background0,background0IMG;
score =0;

function preload(){  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 background0IMG = loadImage("jungle.jpg")
}



function setup() {
                     
createCanvas(400,400)
   
  background0 = createSprite(200,200,10,10)
  background0.addImage(background0IMG)
  background0.velocityX = -4
  
  
  ground = createSprite(200,380,400,10)

  monkey =  createSprite(30,280 ,20,20)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale =0.07    ;
  FoodGroup = new Group();
  obstacleGroup = new Group();
  ground.visible = false;
  

}

function draw() {  
 background("white")
if(keyDown("space")&& monkey.y>=250){
  monkey.velocityY =-12;
}
    
     if (background0.x < 0){
      background0.x = background0.width/2;
    }

    monkey.velocityY  = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  spawnObstacle();
  createBanana();
  
  if(FoodGroup.isTouching(monkey)){
    
    score = score+2;
    FoodGroup.destroyEach();
  
  }
  
  switch(score){
      
    case 10:monkey.scale =0.12    
            break;
    case 20:monkey.scale =0.14    
            break;
    case 30:monkey.scale =0.16    
            break;  
    case 40:monkey.scale =0.18    
            break;  
    default:break;
  
  }
 
  
  if(obstacleGroup.isTouching(monkey)){
    
    monkey.scale = 0.07;
  }
  
  
  
  
  
  
  
   drawSprites();
 fill("white")
 text("Score: " + score, 300,100);
}

function spawnObstacle(){
   if(frameCount % 300 === 0 ){
    
    
    obstacle = createSprite(390,355,20,20)
    obstacle.scale = 0.09;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
   obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle); 
   }

}

function createBanana(){
  if(frameCount % 80 === 0 ){
    
    
    banana = createSprite(390,120,20,20)
    banana.y = Math.round(random(140,250))  
    banana.scale = 0.09;
    banana.velocityX = -4;
    banana.lifetime = 100;
   banana.addImage(bananaImage);
    FoodGroup.add(banana); 
  
  }
}


