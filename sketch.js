var bg,bgImage
var astronaut
var bath,brush,drink,eat;

function preload(){
bgImage= loadImage("images/iss.png")
gymImage=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
sleepImage=loadImage("images/sleep.png")
drinkImage=loadAnimation("images/drink1.png","images/drink2.png")
bathImage=loadAnimation("images/bath1.png","images/bath2.png")
moveImage=loadAnimation("images/move.png","images/move1.png")
brushImage=loadImage("images/brush.png")
eatImage=loadAnimation("images/eat1.png","images/eat2.png")

}



function setup() {
  createCanvas(600, 500);
//bg=createSprite(200,200);
//bg.addImage(bgImage)
astronaut=createSprite(300,100)
astronaut.addImage(sleepImage)
astronaut.scale=0.1
}

function draw() {
  background(bgImage);
  drawSprites();
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("brushing", brushImage);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("eating", eatImage);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bathImage);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("gymming", gymImage);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}