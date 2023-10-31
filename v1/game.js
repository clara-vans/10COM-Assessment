/**
* Title: Skiing Adventures - 10COM game
* Author: Clara van Stokkum
* Date: 
* Version: 1
* Purpose: Make it as far as possible
**/
console.log("Skiing Adventures!!")
var ctx
window.onload=startCanvas

//game screen variables
const WIDTH = 500
const HEIGHT = 475

//background variables
var backgroundImage = new Image()
backgroundImage.src = "background.png"

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
const CHARACTER_WIDTH = 80

var characterMiddleImage = new Image ()
characterMiddleImage.src = "character-middle.png"

var characterRightImage = new Image ()
characterRightImage.src = "character-right.png"

var characterLeftImage = new Image ()
characterLeftImage.src = "character-left.png"

var isAlive = true
var characterXPosition = 440
var characterYPosition = 550
var characterSpeed = 10

//rock variables
const ROCK_WIDTH = 25
const ROCK_HEIGHT = 20

var rockImage = new Image ()
rockImage.src = "rock.png"

//checking for keyDown
function keyDownFunction(keyboardEvent) {
    var keyDown = keyboardEvent.keyCode
//check if arrow keys are pressed
if (keyDown == LEFT_ARROW) {
    leftKeyDown = true
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
    }
    if (keyUp == RIGHT_ARROW) {
      rightKeyDown = false
    }
}
function startCanvas(){
    ctx = document.getElementById("myCanvas").getContext("2d")
    timer = setInterval(updateCanvas, 30)
}


function updateCanvas(){
	ctx.clearRect(0,0,WIDTH, HEIGHT)
    ctx.drawImage(backgroundImage,0,0, WIDTH, HEIGHT);
    ctx.drawImage(treeLeftImage, 190, -80, TREE_WIDTH, TREE_HEIGHT );
    ctx.drawImage(treeRightImage, 320, -80, TREE_WIDTH, TREE_HEIGHT );
    ctx.drawImage(rockImage, 230, 10, ROCK_WIDTH, ROCK_HEIGHT)

    //move character
    if (leftKeyDown) {
        characterXPosition -= characterSpeed
      }
      if (rightKeyDown) {
        characterXPosition += characterSpeed
      }
    
  //show correct character image for left and right
  var turningWidth = 8
  if (leftKeyDown) {
    ctx.drawImage(characterLeftImage, characterXPosition, characterYPosition, CHARACTER_WIDTH + turningWidth, CHARACTER_HEIGHT)
  } else if (rightKeyDown) {
    ctx.drawImage(characterRightImage, characterXPosition, characterYPosition, CHARACTER_HEIGHT + turningWidth, CHARACTER_HEIGHT)
  } else {
    ctx.drawImage(characterMiddleImage, characterXPosition, characterYPosition, CHARACTER_WIDTH, CHARACTER_HEIGHT)
  }
} 