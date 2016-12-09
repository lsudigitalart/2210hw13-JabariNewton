
var playerx=100;
var playery=350;
var playerColor=255;
var cpuX=100;
var cpuY=300;
var degree =3;
var volumeMeter = 0;
var truetrue =2;
var hueCounter = 1;
var countdown= 100;
var countdownR = 0.05;
var dropjar;
var dropPosX;
var dropPosY = 400;
var dropTimer = 30;
var finishLine;
var randomSpare=3;
var gameChooser=3;
var fireE=0;
var oneFive = 1.5;
var img;
var keyCodeS=0;
var keyCodeT=0;
var keyCodeO =0;
var keyCodeP = 0;

function preload(){
  img = loadImage("assets/gameboy.png");
}
function setup(){
  gameChooser = random(0,3);
  mic = new p5.AudioIn()
  mic.start()

  createCanvas(650,1000);
  noStroke();

  dropPosX =random(150,300);
  finishLine = random(200,600);

}
function draw(){
  //Gameboy
  image(img, 0, 0,650,1000);
  console.log(gameChooser);

// Racing Game
if(gameChooser < 1){
  image(img, 0, 0,650,1000);

  textSize(20);
  fill(255);

  text("PRESS A KEY TO HIT THE GAS",150,250,10);

  // background(240,100,40);
  fill(playerColor);
  if(playerx < 401){
    playerx = playerx + degree;

  }

    if (keyIsPressed === true) {

      degree = 3;
      playerColor = 0;
      } else {
      degree = 1;
      playerColor = 255;
      // playerx = playerx + 1;

    }


    rect(playerx,playery,50,50)
    fill(255);
    rect(cpuX, cpuY, 50, 50);

    cpuX = cpuX + oneFive;

    if(cpuX > 400 || playerx > 400){
      degree = 0;
      oneFive = 0;
      textSize(40);
      text("THE WINNER IS",150,220);
      if(cpuX < 400){
        textSize(60)
        text("YOU",230,275);
      }
      else {
        text("U SUCK",250,275);
      }
    }


  }

//



//SHOUT
if(gameChooser > 1){
  image(img, 0, 0,650,1000);


    // background(hueCounter,0,0);
    var micVol = mic.getLevel();
    ellipse(250, constrain(500-micVol*250*2, 0, 460), 10, 10);

    //Counting High Points
    if (micVol > 0.2){
      volumeMeter = volumeMeter + 5;

      if(volumeMeter > 100){
        hueCounter = hueCounter + 5;
      }
    }
    if(hueCounter > 255){
      fill(250);
      textSize(30);
      text("YOU WIN",325,340);
      countdownR = 0;
    }
    fill(250);
    textSize(30);
    // countdown = round(countdown);
    countdown = countdown - countdownR;

    text((round(countdown)),325,300);
  }


if(gameChooser > 1 && gameChooser < 2){
  image(img, 0, 0,650,1000);


  // Press Stop
  //
  textSize(20);
  fill(255);
  text("STOP SQUARE AT LINE",210,200);
  fill(210,120,5);
  rect(dropPosX,dropPosY,50,50);

  //finish line
  var finishLine = 275;
  fill(255);
  rect(120,finishLine,405,10);
  dropPosY = dropPosY - randomSpare;

  //runner

  if(keyIsPressed === true){
    randomSpare = 0
      if(dropPosY - finishLine > 5){
        fill(255,125,24);
      }
  }

}
}
