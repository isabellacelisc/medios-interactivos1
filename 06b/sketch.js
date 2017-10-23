var img;
var x = 0;
var y = 0;


function  preload(){
  img = loadImage ("assets/malla1.jpg");
}

function setup() { 
  createCanvas(1280, 720);
 image (img,0,0);
  // filtro base de la imagen, el segundo valor es entre 0 a 1.
 filter(THRESHOLD, 0.4);
} 

function draw() { 
  img.loadPixels ();
  
    var pix = img.get(x,y);
  print (pix);
  var rojo= pix[0]
  var verde = pix [1];
  var azul = pix [2];
  var trans = pix [3];
  
  pix [3] = 100;
  pix [1] = 255;
  
  
  img.set (x,y, pix);
  
   noStroke();
  fill (rojo,verde,azul,100);
  ellipse (x,y,15,15);
  
  
  x = x+ 15;
  if ( x>1280){
    x=0;
    y=y+15;
  }

  if (mouseIsPressed){
  img.set (x,y,pix);
    stroke (255);
    fill (rojo,verde,azul,100);
  ellipse (x,y,15,15);
  }

}