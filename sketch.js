var trex, trex_running, trex_collided, cloud, cloudImage, obstacle, obstacleImage, obstacleImage2, obstacleImage3, obstacleImage4, obstacleImage5, obstacleImage6, score;
var ground, invisibleGround, groundImage;
var cloudGroup, obstaclesGroup;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacleImage = loadImage("obstacle1.png");
  obstacleImage2 = loadImage("obstacle2.png");
  obstacleImage3 = loadImage("obstacle3.png");
  obstacleImage4 = loadImage("obstacle4.png");
  obstacleImage5 = loadImage("obstacle5.png");
  obstacleImage6 = loadImage("obstacle6.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
 
  
}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  score = score + Math.round(getFrameRate()/60);
  text ("score: " + score, 525, 50);
  
  SpawnClouds();
  
  SpawnObstacles();
  drawSprites();
  
  
}

function SpawnClouds() {
    if (frameCount % 60 === 0) {
    var cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    
    cloud.y = Math.round(random(80,120));
    
    
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
      
    cloudGroup.add(cloud);
  }
  
}

function SpawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    var rand = Math.round(random(1, 6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage2);
              break;
      case 3: obstacle.addImage(obstacleImage3);
              break;
      case 4: obstacle.addImage(obstacleImage4);
              break;
      case 5: obstacle.addImage(obstacleImage5);
              break;
      case 6: obstacle.addImage(obstacleImage6);
              break;
              default: break;
      
    }
  
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
}
  