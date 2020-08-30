const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division;
var p;
var score=0;
var turn=0;
var gamestate;
function setup() {
  createCanvas(1350,625);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(675,610,1350,25);
 
 
}
var division = [];
var particle;
var plinko = [];

var divisionHeight = 280;

function draw() {
background(0);  
Engine.update(engine);
gamestate="play";
  ground.display();
  textSize(30);
  text("Score : "+score,50,40);
  text("500",40,400);
  text("400",140,400);
  text("300",240,400);
  text("300",340,400);
  text("200",440,400);
  text("100",540,400);
  text("100",640,400);
  text("200",740,400);
  text("200",840,400);
  text("300",940,400);
  text("300",1040,400);
  text("400",1140,400);
  text("500",1240,400);
  for(var k = 15; k <= 1350 ; k = k+100)
  {
    division.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var k = 15; k < division.length ;k++ ){
     division[k].display();
  }
  for(var j = 100;j <= 1200 ; j = j+100)
  {
    plinko.push(new Plinko(j,80,20));
   
  }
  for(var j = 100; j < plinko.length ;j++ ){
     plinko[j].display();
  }
  for(var i = 10;i <= 1340 ; i = i+60)
  {
    plinko.push(new Plinko(i,140,20));
   
  }
  for(var i = 10; i < plinko.length ;i++ ){
     plinko[i].display();
  }
  for(var t = 10;t <= 1340 ; t = t+70)
  {
    plinko.push(new Plinko(t,200,20));
   
  }
  for(var t = 100; t < plinko.length ;t++ ){
     plinko[t].display();
  }
  for(var f = 100;f <= 1200 ; f = f+110)
  {
    plinko.push(new Plinko(f,275,30));
   
  }
  for(var f = 400; f < plinko.length ;f++ ){
     plinko[f].display();
  }
  

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>380){
      if(particle.body.position.x>10&&particle.body.position.x<100){
        score=score+500;
        particle=null;
      }
      else if(particle.body.position.x>100&&particle.body.position.x<200){
        score=score+400;
        particle=null;
      }
      else if(particle.body.position.x>200&&particle.body.position.x<400){
        score=score+300;
        particle=null;
      }
      else if(particle.body.position.x>400&&particle.body.position.x<500){
        score=score+200;
        particle=null;
      }
      else if(particle.body.position.x>500&&particle.body.position.x<700){
        score=score+100;
        particle=null;
      }
      else if(particle.body.position.x>700&&particle.body.position.x<900){
        score=score+200;
        particle=null;
      }
      else if(particle.body.position.x>900&&particle.body.position.x<1100){
        score=score+300;
        particle=null;
      }
      else if(particle.body.position.x>1100&&particle.body.position.x<1200){
        score=score+400;
        particle=null;
      }
      else if(particle.body.position.x>1200&&particle.body.position.x<1300){
        score=score+500;
        particle=null;
      } 
     
    }
    if(turn>5){
      textSize(50)
       text("Game Over",600,250);
    }
  }

   
 }
    
  

function mousePressed(){
  if(gamestate=="play"&&turn<6){
  turn++;
  particle=new Particle(mouseX,20,10,10);
  
  
}
}