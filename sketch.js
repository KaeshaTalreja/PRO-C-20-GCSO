var car,wall;
var speed,weight,deformation;
function setup() {
  createCanvas(800,400);
  //creating the objects of the application
  car=createSprite(50,200,20,30);
  wall=createSprite(700,200,10,300);
  wall.shapeColor="brown";
  car.shapeColor="blue";
  //assign some random value to the speed and weight of car
  speed=random(55,90);
  weight=random(400,1500);

  //car will move towards the wall
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  textSize(22);

  text("Global Car Safety Organization",300,50);

  textSize(18);
  text("Car's weight="+weight,300,300);
  text("Car's speed="+speed,300,330);

  if(wall.x-car.x < (car.width+wall.width)/2){
  	deformation=(0.5*weight*speed*speed)/22500;
  	if(deformation<80){
  		car.shapeColor="green";
  	}
  	else if(deformation<180 && deformation>80){
  		car.shapeColor="yellow";
  	}
  	else{ //deformation is more than 180
  		car.shapeColor="red";
  	}
  	car.velocityX=0;
  }
  text("Deformation value="+deformation,300,360);

}