var fondo1;
var fondo2;
var pulsar;
var estado = 0;
var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3; 
var font;
var value;
var planeta = [];
var numPlaneta = 10;
var nave1 = [];
var puntaje = 0;




function preload(){
  fondo1 = loadImage ("fondo1.jpg");
  fondo2 = loadImage ("fondo2.jpg");
  pulsar = loadImage ("pulsar.jpg");
  font = loadFont ("Anders.ttf");
  planeta = loadImage ("planeta1.jpg");
  nave1 = loadImage ("nave.jpg");


}
function setup() { 
  createCanvas(windowWidth,windowHeight);
 estado = INTRO; 
  
  // planeta = new planetaa();
//   nave1 = new nave2 (); 

} 
function draw() { 
  background (fondo1);
  
 if (estado == INTRO){
 
   fill (224, 47, 131);
   textSize (100);
   textAlign (CENTER);
   textFont (font);
   text ("PULSAR",width/2, height/2);
   
   push();
   fill (11,227,246);
   textSize (20);
   text ("toque la pantalla", width/2, height/2 + 70);
   fill (113,252,168);
  textSize (15);
  text ("para comenzar", width/2, height/2 +92);
   pop();
 }
  else if (estado == JUEGO){
    background (fondo2);
    fill (0);
    textSize (20);
    textAlign (LEFT);
    text ("aleja los planetas antes de que se exploten",10,500)
    fill (255); 
    textSize (30);
    text ("puntaje" + puntaje, 10, 30);
    
  for (var i = 0; i< numPlaneta; i = i+1){
    planeta[i]
    
    
    
  planeta.dibujarse();
  planeta.moverse();
    
    
  // nave1.dibujarse();
  //  nave1.moverse();
    
    if (puntaje > 20) {
      estado = OUTRO;
      puntaje = 0;
    }
  }
 // else {
    background(fondo1, 0,0);
    fill(11,227,246);
    textAlign(CENTER);
    textSize(60);
    text("ganaste", width/2, height/2);
 }
}

  //definiendo planetaa
  function planetaa() {
    
  this.x = random (0, width);
  this.y = random (0, height);
  this.tamano = 15;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
    image (planeta, 0, 0);
  }
  
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

}
}
  function nave1(){ 
    this.x = random (0, width)
    
    this.dibujarse = function (){
      
    }
  }
  
  
   function keyReleased (){
    if (estado == INTRO){
      if (keyCode == 32){
    estado = JUEGO;
      }
  } else if (estado == JUEGO){
    if (keyCode == 32){
      estado = OUTRO;
    }
  } else {
    estado = INTRO;
  }
   }   
  

  
  
  
   function touchMoved (){
     for (var i = 0; i < numPlaneta; i++) {
 if (dist(touches[0].x, touches[0].y, planeta[i].x, planeta[i].y) < 20 && planeta[i].viva) {
      planeta[i].morirse();
     
 }
     }
   }

function touchStarted() {
  estado = JUEGO; 
  // prevent default
  return false;
}

  
  //definiendo planetaa
 
  
  
  
  
