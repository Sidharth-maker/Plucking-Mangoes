
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var ground
var stone
var slingShot
var boy
var attach

function preload()
{

	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,700,1000,20);

	tree = new Tree(700,600,0,0);

	boy = new Boy(180,400,100,50)

	

	mango1 = new Mango(750,200,25);
	mango2 = new Mango(700,280,25);
	mango3 = new Mango(800,210,25);
	mango4 = new Mango(900,290,25);
	mango5 = new Mango(820,300,25);
	mango6 = new Mango(750,270,25);
	mango7 = new Mango(710,350,25);
	mango8 = new Mango(850,350,25);
	mango9 = new Mango(869,200,25);
	mango10 = new Mango(950,350,25);

	stone = new Stone(100,350,25);
	slingShot = new SlingShot(stone.body,{x:200,y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  
  Engine.update(engine);

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  ground.display();

  boy.display();

  stone.display();
  slingShot.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:200,y:500})
	slingShot.launch(stone.body);
}

}

function detectcollision(lstone,lmango){


    var mangoObject = lmango.body.position;
	var stoneObject = lstone.body.position;
	
	var distance = dist(mangoObject.x,mangoObject.y,stoneObject.x,stoneObject.y)
	if(distance<=lmango.r+lstone.r){
	
	Matter.Body.setStatic(lmango.body,false);

	}
	
}

