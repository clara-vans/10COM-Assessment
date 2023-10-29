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
const WIDTH = 1000
const HEIGHT = 750

//background variables
var backgroundImage = new Image()
backgroundImage.src = "background.png"

const TREE_WIDTH = 50
const TREE_HEIGHT = 100
const CHARACTER_HEIGHT = 150
const CHARACTER_WIDTH = 80
const ROCK_WIDTH = 25
const ROCK_HEIGHT = 20



var treeLeftImage = new Image()
treeLeftImage.src = "tree-left.png"

var treeRightImage = new Image()
treeRightImage.src = "tree-right.png"



var characterMiddleImage = new Image ()
characterMiddleImage.src = "character-middle.png"

var characterRightImage = new Image ()
characterRightImage.src = "character-right.png"

var characterLeftImage = new Image ()
characterLeftImage.src = "character-left.png"

var rockImage = new Image ()
rockImage.src = "rock.png"


function startCanvas(){
    ctx = document.getElementById("myCanvas").getContext("2d")
    timer = setInterval(updateCanvas, 30)
}


function updateCanvas(){
	ctx.clearRect(0,0,WIDTH, HEIGHT)
    ctx.drawImage(backgroundImage,0,0, WIDTH, HEIGHT);
    ctx.drawImage(treeLeftImage, 190, -80, TREE_WIDTH, TREE_HEIGHT );
    ctx.drawImage(treeRightImage, 320, -80, TREE_WIDTH, TREE_HEIGHT );
    ctx.drawImage(characterMiddleImage, 240, 320, CHARACTER_WIDTH, CHARACTER_HEIGHT )
    ctx.drawImage(rockImage, 230, 10, ROCK_WIDTH, ROCK_HEIGHT)
}
