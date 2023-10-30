/**
* Title: Skiing Adventures - 10COM game
* Author: Clara van Stokkum
* Date: 
* Version: 1
* Purpose: Make it as far as possible
**/

// test git


//function startGame(){
console.log("Skiing Adventures!!")
var ctx
window.onload=startCanvas

//game screen variables
const WIDTH = 1000
const HEIGHT = 750

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


var characterImage;
var numberOfImages = CHARACTER_IMAGE.length
var imagesToLoad = numberOfImages

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

function startCanvas(){
    ctx = document.getElementById("myCanvas").getContext("2d")
    timer = setInterval(updateCanvas, 30)
}



function updateCanvas(){
  
    ctx.clearRect(0,0,WIDTH, HEIGHT)
    ctx.drawImage(backgroundImage,0,0, WIDTH, HEIGHT);
    ctx.drawImage(treeLeftImage, 190, -80, TREE_WIDTH, TREE_HEIGHT );
    ctx.drawImage(treeRightImage, 320, -80, TREE_WIDTH, TREE_HEIGHT );
    ctx.drawImage(rockImage, 230, 10, ROCK_WIDTH, ROCK_HEIGHT);

      //show correct character image for left and right
    if (leftKeyDown) {
      characterImage = CHARACTER_IMAGES[1]
    } else if (rightKeyDown) {
      characterImage = CHARACTER_IMAGES[2]
    } else {
      characterImage = CHARACTER_IMAGES[0]
    }
    ctx.drawImage(characterImage, characterXPosition, characterYPosition, characterImage.width, characterImage.height)
    //move character
    if (leftKeyDown) {
        characterXPosition -= characterSpeed
      }
      if (rightKeyDown) {
        characterXPosition += characterSpeed
      }
}

 
//}

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