var background0,backgroundImg;
var player,playerImg;

function preload(){
    backgroundImg = loadImage("background.png");
    playerImg = loadImage("player.gif");
}

function setup(){
    createCanvas(1500,650);

    player = createSprite(30,500,30,30);
    player.addImage(playerImg);
    player.scale = 1;

    
}

function draw(){
    background(backgroundImg);

drawSprites();
}