const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var candy;
function preload(){
  backgroundImg = loadImage("fondo.jpg");
 candy=loadImage("candy.png");
 g=loadImage("frog.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Challenge1:
  ball = Bodies.circle(50,200,20);
  //añadir el cuerpo al mundo
  World.add(world, ball);
 
//challenge 2: crear un objeto slingshot
  slingShot = new Slingshot(this.ball, {x:100, y:100})
  

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=0.25;


  imageMode(CENTER)
  image(candy ,ball.position.x,ball.position.y,40,40);
  image(g,450,290)

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}
