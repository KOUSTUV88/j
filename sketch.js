
function setup() {
  createCanvas(8000,4000);
  
}

function draw() {
  background("orange");  
  createSprite(500,500,200,200)
  createSprite(10,500,200,200)
  createSprite(500,20,200,200)
  createSprite(50,500,200,200)
  createSprite(700,700,200,200)
  
  drawSprites();
}

