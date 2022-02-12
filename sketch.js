var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16;
var hero, heroimg;
var edges;
var devil1, devil2;
var d1img, d2img;
var sword, swordimg;
var bow, bowimg; 
var shield, shieldimg;
var HeroS, HeroB;

function preload(){
heroimg = loadImage("Hero.png");
d1img = loadImage("Demon1.png");
d2img = loadImage("Demon2.png");
swordimg = loadImage("Sword.png");
bowimg = loadImage("Bow.png");
sheildimg = loadImage("Shield.png");
HeroS = loadImage("HeroS.png");
HeroB  = loadImage("HeroB.png");
HeroSH = loadImage("HeroSH.png");
victory = loadImage("Victory.png");
gameover = loadImage("GameOver.png");

}

function setup (){
createCanvas(600,400);

//creating Hero
hero = createSprite(20,30,10,10);
hero.addImage(heroimg);
hero.scale = 0.05;
hero.debug=false;
hero.setCollider("rectangle", 20, 120, 400,1100);

//creating Devils;
devil1= createSprite(220,20,10,10);
devil1.addImage(d1img);
devil1.scale = 0.07;

devil2= createSprite(530,20,10,10);
devil2.addImage(d2img);
devil2.scale = 0.17;

//Creating Sword
sword = createSprite(220,360,10,10)
sword.addImage(swordimg);
sword.scale = 0.05;

//Creating Bow
bow = createSprite(125,368,10,10);
bow.addImage(bowimg);
bow.scale = 0.05;

//Creating Shield
shield = createSprite(550,368,10,10);
shield.addImage(sheildimg);
shield.scale = 0.13;

//Creating all the walls 
wall1 = createSprite(110,20,15,120);
wall2 = createSprite(37,120,75,15);
wall3 = createSprite(47,180,105,15);
wall4 = createSprite(170,300,15,300);
wall5 = createSprite(117,250,105,15);
wall17 = createSprite(107,330,135,15);
wall6 = createSprite(200,50,105,15);
wall7 = createSprite(300,60,15,125);
wall8 = createSprite(260,115,115,15);
wall9 = createSprite(247,220,155,15);
wall10 = createSprite(387,300,15,300);
wall11 = createSprite(330,300,125,15);
wall12 = createSprite(275,385,15,95);
wall13 = createSprite(440,60,15,135);
wall14 = createSprite(545,170,115,15);
wall15 = createSprite(445,240,125,15);
wall16 = createSprite(540,320,125,15);


wall1.shapeColor="brown";
wall2.shapeColor="brown";
wall3.shapeColor="brown";
wall4.shapeColor="brown";
wall5.shapeColor="brown";
wall6.shapeColor="brown";
wall7.shapeColor="brown";
wall8.shapeColor="brown";
wall9.shapeColor="brown";
wall10.shapeColor="brown";
wall11.shapeColor="brown";
wall12.shapeColor="brown";
wall13.shapeColor="brown";
wall14.shapeColor="brown";
wall15.shapeColor="brown";
wall16.shapeColor="brown";
wall17.shapeColor="brown";

devil1.velocityX = 3;
devil1.velocityY = 3;

devil2.velocityX = -3;
devil2.velocityY = 4;

}

function draw(){
  background("grey");

hero.collide(wall1);
hero.collide(wall2);
hero.collide(wall3);
hero.collide(wall4);
hero.collide(wall5);
hero.collide(wall6);
hero.collide(wall7);
hero.collide(wall8);
hero.collide(wall9);
hero.collide(wall10);
hero.collide(wall11);
hero.collide(wall12);
hero.collide(wall13);
hero.collide(wall14);
hero.collide(wall15);
hero.collide(wall16);
hero.collide(wall17);

devil1.bounceOff(wall1);
devil1.bounceOff(wall2);
devil1.bounceOff(wall3);
devil1.bounceOff(wall4);
devil1.bounceOff(wall5);
devil1.bounceOff(wall6);
devil1.bounceOff(wall7);
devil1.bounceOff(wall8);
devil1.bounceOff(wall9);
devil1.bounceOff(wall10);
devil1.bounceOff(wall11);
devil1.bounceOff(wall12);
devil1.bounceOff(wall13);
devil1.bounceOff(wall14);
devil1.bounceOff(wall14);
devil1.bounceOff(wall15);
devil1.bounceOff(wall16);
devil1.bounceOff(wall17);

devil2.bounceOff(wall1);
devil2.bounceOff(wall2);
devil2.bounceOff(wall3);
devil2.bounceOff(wall4);
devil2.bounceOff(wall5);
devil2.bounceOff(wall6);
devil2.bounceOff(wall7);
devil2.bounceOff(wall8);
devil2.bounceOff(wall9);
devil2.bounceOff(wall10);
devil2.bounceOff(wall11);
devil2.bounceOff(wall12);
devil2.bounceOff(wall13);
devil2.bounceOff(wall14);
devil2.bounceOff(wall14);
devil2.bounceOff(wall15);
devil2.bounceOff(wall16);
devil2.bounceOff(wall17);

edges = createEdgeSprites();
hero.collide(edges);
devil1.bounceOff(edges);
devil2.bounceOff(edges);


//if (hero.isTouching(devil1)||hero.isTouching(devil2)){
  //image(gameover,180,125,200,100);
//}

if (hero.isTouching(bow)){
  hero.addImage(HeroB);
  hero.scale=0.023;
}

if (hero.isTouching(sword)){
  hero.addImage(HeroS);
  hero.scale=0.3;
  hero.lifetime=5000;
  hero.setCollider("rectangle", 0, 0, 70, 155);
}
if(hero.isTouching(shield)){
hero.addImage(HeroSH);
hero.scale=0.07;
hero.lifetime=5000;
hero.setCollider("rectangle", 0, 20, 400,655);

devil1.velocityX=0;
devil1.velocityY=0;

devil2.velocityX=0;
devil2.velocityY=0;

hero.velocityX=0;
hero.velocityY=0;

image(victory,180,125,200,100);
}


  drawSprites();
}

function keyPressed(){


  if (keyCode == RIGHT_ARROW){
    hero.velocityX +=3;
  }

  if (keyCode == LEFT_ARROW){
    hero.velocityX +=-3;
  }

  if (keyCode == UP_ARROW){
    hero.velocityY +=-3;
  }

  if (keyCode == DOWN_ARROW){
    hero.velocityY +=3;
  }
}