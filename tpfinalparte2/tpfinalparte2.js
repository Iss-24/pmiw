// tp final etapa 
// comisión 2
// integrantes:De Rito Bianca 120294/9 y Lombardi Isabella 122758/9
// https://youtu.be/bB1KIIy6PNU 


let sonidoClick, sonidoLuz;
let arrayImagen = [];
let arraySprites = [];
let arrayTexto = [];
let fuente;
let objPrograma;
let musicaMenu;
let musicaJuego;


function preload() {

  soundFormats('mp3');

  sonidoClick = loadSound("data/sonidoClick.mp3");
  sonidoLuz = loadSound("data/sonidoLuz.mp3");
  musicaMenu = loadSound("data/musicaMenu.mp3");
  musicaJuego = loadSound("data/musicaJuego.mp3");

  fuente = loadFont("data/Garamond.ttf");

  for (let i = 0; i <= 4; i++) {
    arrayImagen[i] = loadImage("data/imagen"+i+".jpg");
  }

  for (let i = 5; i <= 7; i++) {
    arraySprites[i] = loadImage("data/imagen"+i+".png");
  }

  for (let i = 0; i < 4; i++) {
    arrayTexto[i] = loadStrings("data/texto"+i+".txt");
  }
}

function setup() {
  createCanvas(640, 480);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  sonidoLuz.setVolume(0.3);
  objPrograma = new programa();
}


function draw() {
  objPrograma.reproducir();
}


function keyPressed() {
  objPrograma.juego.teclaPresionadaPersonaje(key);
}


function mousePressed() {
  objPrograma.interacciones();
}
