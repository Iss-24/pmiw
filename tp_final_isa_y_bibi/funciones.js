function mostrarMenu() {
  image(arrayImagen[0], 0, 0, ancho, alto);
  mostrarTexto(0);
  noStroke();
  fill(255);
  textSize(17);
  text("Hace clic en los botones para avanzar y tomar decisiones.", 130, 440);
  dibujaBoton(340, 300, 140, 50, "COMENZAR");
  dibujaBoton(160, 300, 140, 50, "CRÉDITOS");
}


function mostrarPantallaConSiguiente() {
  image(arrayImagen[estado], 0, 0, ancho, alto);
  mostrarTexto(estado);
  dibujaBoton(540, 440, 80, 30, "SIGUIENTE");
}

function mostrarDecision(opcionIzq, opcionDer) {
  image(arrayImagen[estado], 0, 0, ancho, alto);
  mostrarTexto(estado);
  dibujaBoton(100, 420, 120, 40, opcionIzq);
  dibujaBoton(400, 420, 120, 40, opcionDer);
}

function mostrarFinal() {
  image(arrayImagen[estado], 0, 0, ancho, alto);
  mostrarTexto(estado);
  dibujaBoton(250, 420, 140, 50, "REINICIAR");
}

function mostrarTexto(num) {
  noStroke();
  fill(255, 245, 230, 180);
  rect(20, 355, 600, 60, 12);
  stroke(80, 50, 20, 120);
  strokeWeight(1.5);
  noFill();
  rect(20, 355, 600, 60, 12);
  noStroke();
  fill(40, 30, 20);
  textSize(16);
  text(arrayTexto[num], 40, 367, 560, 40);
}
