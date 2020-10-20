
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
paper=new Paper(100,690,);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 paper.display();
}



