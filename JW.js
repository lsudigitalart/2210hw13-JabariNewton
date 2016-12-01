
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
var randomSpare=1;
var gameChooser=3;
var fireE=0;
var oneFive = 1.5;
var img;

function preload(){
  img = loadImage("assets/gameboy.png");
}
function setup(){
  // gameChooser = gameChooser - random(0,3);
  gameChooser = random(0,3);

  function setup() {
  // image(img, 0, 0,650,1000);
  }
  // if(gameChooser < 2){
  //   Bike === true;
  // }
  // else if(gameChooser > 1 && gameChooser < 2){
  //
  // }
  // else {
  //   Catch === true;
  // }


  mic = new p5.AudioIn()
  mic.start()


  createCanvas(650,1000);
  noStroke();

  dropPosX =random(150,300);
  finishLine = random(200,600);



}
function draw(){

  //draw da gamecube

  // background(195,192,187);
  // //grey
  // push();
  // fill(82,85,94);
  // rect(40,80,550,450);
  // pop();
  // //grren
  // push();
  // fill(71,88,20);
  // rect(125,120,360,360);
  // pop();
  // //red
  // fill(130,10,71);
  //
  image(img, 0, 0,650,1000);










console.log(gameChooser);

// Racing Game
if(gameChooser < 1){
  image(img, 0, 0,650,1000);


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


  // Catch the Honey
  //
  textSize(30);
  fill(255);
  text("RUB OUT THE FIRE",150,280);
  fill(210,120,5);
  rect(dropPosX,dropPosY,50,50);
  dropPosY = dropPosY - randomSpare;
  // dropPosY = dropPosY - randomSpare;

  //
  //
  // rect(0,finishLine,width,50);
  // function keyPressed(){
  //   randomSpare = 0;
  // }
  //
  // dropTimer = dropTimer - .5;
  // fill(255);
  //
  // if(keyIsPressed === true){
  //
  //   randomSpare = 0;

  if(mouseY- dropPosY < 30 && mouseY- dropPosY > -30 ){
    textSize(32);
    text("KEEP RUBBING",120,120)
    fireE = fireE + 1;
    if(fireE > 50){
      randomSpare = 0;
      fill(255);
    }
    if(dropPosY < 100){
      text(":(",300,250)
    }
    }


  }
    // if(mouseX=dropPosX){
      // randomSpare = 0;
    // }
    //
    // }

  }

//
//     if(finishLine- dropPosY < 50 && finishLine- dropPosY > -50){
//         background(0,255,0);
//       }
//       else {
//         fill(255);
//         textSize(64);
//         text("HUSH NIGGA",300,300);
//
//       }
//     }
//   }
// }
