
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, blcok6, block7, block8, block9, stone, platform;
var slingshot;

var stoneImg;

var score=0;

function preload() {
    stoneImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);

    block9 = new Block(390,155,30,40);

    platform = new Platform(390,200,200,10);

    stone = new Stone(50,200,10,10);

    slingshot = new SlingShot(stone.body,{x:10,y:10});
}
    

function draw() {
    rectMode(CENTER);
    background(0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    platform.display();
    slingshot.display();
    stone.display();

    text("score:"+score,1000,50);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
    slingshot.fly();
    }
    
    function keyPressed() {
        if (keyCode===32) {
            slingshot.attach(bird.body);
        }
    }