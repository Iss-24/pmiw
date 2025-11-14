class pantalla {
  constructor() {
    this.fondoMenu = arrayImagen[0];
    this.fondoInfo = arrayImagen[1];
    this.fondoDerrota = arrayImagen[2];
    this.fondoVictoria = arrayImagen[3];
  }

  menu() {
    image(this.fondoMenu, 0, 0, width, height);


    objPrograma.boton.dibujarBoton(270, 360, 370, 420, "JUGAR");
    objPrograma.boton.dibujarBoton(140, 420, 270, 460, "Créditos");
    objPrograma.boton.dibujarBoton(370, 420, 510, 460, "Instrucciones");
  }
  //
  creditos() {
    image(this.fondoInfo, 0, 0, width, height);

    fill(0);
    textAlign(CENTER, TOP);
    textFont(fuente);

    textSize(26);
    text("CRÉDITOS", width / 2, 60);

    textSize(20);
    text(arrayTexto[0].join("\n"), width / 2, 130);

    objPrograma.boton.dibujarBoton(500, 400, 620, 450, "VOLVER");
  }

  //
  instrucciones() {
    image(this.fondoInfo, 0, 0, width, height);

    fill(0);
    textAlign(CENTER, TOP);
    textFont(fuente);

    textSize(26);
    text("INSTRUCCIONES", width / 2, 60);

    textSize(20);
    text(arrayTexto[1].join("\n"), width / 2, 80);

    objPrograma.boton.dibujarBoton(500, 400, 620, 450, "VOLVER");
  }

  //
  ganador() {
    image(this.fondoVictoria, 0, 0, width, height);

    fill(0);
    textAlign(CENTER, TOP);
    textFont(fuente);

    textSize(22);
    text(arrayTexto[3].join("\n"), width / 2, height - 220);

    objPrograma.boton.dibujarBoton(250, 400, 390, 450, "REINICIAR");
  }

  //
  perdedor() {
    image(this.fondoDerrota, 0, 0, width, height);

    fill(255);
    textAlign(CENTER, TOP);
    textFont(fuente);

    textSize(22);
    text(arrayTexto[2].join("\n"), width / 2, height - 220);

    objPrograma.boton.dibujarBoton(250, 400, 390, 450, "REINICIAR");
  }
}
