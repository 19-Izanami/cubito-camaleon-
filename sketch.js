var FixedRect,MovingRect;


function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(400, 200, 50, 50);
  FixedRect.shapeColor = "green";
  MovingRect = createSprite(200, 200, 50, 50);
  MovingRect.shapeColor = "green";


}

function draw() {
  background(0);  

  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;

  /* que si toca el cubo del centro cambia de color rojo sino vuelve al color verde
  haciendo condicional de que and --> && aplica la otra condicion
  */


    if(MovingRect.x - FixedRect.x < FixedRect.width/2 + MovingRect.width/2 &&
    FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2){
      MovingRect.shapeColor = "red";
      FixedRect.shapeColor = "red";
    }
      else{ 
      MovingRect.shapeColor = "green";
      FixedRect.shapeColor = "green"; 
      }
  drawSprites();
}