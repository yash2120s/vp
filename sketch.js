//Create variables here

var dog , dogImg, dogImg1;

var happyDog,database,foodStock;
foodS = 20;

var database;
function preload()
{
	//load images here
  dogImg = loadImage("dog1.png")
 dogImg1= loadImage("dogImg1.png")
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  
  dog = createSprite(200,200,100,100)
  dog.addImage(dogImg)
  dog.scale = 0.2
  
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  textSize(22);
 
}


function draw() {  
background(46,139,87)
  
  
if(keyWentDown(UP_ARROW)){
  
   writeStock(foodS)
   dog.addImage(dogImg1)
  


}

drawSprites();
fill("black")
stroke("black")
text("Stock remaining " + foodS,150,100)
textSize(15)
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function readStock(data){
foodS=data.val();
console.log(foodS)
}

function writeStock(x){
  if(x<=0){
    x= 0
     }
     else{
       x= x-1
     }
database.ref('/').update({
 
  Food:x
 
})
}



