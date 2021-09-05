
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function setup() {
	createCanvas(1500, 700);
var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}


	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(200, 200, 30, ball_options)
	//Create the Bodies Here.
	World.add(world, ball)
ground = new Ground(750, height - 30, 1500, 20)
ground1 = new Ground(1100, 590, 20, 150)
ground2 = new Ground(1350,590, 20, 150)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30)
  ground.display()
  ground1.display()
  ground2.display()
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:210, y:-210})
	}
}