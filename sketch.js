var Play=1;
var End=2;
var Bonus=3;
var gameState=Play;
var bee,flower1,flower2;
var flower1Gr,flower2Gr,flow1,flow2,bee1;
var score=0;
var heart=3;
var backg,honey,honeyImg;
var greenF,greenFlowerGr;
var bg1,bg2,greenImg;
function preload(){
  bee1=loadImage("bee1.png");
  flow1=loadImage("flow.png");
  flow2=loadImage("download.png");
 honeyImg=loadImage("honey.png");
 greenImg=loadImage("greenflower.png")
 bg1=loadImage("bg.jpg");
 bg2=loadImage("grass.jpg");
}
function setup() {
  createCanvas(800,800);
  bee=createSprite(400,700,10,10);
  bee.shapeColor="yellow";
  bee.addImage(bee1);
  bee.scale=0.5
  bee.setCollider("rectangle",2,2);
  bee.debug=false;

  honey=createSprite(650,100,10,10);
  honey.addImage(honeyImg);
  honey.scale=0.5;
 flower1Gr=new Group();
 flower2Gr=new Group();
 greenFlowerGr=new Group();
}

function draw() {
  //background(backg);
  fill("black");
  textSize(30);
  text("="+score,700,100);
  text("Live :"+ heart,100,100);
console.log(bee.y);

  if(gameState===Play){
    change();
    fill("black");
  textSize(30);
  text("="+score,700,100);
  text("Live :"+ heart,100,100);
  if(keyDown("LEFT_ARROW")){
    bee.x=bee.x-4;
  }
  if(keyDown("RIGHT_ARROW")){
    bee.x=bee.x+4;
  }
  if(bee.isTouching(flower1Gr)){
  score=score+1;
  flower1Gr.destroyEach();
  }
  if(bee.isTouching(flower2Gr)){
    heart=heart-1;
    flower2Gr.destroyEach();
  }
  if(score/5===0){
    flower1Gr.velocityYEach=+2;
    flower2Gr.velocityYEach=+3;
  }
  if(bee.isTouching(greenFlowerGr)){
    gameState=Bonus;
    score=score+10;
    greenFlowerGr.destroyEach();
  }
  if(heart===0){
    gameState=End;
  }
 spawnGreenF();
 spawnflower1();
 spawnflower2();
 drawSprites();
 
}
if(gameState===Bonus){
  change();
  bee.velocityY=bee.velocityY-1;
  fill("black")
  textSize(30)
  text("="+score,700,100);
  text("Live :"+ heart,100,100);
  spawnGreenF();
 spawnflower1();
 spawnflower2();
 
  drawSprites();
  if(keyDown("LEFT_ARROW")){
    bee.x=bee.x-4;
  }
  if(keyDown("RIGHT_ARROW")){
    bee.x=bee.x+4;
  }
  if(bee.isTouching(flower1Gr)){
  score=score+1;
  flower1Gr.destroyEach();
  }
  if(score/5===0){
    flower1Gr.velocityYEach=+2;
    flower2Gr.velocityYEach=+3;
    greenFlowerGr.velocityYEach=+1;
  }
  if(bee.isTouching(greenFlowerGr)){
    score=score+10;
    greenFlowerGr.destroyEach();
  }
  if(bee.isTouching(flower2Gr)){
    flower2Gr.destroyEach();
  heart=heart+1;
  }
  if(bee.y<0){
    bee.x=400;
    bee.y=700;
    bee.velocityY=0;
    gameState=Play;
  }
} 
if(gameState===End){
 change();
textSize(30)
  text("Game End",250,200);
  
  fill ("yellow")
  text("Your Score =" + score,200,400);

  flower1Gr.velocityYEach=0;
  flower2Gr.velocityYEach=0;
}
}
function change(){
  if(gameState===Play){
    backg=bg1;
    background(backg);
    //background("blue");
  }
  else if(gameState===Bonus){
    backg=bg2;
    background(backg);
  //background("green");
  }
else if(gameState===End){
  background("orange")
}
}
function spawnflower1(){
  if(frameCount%30===0){
  flower1=createSprite(200,0,10,10);
  //flower1.shapeColor="purple";
  flower1.addImage(flow1);
  flower1.scale=0.5
  flower1.setCollider("rectangle",2,2);
  flower1.debug=false;
  flower1.velocityY=6;
  flower1.x=Math.round(random(1,800));
  flower1Gr.add(flower1);
}
}
function spawnGreenF(){
  if(frameCount%80===0){
  greenF=createSprite(200,0,30,30);
  greenF.addImage(greenImg);
  greenF.scale=0.1;
  //greenF.shapecolor="green";
  greenF.velocityY=7;
  greenF.x=Math.round(random(1,800));
 greenFlowerGr.add(greenF);
}
}
function spawnflower2(){
  if(frameCount%60===0){
  flower2=createSprite(200,0,10,10);
  //flower2.shapeColor="red";
  flower2.addImage(flow2);
  flower2.scale=0.5
  flower2.setCollider("rectangle",2,2);
  flower2.debug=false;
  flower2.velocityY=4;
  flower2.x=Math.round(random(1,800));
  flower2Gr.add(flower2);
} 
}