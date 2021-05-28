const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1;

var snowbgImage;

function preload(){

  snowbgImage = loadImage("snow1.jpg");
  
}
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);
  snow1 = new Snow(600, 600, 10);

  
}

function draw() {
  
  background(snowbgImage); 
  snow1.display();
  
  
  
  drawSprites();
}