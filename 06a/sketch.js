var imagen1;
var imagenmask;
var x = 0;
var y= 0;

function preload (){
imagen1 = loadImage ('123.jpeg');
imagenmask = loadImage ('12.png');
}
function setup() { 
  createCanvas(500,500);
image (imagen1, 0,0);
} 

function draw() { 
  

  
  // image (imagenmask,0,0);
  
  
  imagenmask.loadPixels();
  
  
  var pix = imagenmask.get(x,y);
  print (pix);
  var rojo= pix[0]
  var verde = pix [1];
  var azul = pix [2];
  var trans = pix [3];

imagenmask.set (x,y, pix);
  
    noStroke();
  fill (rojo,verde,azul,100);

  ellipse (x,y,10,10);
  
  
  x = x+10;
  if ( x>500){
    x=0;
    y=y+5;
  }
  
 // for ( var x=0; x<width; x++){
 //    for (var y=0; y<height; y++){
 //      var index = (x + y *width) *4;
 //      var r = imagen.pixels [index + 0];
 //      var g = imagen.pixels [index + 1];
 //      var b = imagen.pixels [index + 2];
 //      var bright = (r+g+b)/3;
 //      fill (bright);
  // }
// }
  
  
}
