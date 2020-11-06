

var car,wall;


var speed, weight; 
function preload(){
	whitecar=loadImage("white-car.png")
	redcar=loadImage("red-car.png")
	greencar=loadImage("car-green.png")
	yellowcar=loadImage("yellow-car.png")
	wallimg=loadImage("wall-small.png")
}

function setup() {
  createCanvas(1300, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   
	car.addImage(whitecar)
	car.velocityX = speed;
	car.shapeColor=color(255);

	  wall=createSprite(1250,200, 60, height/2)
	wall.addImage(wallimg)
  	
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
		car.addImage(redcar)
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
		car.addImage(yellowcar)
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
		car.addImage(greencar)
	}
  }  
  
  drawSprites();
 
}



