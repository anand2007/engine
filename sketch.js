const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={
    restitution:1.0
  }

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  
  World.add(world,ground);

  ball = Bodies.circle(200,100,10,options);
  World.add(world, ball) ;
  console.log(ground);
  
  // console.log(object.type);
  // console.log(object.position.x);  
  // console.log(object.position.y);  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}