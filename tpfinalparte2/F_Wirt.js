class wirt {
  constructor() {
    this.sprite = arraySprites[6];
    this.posX = 270;
    this.posY = 350;
    this.velocidad = 4;
    this.direccion = 1;
    this.ancho = 100;
    this.alto = 150;
    this.linterna = new linterna();
    this.moviendo = false;
    this.offsetCaminar = 0;
  }
  //
  dibujar() {
    if (this.moviendo) {
      this.offsetCaminar = sin(frameCount * 0.2) * 5;
    } else {
      this.offsetCaminar = 0;
    }

    push();
    translate(this.posX, this.posY + this.offsetCaminar);
    scale(this.direccion, 1);
    image(this.sprite, 0, 0, this.ancho * this.direccion, this.alto);
    pop();

    this.linterna.dibujar();
  }

  actualizarMovimiento() {
    this.moviendo = false;

    if (keyIsDown(65)) {
      if (this.posX > 30) {
        this.posX -= this.velocidad;
        this.direccion = -1;
        this.moviendo = true;
      }
    }

    if (keyIsDown(68)) {
      if (this.posX < width - 120) {
        this.posX += this.velocidad;
        this.direccion = 1;
        this.moviendo = true;
      }
    }
  }

  ataque() {
    let xLuz = this.posX + (this.direccion === 1 ? 80 : -40);
    let yLuz = this.posY - 40;
    this.linterna.disparar(xLuz, yLuz, this.direccion);
  }
}
