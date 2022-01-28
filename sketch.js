const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand3,stand4,stand5;
var ball;
var slingShot;
var polygon_img;
var quadrado;
var bg;
var modo;
var score = 0;
var a = color("cyan");
var q;
var rodadas;
var r;


function preload(){
  polygon_img=loadImage("polygon.png");
  bg = loadImage("R.jpg")
}


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand3 = new Stand(width/2,10,900,20);
  stand4 = new Stand(-10,height/2,20,400);
  stand5 = new Stand(920,height/2,20,400);
  
  quadrado = new Square(200,150,30,30);
  slingShot = new SlingShot(quadrado.body,{x:200,y:150});
 
  rodadas = 0;

  modo = "jogar";

  //level one
  block1 = new Block(300,275,30,30);
  console.log(block1);
  block2 = new Block(330,275,30,30);
  block3 = new Block(360,275,30,30);
  block4 = new Block(390,275,30,30);
  block5 = new Block(420,275,30,30);
  block6 = new Block(450,275,30,30);
  block7 = new Block(480,275,30,30);
  //level two
  block8 = new Block(330,235,30,30);
  block9 = new Block(360,235,30,30);
  block10 = new Block(390,235,30,30);
  block11 = new Block(420,235,30,30);
  block12 = new Block(450,235,30,30);
  //level three
  block13 = new Block(360,195,30,30);
  block14 = new Block(390,195,30,30);
  block15 = new Block(420,195,30,30);
  //top
  block16 = new Block(390,155,30,30);


  a = color("cyan");
  b = color("cyan");
  c = color("cyan");
  d = color("cyan");
  e = color("cyan");
  f = color("cyan");
  g = color("cyan");
  h = color("cyan");
  i = color("cyan");
  j = color("cyan");
  k = color("cyan");
  l = color("cyan");
  m = color("cyan");
  n = color("cyan");
  o = color("cyan");
  p = color("cyan");
  q = color(rgb(255,94,0));

}
function draw() {
  background(0); 
  
  textSize(20);
  fill("lightyellow");

  funcoes();

  ground.display();
  stand1.display();
  stand3.display();
  stand4.display();
  stand5.display();
  slingShot.display();
  stroke(q);
  quadrado.display();
  
  r = color(random(150,250),random(150,250),random(150,250));
  
  
  strokeWeight(1.5);
  stroke(255);
  fill(0);
  stroke(p);
  block1.display();
  stroke(o);
  block2.display();
  stroke(n);
  block3.display();
  stroke(m);
  block4.display();
  stroke(l);
  block5.display();
  stroke(k);
  block6.display();
  stroke(j);
  block7.display();
  stroke(i);
  block8.display();
  stroke(h);
  block9.display();
  stroke(g);
  block10.display();
  stroke(f);
  block11.display();
  stroke(e);
  block12.display();
  stroke(d);
  block13.display();
  stroke(c);
  block14.display();
  stroke(b);
  block15.display();
  stroke(a);
  block16.display();

}

function mouseDragged(){
  if(modo !== "solto"){
    Matter.Body.setPosition(quadrado.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  slingShot.soltar();
  modo = "solto";
}

function keyPressed(){
  if(modo==="solto"){
    if(keyCode === 32){
      Matter.Body.setPosition(quadrado.body,{x:200,y:150});
      slingShot.voltar(quadrado.body);
      rodadas++;
      modo = "jogar"
    }
  }
}

function funcoes(){
  
  if(block16.body.position.y>200){
    a = color("red");
    
    
    
  }
  if(block15.body.position.y>250){
    b = color("red");
    
    
  }
  if(block14.body.position.y>250){
    c = color("red");
  
    
    
  }
  if(block13.body.position.y>250){
    d = color("red");
   
    
    
  }
  if(block12.body.position.y>300){
    e = color("red");
  
    
    
  }
  if(block11.body.position.y>300){
    f = color("red");
    
    
    
  }
  if(block10.body.position.y>300){
    g = color("red");
   
    
    
  }
  if(block9.body.position.y>300){
    h = color("red");
  
    
    
  }
  if(block8.body.position.y>300){
    i = color("red");
    
    
    
  }
  if(block7.body.position.y>290){
    j = color("red");
   
    
    
  }
  if(block6.body.position.y>290){
    k = color("red");
   
    
    
  }
  if(block5.body.position.y>290){
    l = color("red");
 
    
    
  }
  if(block4.body.position.y>290){
    m = color("red");
   
    
    
  }
  if(block3.body.position.y>290){
    n = color("red");
    
    
    
  }
  if(block2.body.position.y>290){
    o = color("red");
    
    
    
  }
  if(block1.body.position.y>290){
    p = color("red");
   
    
    
  }
  if(rodadas<4){
    q = color(rgb(255,94,0));
  }
  else if(rodadas>4&&rodadas<6){
    q = color("white");
  }
  else if(rodadas>6&&rodadas<15){
    q = color("yellow");
  }
  else if(rodadas>15&&rodadas<22){
    q = color("darkblue");
  }
  else if(rodadas>22){
    q = r;
  }
  else if(keyCode===49){
    rodadas=0;
  }

}