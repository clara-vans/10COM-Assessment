/**
* Title: Skiing Adventures - 10COM game
* Author: Clara van Stokkum
* Date: 
* Version: 1
* Purpose: Make it as far as possible
**/
console.log("Skiing Adventures!!")
var ctx
window.onload = startCanvas

//arrow keys
const LEFT_ARROW = 37
const RIGHT_ARROW = 39

//game screen variables
const WIDTH = 600
const HEIGHT = 475

//background variables
var backgroundImage = new Image()
backgroundImage.src = "background.png"

//turning width
var turningWidth = 8

//arrow keys
var leftKeyDown = false
var rightKeyDown = false

//tree variables
const TREE_WIDTH = 50
const TREE_HEIGHT = 100

var treeLeftImage = new Image()
treeLeftImage.src = "tree-left.png"

var treeRightImage = new Image()
treeRightImage.src = "tree-right.png"

//character variables
const CHARACTER_HEIGHT = 150
const CHARACTER_WIDTH = 75

var characterMiddleImage = new Image()
characterMiddleImage.src = "character-middle.png"

var characterRightImage = new Image()
characterRightImage.src = "character-left.png"

var characterLeftImage = new Image()
characterLeftImage.src = "character-right.png"

var isAlive = true
var characterXPosition = 200
var characterYPosition = HEIGHT - CHARACTER_HEIGHT
var characterSpeed = 10

//rock variables
const ROCK_WIDTH = 25
const ROCK_HEIGHT = 20
const ROCK_SPEED = 15
var rockYPosition = 0


var rockImage = new Image()
rockImage.src = "rock.png"

//checking for keyDown
function keyDownFunction(keyboardEvent) {
  var keyDown = keyboardEvent.keyCode
  //check if arrow keys are pressed
  if (keyDown == LEFT_ARROW) {
    leftKeyDown = true
    //console.log("left arrow pressed");
  }
  if (keyDown == RIGHT_ARROW) {
    rightKeyDown = true
  }
}



//function for keyUp
function keyUpFunction(keyboardEvent) {
  var keyUp = keyboardEvent.keyCode
  //check if arrow keys are pressed
  if (keyUp == LEFT_ARROW) {
    leftKeyDown = false
    //console.log("left arrow lifted");
  }
  if (keyUp == RIGHT_ARROW) {
    rightKeyDown = false
  }
}
function startCanvas() {
  ctx = document.getElementById("myCanvas").getContext("2d")
  timer = setInterval(updateCanvas, 20)
  window.addEventListener('keydown', keyDownFunction)
  window.addEventListener('keyup', keyUpFunction)
}

//generate rocks
function makeRocks(ROCK_WIDTH, ROCK_HEIGHT) {
  ctx.drawImage(rockImage, Math.random() * 100, rockYPosition, ROCK_WIDTH, ROCK_HEIGHT)
  rockYPosition = rockYPosition + 10

}


function updateCanvas() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  ctx.drawImage(backgroundImage, 0, 0, WIDTH, HEIGHT);
  ctx.drawImage(treeLeftImage, 190, -80, TREE_WIDTH, TREE_HEIGHT);
  ctx.drawImage(treeRightImage, 320, -80, TREE_WIDTH, TREE_HEIGHT);

  makeRocks(ROCK_WIDTH, ROCK_HEIGHT);
  //console.log("game started");

  //move character
  if (leftKeyDown) {
    characterXPosition -= characterSpeed
  }
  if (rightKeyDown) {
    characterXPosition += characterSpeed
  }

  //show correct character image for left and right

  if (leftKeyDown) {
    ctx.drawImage(characterLeftImage, characterXPosition, characterYPosition, CHARACTER_WIDTH + turningWidth, CHARACTER_HEIGHT)
    //console.log("left");
  }
  else if (rightKeyDown) {
    ctx.drawImage(characterRightImage, characterXPosition, characterYPosition, CHARACTER_WIDTH + turningWidth, CHARACTER_HEIGHT)
    //console.log("right");
  } else {
    ctx.drawImage(characterMiddleImage, characterXPosition, characterYPosition, CHARACTER_WIDTH, CHARACTER_HEIGHT)
    //console.log("middle");
  }

  /****
  **
  ** Class definition for the satellites
  **
  ****/
  class Rock {
    //this.setRandomImage()
    constructor(images) {
      this.xPosition = Math.random() * WIDTH
      this.yPosition = Math.random() * - HEIGHT - ROCK_HEIGHT
      this.images = images
      this.setRandomImage()
    }
    moveRocks() {
      this.yPosition += ROCK_SPEED
      if (this.yPosition > HEIGHT) {
        this.yPosition = Math.random() * - HEIGHT - ROCK_HEIGHT
        this.xPosition = Math.random() * WIDTH
      }
    }
    setRandomImage() {
      this.image = this.images[Math.floor(Math.random() * this.images.length)]
    }
  }


  //keep character in boundaries
  var bounceBack = 10;
  if (characterXPosition < 0) {
    characterXPosition += bounceBack;
  }
  if (characterXPosition > WIDTH - CHARACTER_WIDTH - 40) {
    characterXPosition -= bounceBack;


  }
  /****
  **
  ** collisions between the rocket and the objects
  **
  ****/
  function characterHitRock(rockX, rockY) {
    var characterHitLeft = characterXPosition
    var characterHitRight = characterXPosition + CHARACTER_WIDTH
    var characterHitTop = characterYPosition + 75
    var characterHitBottom = characterYPosition + 150


    var rockHitLeft = rockX
    var rockHitRight = rockX + ROCK_WIDTH
    var rockHitTop = rockY
    var rockHitBottom = rockY + RIGHT_ARROW

    if (characterHitRight > rockHitLeft
      && characterHitLeft < rockHitRight
      && characterHitTop < rockHitBottom
      && characterHitBottom > rockHitTop) {
      return (true)
    } else {
      return (false)
    }
  }
} 