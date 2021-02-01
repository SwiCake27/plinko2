const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground
var score=0;
var div=[];
var plink=[];
var ball;
var count=0;
var divHeight=300
var start=1
var end=0
var Gamestate=start

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400, 600, 800, 10);
  for(var k=0;k<=width;k=k+80){
    div.push(new Divisions(k,height-divHeight/2,10,divHeight))
  }

    for(var j=40;j<=width-10;j=j+50){
      plink.push(new Plinko(j,75))
    
  }
  for(var j=15;j<=width-10;j=j+50){
    plink.push(new Plinko(j,175))
  
}
}

function draw() {
  background(255,255,255);
  textSize(50)  
  text("100",240,600)
  text("100",320,600)
  text("100",400,600)
  text("50",480,600)
  text("500",160,600)
  text("500",80,600)
  text("500",5,600)
  text("50",730,600)
  text("50",640,600)
  text("50",570,600)
  text("Score:"+score,50,50)
  Engine.update(engine);
  ground.display();
if (keyDown(DOWN_ARROW)){
  mousePressed()
}
  for(var k=0;k<div.length;k++){
    div[k].display();
  }
  for(var j=0;j<plink.length;j++){
    plink[j].display();
  }
  if (ball!=null){
    ball.display();
if (ball.body.position.y>500){
  if (ball.body.position.x<220){
score=score+500;
ball=null;
if (count>=50){
  Gamestate=end;
}
  }

    else if (ball.body.position.x>220 && ball.body.position.x<500){
      score=score+100;
      ball=null;
      if (count>=50){
        Gamestate=end;
      }
    }
    else if (ball.body.position.x>500 ){
      score=score+50;
      ball=null;
      if (count>=50){
        Gamestate=end;
      }
        }

  }  
  }
}
 
function mousePressed(){
  if(Gamestate!==end){
    //ball.velocityY=10;
    console.log(count)
    count=count+1;
    ball=new Particle(mouseX,10,10,10)
  }
}
