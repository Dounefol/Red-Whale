var FinMendoza, KristinDriscoll;
var user;
var RedWhalelogo;

function preload(){
FinMendoza = loadImage("FinMendoza.png")
KristinDriscoll = loadImage("KristinDriscoll.png")
RedWhalelogo = loadImage("redwhalelogo.png")
}

function setup() {

RedWhalelogo = createSprite(50,50,500,500);
FinMendoza = createSprite(50,100,220,230);
KristinDriscoll = createSprite(50,100,240,250);
KristinDriscoll.addImage("KristinDriscoll",KristinDriscoll);
FinMendoza.addImage("FinMendoza",FinMendoza);
RedWhalelogo.addImage("RedWhaleLogo",RedWhalelogo);
}

function draw() {
  drawSprites();
  createCanvas(1534, 748);
  background("#920102");  
}