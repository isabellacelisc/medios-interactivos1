
var angulo = 0;
var col = {
  r: 255,
  g: 0,
  b: 0,
}
var pos = {
  x: 200,
  y:100,
  z: 10,
}
var x=0;
var dirx= 1;
var velx= 2;

var y=0;
var diry=1;
var vely=2;

function setup() { 
  createCanvas(600,400, WEBGL);
   
} 

function draw() {

  col.r = random (0,255);
  col.g = random (0,200);
  col.b = random (100,255);
  
  
  background (0);
  
  pos.x = random (-600,600);
  pos.y = random (-400,400);
  pos.z = random (-200, 50);
  
  //luces
  var dirX = (mouseX / width - 0.5) * 3;
  var dirY = (mouseY/height - 0.5)* (-3);

  pointLight (col.r, 0, col.b, dirX, dirY);
  directionalLight(col.r, col.g, col.b, dirX, -dirY, 0.5);
  
  
 //for (var Z=(-500); Z<=(-2000); Z=Z-500){
  //caja inferior izquierda
	push();
  translate (-200, 150, -100);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  box (50,100,70);
  pop();
  push();
  translate (-200, 150, -500);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  box (50,100,70);
  pop();
   push();
  translate (-200, 150, -1000);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  box (50,100,70);
  pop();

  
  //caja superior derecha
  push ();
  translate (200, -150, -100);
  rotateZ(frameCount * (-0.02));
  rotateX(frameCount * (-0.02));
  box (50,100,70);
  pop();
  
   push ();
  translate (200, -150, -500);
  rotateZ(frameCount * (-0.02));
  rotateX(frameCount * (-0.02));
  box (50,100,70);
  pop();
  
	 push ();
  translate (200, -150, -1000);
  rotateZ(frameCount * (-0.02));
  rotateX(frameCount * (-0.02));
  box (50,100,70);
  pop();
	
  //caja inferior derecha
  push();
  translate (200,150, -100);
  specularMaterial (200);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  box (50,100,70);
  pop();
  
  push();
  translate (200,150, -500);
  specularMaterial (200);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  box (50,100,70);
  pop();
  
	 push();
  translate (200,150, -1000);
  specularMaterial (200);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  box (50,100,70);
  pop();
  
  //caja superior izquierda
  push ();
  translate (-200, -150,-100);
  ambientMaterial (col.r, 100, 150);
  rotateX(frameCount * (-0.02));
  rotateY(frameCount * (-0.02));
  rotateZ(frameCount * (-0.02));
  box (50,100,70);
  pop();

  push ();
  translate (-200, -150,-500);
  ambientMaterial (col.r, 100, 150);
  rotateX(frameCount * (-0.02));
  rotateY(frameCount * (-0.02));
  rotateZ(frameCount * (-0.02));
  box (50,100,70);
  pop();
	
	 push ();
  translate (-200, -150,-1000);
  ambientMaterial (col.r, 100, 150);
  rotateX(frameCount * (-0.02));
  rotateY(frameCount * (-0.02));
  rotateZ(frameCount * (-0.02));
  box (50,100,70);
  pop();
  // aro gigante
  push();
  
  rotateZ(angulo);
  rotateX(frameCount * (-0.01));
  rotateY(frameCount * (0.02));
  specularMaterial (0,col.g,100);
 torus (300,20);
  pop();
  angulo = angulo + PI/100;
  
  //aro mediano
   push();
  rotateX(angulo);
  rotateY(frameCount * (-0.01));
  rotateZ(frameCount * (0.02));
 torus (100,5);
  pop();
  angulo = angulo + PI/100;
  
  //aro pequeño
   push();
  rotateY(angulo);
  rotateX(frameCount * (-0.01));
  rotateZ(frameCount * (0.02));
  ambientMaterial (col.r, 100, col.b);
 torus (30,1);
  pop();
  angulo = angulo + PI/300;
  //esfera
  push();
  rotateZ(frameCount * (0.04));
  specularMaterial(col.r);
  sphere (15,10);
  pop();
  
  angulo = angulo + PI/300;
  
  
  //segunda línea de arriba a abajo
  push(); 
  fill (col.r,col.g,200);
 beginShape ();
  vertex (-400,200,-50);
  vertex (100,200,-50);
  vertex (300,50, -50);
  vertex (600,300,-50);
  endShape ();
  pop();
  
  //prímera línea de arriba a abajo
  push();
  beginShape ();
  vertex (400,-200,-50);
  vertex (-100, -200, -50);
  vertex (-300,-50, -50);
  vertex (-600, -300, -50);
  endShape ();
  pop();
  
  
  //strobers
   pointLight (100, 100, 100, dirX, dirY);
  directionalLight(255, 255, 255, dirX, -dirY, 0.5);
  push();
  translate (pos.x,pos.y,-200);
  ambientMaterial (255);
  sphere (5,20);
  pop();
  
  push();
  translate (pos.x, pos.y, pos.z);
  sphere (2,5);
  pop();
  
  
  
  
}