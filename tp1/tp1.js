/*
Lombardi Isabella
Link YpuTube: https://youtu.be/SL9fkQQFD1c
*/
let B = 255;
let N = 0;
let C = 0;
//
let columnas = 5;
let filas = 5;
let cantA = 8;
let cantB = 8;
let mostrarGrilla = false;
//
let imagen;

function preload () {
  imagen = loadImage('op.jpg');
}

function setup() {
  createCanvas (800, 400);
}


function draw() {
  image (imagen, 0, 0, 400, 400);
  Coso (5, -5, 0, 0, 20);
  Coso (-5, 5, 0+70, 0-70, 20-5);
  //
  //
  if ( mostrarGrilla) {
    background(255);
    translate (400, 0);
    grilla();
    resetMatrix();
    image (imagen, 0, 0, 400, 400);
  } else {
    translate(400, 0);
    Coso (5, -5, 0, 0, 20);
    Coso (-5, 5, 0+70, 0-70, 20-5);
    resetMatrix();
    image (imagen, 0, 0, 400, 400);
  }
}
//---------------

function Coso (Translate1, Translate2, X1, Y1, tam) {
  push();
  translate(600, 205);
  for (let i = tam; i > 0; i--) {
    if (espar(i)) {
      fill(N);
    } else {
      fill(B);
    }
    let d = i * tam;
    translate(Translate1, Translate2);
    ellipse(X1, Y1, d, d);
  }
  pop();
}

//
//
function grilla() {
  for ( let a=0; a<cantA; a++ ) {
    for ( let b=0; b<cantB; b++ ) {
      let x = a*width/cantA;
      let y = b*height/cantB;
      noStroke();
      if (  (a+b)%2==0 ) {
        fill(B);
      } else {
        fill(C);
      }
      rect( x, y, width/cantA, height/cantB);
    }
  }
}
//
//
function espar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//---------------
function keyPressed () {
  console.log("apretar a para cambiar de color");
  console.log("hacer click c para poner grilla");
  console.log("apretar s para superponer grilla");
  console.log("apretar d para superponer OP");
  console.log("apretar g para reiniciar");
  if (key =='a') {
    B = color(random(255), random(255), random(255));
    N  = color(random(255), random(255), random(255));
    C  = color(random(58, 40), random(58, 40), random(58, 40));
  }

  if (key =='s') {
    mostrarGrilla = true;
  } else if (key =='d') {
    mostrarGrilla = false;
  }

  if (key =='g') {
    B = 255;
    N = 0;
    C = 10;
    columnas = 5;
    filas = 5;
    cantA = 8;
    cantB = 8;
    background(255);
    image (imagen, 0, 0, 400, 400);
    Coso (5, -5, 0, 0, 20);
    Coso (-5, 5, 0+70, 0-70, 20-5);
  }
}
//
//
function mousePressed () {
  Coso (5, -5, 0, 0, 20);
  Coso (-5, 5, 0+70, 0-70, 20-5);
  grilla();
}
