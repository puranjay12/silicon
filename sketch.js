

var   l1, l2, l3, ground

var gameState = 0
var bkimg, bkimg2, base, first, bckimg

function preload(){
  bkimg=loadImage("b1.jpg")
  bkimg2=loadImage("b2.jpg")
base=loadImage("OIP.jpg")
first=loadImage("p1.jpg")
bckimg=loadImage("back.jpg")
}
function setup(){


}

function draw() {
background(255)
backgroundimg()

fill("white")


if(mousePressedOver(l1)){
l1.depth = -100
l2.depth = -100
l1 = null
l2 = null
gameState = 1



}


if(mousePressedOver(l2)){
  l1.depth = -100
  l2.depth = -100
  l1 = null
l2 = null
  gameState = 2
  

}



if(gameState === 0){
    
  background(255)
 
  l1 = createSprite(200,150,100,10)
  l1.shapeColor = "blue"
  l1.addImage(base)
   l1.scale = 0.1
   
   l2 = createSprite(200,250,100,10)
  l2.shapeColor = "orange"
  l2.addImage(first)
  l2.scale = 0.1

  fill(0)
  text("select your parking floor",150,10)
  drawSprites()
}

//drawSprites()
}

function backgroundimg(){
  
 
  if(gameState === 1){
    
    
    background(bkimg)
 
    var back = createSprite(10,10,10,10)
    back.shapeColor = "red"
    back.addImage(bckimg)
   back.scale =0.1
    
  }
  if(gameState === 2){
   
  background(bkimg2)
 
 
   var back = createSprite(10,10,10,10)
   back.shapeColor = "red"
   back.addImage(bckimg)
   back.scale =0.1
    
  }
 
  if(mousePressedOver(back)){
    gameState = 0
    background(255)
  
   
  }
  
  
}


