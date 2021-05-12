const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,500,1200,200);
  box1 = new Box(600,600,100,100,0);
  
}

function draw() {
  background(255,255,255);  
  ground.display();
  box1.display();

}