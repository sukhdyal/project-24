const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

function preload() {

}

function setup() {
    var canvas = createCanvas(1500, 700);


    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1400, 650, 650, 4);

    //Create the Bodies Here.


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);

    box1.display();

    drawSprites();

}