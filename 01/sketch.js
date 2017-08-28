function setup() { 
  createCanvas(1400, 400);
  background (247,240,222);

  strokeWeight (3);
  stroke (0,0,0);

  // línea izquierda (de arriba a abajo)
  line(120,400,120,130);
  line(30,144,288,258);
  line(50,258,172,258);
  line(60,288,186,280);

  //tríangulo
  strokeWeight (3);
  stroke(0,0,0);
  fill(153,187,212);
  beginShape()
  vertex(125,345);
  vertex(70,410);
  vertex(185,410);
  endShape(CLOSE);
  
  // figura curva negra
  
  strokeWeight(2);
  stroke(0,0,0);
  point(122,400);
  point(147,379);
  point(167,344);
  point(168,302);
  
  curve(122,400,122,400,147,379,167,344);
  curve(122,400,147,379,167,344,168,302);
  curve(147,379,167,344,168,302,168,302);
  
  //curva negra larga 1
  strokeWeight(4);
  stroke(0,0,0);
  fill(0,0,0,0);
  point(230,400);
  point(250,302);
  point(320,180);
  point(475,77);
  curve(230,400,230,400,250,302,320,180);
  curve(230,400,250,302,320,180,475,77);
  curve(250,302,320,180,475,77,475,77);
  
  //curva negra larga 2 
  point(245,400);
  point(265,330);
  point(330,240);
  point(413,202);
  
  curve(245,400,245,400,265,330,330,240);
  curve(245,400,265,330,330,240,413,202);
  curve(265,330,330,240,413,202,413,202);
  


  // triángulo pequeño amarillo
  stroke(230,225,47);
  fill(230,225,47);
  beginShape();
  vertex(662,107);
  vertex(625,177);
  vertex(717,177);
  endShape(CLOSE);
  
  
 //triángulo gigante rosado
  
  strokeWeight (5);
  stroke(0,0,0);
  fill(244,225,226);
  beginShape();
  vertex(606,34);
  vertex(510,410);
  vertex(713,410);
  endShape(CLOSE);
  

 //círculo dentro del triángulo
  strokeWeight (1);
  stroke(224,215,202,100);
  fill(244,225,226);
  ellipse(603,344,78,78);
  strokeWeight (2);
  stroke(214,215,202,150);
  fill(244,225,226);
  ellipse(603,344,73,73);
  strokeWeight (2);
  stroke(214,215,202,180);
  fill(244,225,226);
  ellipse(603,344,70,70);
  strokeWeight (2);
  stroke(214,215,202,200);
  fill(244,225,226);
  ellipse(603,344,68,68);
  strokeWeight (2);
  stroke(214,215,202,220);
  fill(244,225,226);
  ellipse(603,344,65,65);
  strokeWeight (2);
  stroke(182,195,186,200);
  fill(244,225,226);
  ellipse(603,344,62,62);
  strokeWeight (2);
  stroke(182,195,186,200);
  fill(244,225,226);
  ellipse(603,344,59,59);
  strokeWeight (2);
  stroke(182,195,186,200);
  fill(244,225,226);
  ellipse(603,344,57,57);
   strokeWeight (3);
  stroke(182,195,186,200);
  fill(244,225,226);
  ellipse(603,344,55,55);
   strokeWeight (3);
  stroke(182,195,186,220);
  fill(244,225,226);
  ellipse(603,344,52,52);
   strokeWeight (4);
  stroke(182,195,186);
  fill(244,225,226);
  ellipse(603,344,48,48);
  
  strokeWeight (1);
  stroke(0,0,0);
  fill(244,225,226);
  ellipse(603,344,45,45);
  
  strokeWeight(2);
  stroke(0,0,0,220);
  point(603,344);
  point(604,345);
  stroke(0,0,0,210);
  point(610,350);
  point(597,344);
  point(590,341);
  stroke(0,0,0,210);
  point(593,333);
  stroke(0,0,0,200);
  point(612,335);
  point(586,346);
  point(616,346);
  stroke(0,0,0,180);
  point(598,357);
  point(598,357);
  point(597,360);
  point(605,355);
  point(603,351);
  point(605,330);
  point(603,338);
  point(599,335);
  point(610,360);
  point(607,352);
  point(620,339);
  point(622,345);
  point(611,353);
   
  //círculo rojo medio
  strokeWeight(3);
  stroke(0,0,0);
  fill(183,0,46);
  ellipse(360,283,38,38);

  //medios círculos
  strokeWeight(1);
  stroke(0,0,0);
  fill(253,244,247);
  ellipse(360,410,126,126);
  fill(0,0,0);
  ellipse(360,410,84,84);
  stroke(255,0,0,180);
  fill(183,0,46);
  ellipse(360,410,63,63);
  stroke(253,244,247);
  fill (253,244,247);
  ellipse(360,410,51,51);
  
  //círculo gris
  stroke(132,130,144,185);
  fill(132,130,144,180);
  ellipse(509,126,60,60);

  //líneas sobre el triángulo
  strokeWeight(3);
  stroke(0,0,0,170);
  line(371,125,770,341);
  line(385,215,770,341);
  

  //círculo morado
	strokeWeight(4);
  stroke(0,0,0,200);
	fill(0,0,0,0);
	ellipse(747,197,64,64);
	stroke(166,163,167,200);
	fill(0,0,0,0);
	ellipse(747,197,60,60);
	stroke(166,163,167,180);
	fill(0,0,0,0);
	ellipse(747,197,56,56);
	strokeWeight(2);
	stroke(255,255,255,200);
	fill(255,255,255,0);
	ellipse(747,197,54,54);
	strokeWeight(3);
	stroke(166,163,167,100);
	fill(0,0,0,0);
	ellipse(747,197,52,52);
  
  stroke(65,55,143,0);
  fill(64,55,143,220);
  ellipse(747,197,40,40);

  //líneas verticales al lado del círculo morado
  strokeWeight(3);
  stroke(0,0,0,235);
  line(803,0,803,249);
  line(814,0,814,249);
  strokeWeight(2)
  line(772,54,846,50);
  line(773,60,845,56);
  line(783,226,845,224);
  line(783,232,847,230);
  line(784,238,845,236);

  //medio círculo sobre líneas verticales
  stroke(0,0,0);
  fill(0,0,0,0);
  ellipse(819,112,56,56);
  stroke(247,240,222);
  fill(247,240,222);
  rect(832,68,40,80);
  
  // cuadrado amarrillo con borde negro
  
  stroke(0,0,0,0);
  fill(231,231,231,190);
  rect(1058,58,60,60);
  strokeWeight(7);
  stroke(0,0,0);
  fill(0,0,0,0);
  rect(1071,71,34,34);
  stroke(0,0,0,0);
  fill(232,210,143);
  rect(1075,75,27,27);
  
  
  
  //parte inferior derecha
  //rectángulo rosado
  stroke(0,0,0,0);
  fill(219,128,155);
  rect(814,301,112,90);
  
  strokeWeight(5);
  stroke(233,114,95);
  line(742,410,780,386);
  strokeWeight(1);
  stroke(0,0,0,180);
  line(742,410,780,388);
  strokeWeight(0,5);
  stroke(0,0,0);
  fill(0,0,0);
  beginShape();
  vertex(836,360);
  vertex(780,400);
  vertex(785,400);
  endShape(CLOSE);
  beginShape();
  vertex(854,366);
  vertex(814,400);
  vertex(817,400);
  endShape(CLOSE);

  //rectángulo rojo casillas
  stroke(0,0,0,0);
  fill(185,0,41);
  beginShape();
  vertex(880,315);
  vertex(854,327);
  vertex(876,360);
  vertex(897,347);
  endShape(CLOSE);
  
  //rectángulo blanco con puntos
  stroke(0,0,0,0);
  fill(207,207,207,240);
  beginShape();
  vertex(876,360);
  vertex(897,347);
  vertex(913,375);
  vertex(892,390);
  endShape(CLOSE);
  
  //superficie blanca
  fill(246,246,246);
  beginShape();
  vertex(908,302);
  vertex(908,400);
  vertex(1010,400);
  vertex(1150,323);
  vertex(1150,246);
  vertex(1400,114);
  vertex(1400,42);
  endShape(CLOSE);
    
    
  fill(209,38,96);
  beginShape();
  vertex(892,390);
  vertex(920,390);
  vertex(912,379);
  endShape(CLOSE);
  
  fill(196,0,91);
  beginShape();
  vertex(912,379);
  vertex(925,373);
  vertex(926,391);
  vertex(925,391);
  endShape(CLOSE);
  
  fill(0,0,0);
  beginShape();
  vertex(925,373);
  vertex(942,362);
  vertex(958,393);
  vertex(937,400);
  vertex(924,400);
  vertex(920,391);
  vertex(926,391);
  endShape(CLOSE);
  
  fill(210,210,210);
  beginShape();
  vertex(892,390);
  vertex(896,400);
  vertex(924,400);
  vertex(920,391);
  endShape(CLOSE);
  
  //cuadrado gris izq
  strokeWeight(2)
  stroke(0,0,0)
  fill(147,146,154);
  beginShape();
  vertex(1268,110);
  vertex(1285,144);
  vertex(1322,124);
  vertex(1305,91);
  endShape(CLOSE);
  
  //cuadrado puntos 
  beginShape();
  fill(246,244,243);
  vertex(1106,195);
  vertex(1123,230);
  vertex(1150,216);
  vertex(1135,185);
  endShape(CLOSE);
  
  
  strokeWeight(5)
  stroke(0,0,0);
  //línea 1ra de izquierda a derecha
  line(854,327,896,400);
 
  
 // 3ra línea debajo del círculo amarillo/azul
  strokeWeight(3);
  //4ta línea arriba a abajo
  line(941,400,1220,255);
  //2da línea izq a der.
  line(880,313,924,400);
  //línea 3,4,5,6 abajo del círculo amarrillo
  line(930,288,988,400);
  //7ta línea izq a der.
  line(1220,255,1238,284);  
  

  //triángulo cafe/naranja
  strokeWeight(3);
  stroke(0,0,0);
  fill(177,120,78);
  beginShape();
  vertex(1330,238);
  vertex(1010,400);
  vertex(1073,400);
  endShape(CLOSE);
  
  
  strokeWeight(4);
  stroke(0,0,0,200);
  fill(244,244,244);
  ellipse(1340,315,70,70);

  //cuadrado negro al lado der de círculo amarillo
  stroke(0,0,0,0);
  fill(0,0,0);
  beginShape();
  vertex(1232,205);
  vertex(1250,234);
  vertex(1280,218);
  vertex(1262,190);
  endShape(CLOSE);

  //cuadrado debajo del triángulo cafe
  beginShape();
  vertex(1232,300);
  vertex(1255,284);
  vertex(1271,308);
  vertex(1247,322);
  endShape(CLOSE);
  
  beginShape();
  vertex(1249,335);
  vertex(1277,319);
  vertex(1293,346);
  vertex(1266,362);
  endShape(CLOSE);
  
  beginShape();
  vertex(1220,255);
  vertex(1238,284);
  vertex(1194,307);
  vertex(1178,275);
  endShape(CLOSE);

  // figura debajo del triángulo cafe
  strokeWeight(3);
  stroke(0,0,0);
  line(1119,400,1175,365);
  line(1175,365,1194,400);
  line(1154,378,1171,400);
  strokeWeight(2);
  line(1129,397,1133,400);
  
  stroke(0,0,0);
  fill(0,0,0);
  beginShape();
  vertex(1129,397);
  vertex(1133,400);
  vertex(1171,400);
  vertex(1154,378);
  endShape(CLOSE);
  
  strokeWeight(6);
  stroke(246,246,246);
  point(1153,398);
  point(1140,395)
  strokeWeight(5);
  point(1148,397);
  point(1152,388);

  //círculo azul/amarrillo
  strokeWeight(2)
  stroke(0,0,0);
  fill(239,205,92);
  ellipse(1215,241,97,97);
  stroke(0,0,0,0);
  fill(103,163,213);
  ellipse(1215,241,73,73);
  
   //3era línea arriba a abajo
  strokeWeight(4)
  stroke(0,0,0);
  line(892,390,1400,114);
  
  //círculo rojo/rosado
  strokeWeight(1);
  stroke(0,0,0,200);
  fill(224,34,17,220);
  ellipse(1199,370,79,79);
  stroke(0,0,0,0);
  fill(202,144,166,200);
  ellipse(1197,368,67,67);

  //círculo amarrillo/verde/naranja
  stroke(0,0,0,0);
  fill(222,113,54);
  ellipse(975,280,120,120); 
  
  //3era línea arriba a abajo
  strokeWeight(4)
  stroke(0,0,0);
  line(892,390,1400,114);
  
  strokeWeight(7);
  stroke(0,0,0);
  fill(222,178,78,200);
  ellipse(950,280,130,130);
  
  //cuadro verdeoscuro
  stroke(0,0,0,0);
  fill(23,61,57);
  beginShape();
  vertex(964,270);
  vertex(984,305);
  vertex(1022,283);
  vertex(994,255);
  endShape(CLOSE);
  
  //cuadroverdeclaro
  fill(111,166,137);
  beginShape();
  vertex(930,288);
  vertex(964,270);
  vertex(984,305);
  vertex(945,320);
  endShape(CLOSE);
  
  strokeWeight(5);
  stroke(83,83,83);
  point(1035,340);
  point(1020,333);
  point(1045,335);
  point(1033,327);
  point(1030,334);
  point(1050,341);
  point(1020,350);
  stroke(40,40,40);
  point(1055,330);
  point(1045,320);
  point(1042,327);
  point(1022,325);
  
  //cuadro verdenormal
  stroke(0,0,0,0)
  fill(88,118,62)
  beginShape();
  vertex(945,320);
  vertex(984,305);
  vertex(1003,328)
  vertex(960,350);
  endShape(CLOSE);
  
  strokeWeight(7);
  stroke(0,0,0);
  noFill();
  ellipse(950,280,130,130);
    
  //línea 1ra de arriba a abjao
  strokeWeight(5);
  stroke(0,0,0);
  line(854,327,1400,42);
  // 2da línea arriba a abajo
  line(876,360,1400,80);
  strokeWeight(3)
  //3ra línea izq a der.
  line(908,302,960,400);
  //4ra línea izq a der.
  line(930,288,988,400);
  //5ta línea izq a der.
  line(964,270,1020,358);
  //6ta línea izq a der
  line(994,255,1069,330);
  
  
  
}