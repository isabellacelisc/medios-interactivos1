
//posición botones de arriba a abajo
var b1x = 50;
var b1y = 50;
var b1t = 25;

var b2x = 50;
var b2y = 85;
var b2t = 15;

var b3x = 50;
var b3y = 120;
var b3t = 25;

var b4x = 50;
var b4y = 155;
var b4t = 15;

var b5x = 50;
var b5y = 190;
var b5t = 25;

var b6x = 50;
var b6y = 225;
var b6t = 15;

var b7x = 35;
var b7y = 250;
var b7t1 = 30;
var b7t2 = 5;

var b8x = 35;
var b8y = 270;
var b8t1 = 30;
var b8t2 = 5;

// borrador 
var b9x = 90;
var b9y= 20;
var b9t1 = 40;
var b9t2 = 20;

var b10x = 50;
var b10y = 290;
var b10t1 = 5;
var b10t2 = 30;

// boton blanco pequeño 
var p1x = 150;
var p1y = 30;
var p1t = 7;

var b11x= 50;
var b11y =330;
var b11t1 = 5;
var b11t2 = 30;

//cambio de color fondo
var f1x = 200;
var f1y = 10;
var f1t = 40;

var value = 0;



var funcion = 0;
var colorSelect = 0;
 

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background (0);
} 


function draw() { 
  // botones
  noStroke ();
  fill (91,14,214);
  ellipse (b1x,b1y,b1t,b1t);
  fill (23,203,235);
  ellipse (b2x,b2y,b2t,b2t);
  fill (162,25,174);
  ellipse (b3x,b3y,b3t,b3t);
  fill (18,252,211);
  ellipse (b4x,b4y,b4t,b4t);
  fill (18,24,245);
  ellipse (b5x,b5y,b5t,b5t);
  fill (252,18,145);
  ellipse (b6x,b6y,b6t,b6t);
  fill (54,32,67);
  rect (b7x,b7y,b7t1,b7t2);
  fill (255,255,255);
  rect (b8x,b8y,b8t1,b8t2);
  stroke (255);
  noFill ();
  rect (b9x,b9y,b9t1,b9t2);
  noStroke ();
  fill (111);
  rect (b10x,b10y,b10t1,b10t2);
  noStroke ();
  fill (255);
  ellipse (p1x,p1y,p1t,p1t);
  fill (54,32,67);
  rect (b11x, b11y,b11t1,b11t2);
  // cambio fondo
  fill (255);
  rect (f1x,f1y,f1t,f1t);
  
  
  
  if (mouseIsPressed){
   
    if (mouseX > f1x && mouseX < f1x + f1t && mouseY > f1y &&
        mouseY < f1y + f1t){
      colorSelect = 10;
    }
    
  
    
    if (mouseX > b1x && mouseX < b1x + b1t && mouseY > b1y &&
        mouseY < b1y + b1t){
      colorSelect= 0;
      funcion = 0;
    }  
    if (mouseX > b2x && mouseX < b2x + b2t && mouseY > b2y &&
        mouseY < b2y + b2t){
      colorSelect = 1;
      funcion = 1;
    }
    
     if (mouseX > b3x && mouseX < b3x + b3t && mouseY > b3y &&
        mouseY < b3y + b3t){
      funcion= 0;
      colorSelect = 2;
    }  
     if (mouseX > b4x && mouseX < b4x + b4t && mouseY > b4y &&
        mouseY < b4y + b4t){
      funcion =1;
      colorSelect =3;
     }  
    if (mouseX > b5x && mouseX < b5x + b5t && mouseY > b5y &&
        mouseY < b5y + b5t){
      funcion=0;
      colorSelect = 4;
    }
    if (mouseX >b6x && mouseX <b6x + b6t && mouseY > b6y &&
        mouseY < b6y + b6t){
      funcion = 1;
      colorSelect = 5;
    }
    if (mouseX >b7x && mouseX < b7x + b7t1 && mouseY > b7y &&
        mouseY < b7y + b7t2){
      funcion = 2;
      colorSelect = 6;
    }
    if (mouseX > b8x && mouseX < b8x + b8t1 && mouseY > b8y && 
        mouseY <b8y + b8t2){
      funcion = 3;
      colorSelect = 7;
    }
    // borrador 
    if (mouseX > b9x && mouseX < b9x + b9t1 && mouseY >b9y && 
        mouseY < b9y + b9t2){
      funcion = 4;
    }
      
    if (mouseX > b10x && mouseX < b10x + b10t1 && mouseY > b10y &&
        mouseY < b10y + b10t2){
      funcion = 5;
      colorSelect = 8;
    }
    if (mouseX >p1x && mouseX < p1x + p1t && mouseY >p1y &&
        mouseY < p1y + p1t){
      funcion = 6;
      colorSelecrt = 9;
    }
    if (mouseX > b11x && mouseX < b11x + b11t1 && mouseY > b11y &&
        mouseX < b11y + b11t2){
      funcion = 5;
      colorSelect = 6;
    }
    
    
    
  if (colorSelect == 0){
    noStroke ();
    fill (91,14,214);
  }
  if (colorSelect == 1){
    noStroke ();
    fill (23,203,235);
  }
  if (colorSelect == 2){
    noStroke ();
    fill (162,25,174);
  }
  if (colorSelect == 3){
    noStroke ();
    fill (18,252,211);
  }
  if (colorSelect == 4){
    noStroke ();
    fill(18,24,245);
  }
  if (colorSelect ==5){
    noStroke ();
    fill(252,18,145);
  }  
  if (colorSelect == 6){
    noStroke ();
    fill (54,32,67);
  }
  if (colorSelect ==7){
    noStroke ();
    fill (255);
  }
  if (colorSelect == 8){
    noStroke ();
    fill (111);
  }
  if (colorSelect == 9){
    noStroke ();
    fill (255);
  }
  if (colorSelect == 10){
    background(236, 14, 91);
  }
    
  if (funcion == 0){
    ellipse (mouseX, mouseY, 25, 25);
  }
  if (funcion == 1){
    ellipse (mouseX, mouseY, 15, 15);  
  }
  if (funcion == 2){
    rect (mouseX, mouseY, 30, 5);
  }
  if (funcion ==3){
    rect (mouseX, mouseY, mouseX, 5);
    }
    // funcion borrador.
  if (funcion ==4){
    background (0);
    
    noStroke ();
  fill (91,14,214);
  ellipse (b1x,b1y,b1t,b1t);
  fill (23,203,235);
  ellipse (b2x,b2y,b2t,b2t);
  fill (162,25,174);
  ellipse (b3x,b3y,b3t,b3t);
  fill (18,252,211);
  ellipse (b4x,b4y,b4t,b4t);
  fill (18,24,245);
  ellipse (b5x,b5y,b5t,b5t);
  fill (252,18,145);
  ellipse (b6x,b6y,b6t,b6t);
  fill (54,32,67);
  rect (b7x,b7y,b7t1,b7t2);
  fill (255,255,255);
  rect (b8x,b8y,b8t1,b8t2);
  stroke (255);
  noFill ();
  rect (b9x,b9y,b9t1,b9t2);
  noStroke ();
  fill (111);
  rect (b10x,b10y,b10t1,b10t2);
  noStroke ();
  fill (255);
  ellipse (p1x,p1y,p1t,p1t);
  fill (54,32,67);
  rect (b11x, b11y,b11t1,b11t2);
  } 
    
  if (funcion == 5){
    rect (mouseX, mouseY, 5, 30);
  }
    // punto blanco pequeño
 if  (funcion == 6){
   ellipse (p1x,p1y,p1t,p1t);
 }
  }
}