const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0; 

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(513, 298,200,15);

    //level 2
    box1 = new Box(450,268,30,40);
    box2 = new Box(480,268,30,40);
    box3 = new Box(510,268,30,40);
    box4 = new Box(540,268,30,40);
    box5 = new Box(570,268,30,40);

    //level 3
    box6 = new Box(480,228,30,40);
    box7 = new Box(510,228,30,40);
    box8 = new Box(540,228,30,40);
    box9 = new Box(510,188,30,40);

  polygon = Bodies.circle(100,65,30);
  World.add(world,polygon);
  slingshot = new SlingShot(polygon, {x: 100, y: 65});

}

function draw() {
  background(0);  
  textSize(15);
  text(mouseX + "," + mouseY, mouseX, mouseY);
Engine.update(engine);

ground.display(); 
stand1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();

box6.display();
box7.display();
box8.display();
box9.display();

box6.score();
box7.score();
box8.score();
box9.score();

imageMode(CENTER);
image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

slingshot.display();
text("Score:"+score,1140,25);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}