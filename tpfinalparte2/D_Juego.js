class juego {
  constructor() {
    this.fondo = arrayImagen[4];
    this.wirt = new wirt();
    this.bestia = new bestia();
  }

  dibujar() {
    image(this.fondo, 0, 0, width, height);

    this.wirt.actualizarMovimiento();
    this.wirt.dibujar();

    this.bestia.dibujar();

    this.detectarColision();
  }

  detectarColision() {
    if (this.wirt.linterna.lanzada) {

      let lx = this.wirt.linterna.x;
      let ly = this.wirt.linterna.y;

      if (this.bestia.recibirGolpe(lx, ly)) {
        this.wirt.linterna.lanzada = false;
      }
    }
  }
}
