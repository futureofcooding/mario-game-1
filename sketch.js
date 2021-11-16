var mario,mario_running,mario_collided;
var bg, bgImage;

function preload(){
  mario_running = loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
  bgImage = loadImage("images/bgnew.jpg");
  brickImage = loadImage("images/brick.png")
}

function setup() {
createCanvas(1000, 600);

bg = createSprite(580,300);
bg.addImage(bgImage)
bg.scale = 0.5;

mario = createSprite(200,505,20,50);
mario.addAnimation("running",mario_collided);
mario.scale = 0.3;

}

function draw() {
  if(keyDown("space")){
    mario.velocityY = -16
  }
  if(bg.x < 100){
    bg.x=bg.width/4;
  }
  mario.velocityY = mario.velocityY + 0.5;
  group = creatSprite(200,585,400,10);
  mario_collided(ground);
  group.visible = false;


  generateBricks()
  for(var i = 0; i<brickGroup.length; i++){
      var temp = brickGroup.get(i);
      if(temp.isTouching(mario)){
        mario.collide(temp);
      }
      if(mario.x<200){
        mario.x=200;
      }
      if(mario.y<50){
        mario.y=50;
      }
  }
}
function generateBricks(){
  if(frameCount%70 ===0){
    var brick = creatSprite(1200,120,40,10);
    brick.y = random(50,450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;
    brick.lifetime = 250;
    brickGroup.add(brick);
  }
}
