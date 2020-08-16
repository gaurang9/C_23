const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
   world = engine.world;
   box1=new Box(200,100,50,50)
   box2=new Box(100,050,50,100)
  ground=new Ground(200,390,400,10)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
box1.display()
box2.display()
ground.display()
}