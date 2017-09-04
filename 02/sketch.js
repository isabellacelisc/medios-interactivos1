


function setup() { 
  createCanvas(1380,360);
background(255,255,255);
  //de arriba a abajo
  noStroke();
  fill(220,81,0,200);
  rect(0,0,1400,70);
  fill(201,111,026,210);
  rect(0,14,1400,28);
  fill (209,141,68);
  rect(0,70,1400,28)

  //línea morado claro
  fill(157,84,105);
  rect(0,98,1400,28);

  
  fill(92,64,60,235);
  rect(0,126,1400,28);
  fill(0,0,0);
  rect(0,154,1400,42);
  
  fill(133,106,89,235);
  rect(0,196,1400,42);
  //línea azul 
  fill(17,73,140);
  rect(0,238,1400,42);
  fill(162,65,44);
  rect(0,280,1400,42);
  noStroke();
  
  fill (209,141,68);
  for(var x=28; x<=1400;x=x+112){
    rect(x,0,28,322);
  }

  fill(0,0,0);
  for (var x1=84; x1<=1400;x1=x1+112){
    rect(x1,196,28,304);
  }

   fill(178,098,034);
  for(var n=392; n<=994; n=n+112){
    rect(n,196,56,42);
  }
  //grises
  fill(133,106,89,235);
  for(var g=448; g<=994; g=g+112){
    rect(g,196,56,42);
  }
  //morados
  fill(44,24,39);
  for(var m=392; m<=994; m=m+112){
    rect(m,238,56,42);
  }
  fill(17,73,140);
  for(var a=448; a<=994; a=a+112){
    rect(a,238,56,42);
  }
  
  fill(163,127,62);
  for(var am=392; am<=994; am=am+112){
    rect(am,280,56,42);
  }
  fill(162,65,44);
  for(var ro=448; ro<=996; ro=ro+112){
    rect(ro,280,56,42)
  }

  //rectángulos delgados 
  fill(84,20,33);
  for(var r=0; r<=1400; r=r+112){
    rect(r,322,56,14);
  }
  fill(17,73,140);
  for(var az=56; az<=1400; az=az+112){
    rect(az,322,56,14);
  }
  fill(167,114,88);
  for(var n1=0; n1<=1400; n1=n1+112){
    rect(n1,336,56,14);
  }
  fill(38,16,14);
  for(var r1=56; r1<=1400; r1=r1+112){
    rect(r1,336,56,14);
  }
  fill(18,44,42);
  for(var v=0; v<=1400; v=v+112){
     rect(v,350,56,14);
  }
  fill(0,0,0);
  for(var n=56; n<=1400; n=n+112){
    rect(n,350,56,14);
  }
  
  fill(84,21,53);
  rect(392,322,672,14);

  fill(84,20,33);
  rect(392,336,672,14);
  
  fill(0,0,0);
  rect(392,350,672,14);
  

  //líneas moradas cortas
  fill(157,84,105);
  for(var l=336; l<=1050; l=l+60){
    rect(l,98,21,98);
  }
    
  fill(163,118,75);
    for(var b=357; b<=1050; b=b+60){
      rect(b,0,21,196);
  }
  
  fill(192,154,105);
  for(var b1=318; b1<=1050; b1=b1+60){
  rect(b1,0,21,155);
 } 
  fill(200,170,136);
  for(var c=318; c<=1050; c=c+60){
    rect(c,18,21,21);
  }
}