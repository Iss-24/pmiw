// Tp final parte 1
// Comisión 2 , De Rito Bianca 120294/9 y Lombardi isabella 122758/9
// Obra: Más Allá del Jardín
// Link: https://youtu.be/ZQRGvrN-DGI

let sonidoClick;
let musicaFondo;
let arrayImagen = [];
let arrayTexto = [];
let estado = 0;
let ancho = 640;
let alto = 480;

function preload() {
  for (let i = 0; i < 16; i++) {
    arrayImagen[i] = loadImage("data/imagen" + i + ".jpg");
    arrayTexto[i] = loadStrings("data/texto" + i + ".txt");
  }

  soundFormats('mp3');
  sonidoClick = loadSound("data/SonidoBoton.mp3");
  musicaFondo = loadSound("data/MusicaFondo.mp3");

  fuente = loadFont ("data/Garamond.ttf");
}

function setup() {
  createCanvas(ancho, alto);
  textAlign(LEFT);
  textSize(16);

  userStartAudio();

  musicaFondo.loop();
  musicaFondo.setVolume(0.3);

  textFont(fuente);
}

function draw() {
  background(0);

  if (estado === 0) { // portada
    mostrarMenu();
  } else if (estado === 15) {
    mostrarCreditos();
  } else if (estado === 1) { // encrucijada
    mostrarDecision("IZQUIERDA", "DERECHA");
  } else if ([2, 3, 4, 5, 7, 11, 12, 13].includes(estado)) {
    mostrarPantallaConSiguiente();
  } else if (estado === 6) { // beatriz
    mostrarDecision("IR CON BEATRIZ", "RECHAZAR");
  } else if (estado === 9) { // leñador
    mostrarDecision("ACEPTAR AYUDA", "RECHAZAR");
  } else if ([8, 10, 14].includes(estado)) { // finales
    mostrarFinal();
  }
}

function mousePressed() {

  if (sonidoClick && sonidoClick.isLoaded()) {
    sonidoClick.play();
  }

  // comenzar
  if (estado === 0 && dentroBoton(340, 300, 140, 50)) estado = 1;

  // créditos
  else if (estado === 0 && dentroBoton(160, 300, 140, 50)) estado = 15; // va a la pantalla de créditos
  else if (estado === 15 && dentroBoton(250, 420, 140, 40)) estado = 0;


  // decisiones
  else if (estado === 1 && dentroBoton(100, 420, 120, 40)) estado = 4; // izquierda
  else if (estado === 1 && dentroBoton(400, 420, 120, 40)) estado = 2; // derecha
  else if (estado === 6 && dentroBoton(100, 420, 120, 40)) estado = 7; // ir con beatriz
  else if (estado === 6 && dentroBoton(400, 420, 120, 40)) estado = 9; // rechazar a beatriz
  else if (estado === 9 && dentroBoton(100, 420, 120, 40)) estado = 10; // aceptar ayuda
  else if (estado === 9 && dentroBoton(400, 420, 120, 40)) estado = 11; // rechazar ayuda

  // avanzar
  else if ([2, 4, 7, 11, 12, 13].includes(estado) && dentroBoton(540, 440, 80, 30)) estado++;
  else if (estado === 3 && dentroBoton(540, 440, 80, 30)) estado = 6;
  else if (estado === 5 && dentroBoton(540, 440, 80, 30)) estado = 6;

  // reiniciar
  else if ([8, 10, 14].includes(estado) && dentroBoton(250, 420, 140, 50)) estado = 0;
}


function mostrarCreditos() {
  image(arrayImagen[15], 0, 0, ancho, alto);
  mostrarTexto(15);
  dibujaBoton(250, 420, 140, 40, "VOLVER");
}
