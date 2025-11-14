class bestia {
  constructor() {
    this.sprite = arraySprites[5];
    this.posX = 400;
    this.posY = 230;
    this.ancho = 120;
    this.alto = 160;
    this.vida = 80;
    this.vidaMax = 80;

    this.velocidadBase = 2.8;
    this.velocidad = this.velocidadBase;
    this.direccion = random([-1, 1]);
    this.cambioDireccionTimer = 0;
  }

  dibujar() {
    image(this.sprite, this.posX, this.posY, this.ancho, this.alto);

    this.posX += this.velocidad * this.direccion;

    if (this.posX < 100) {
      this.posX = 100;
      this.direccion = 1;
    } else if (this.posX > width - this.ancho - 100) {
      this.posX = width - this.ancho - 100;
      this.direccion = -1;
    }

    let factorDificultad = map(this.vida, 70, 0, 1, 1.8);
    this.velocidad = this.velocidadBase * factorDificultad;
    this.dibujarBarraVida();
  }

  dibujarBarraVida() {
    let porcentaje = this.vida / this.vidaMax;
    let anchoBarra = this.ancho * 0.8;
    let altoBarra = 10;
    let x = this.posX + this.ancho / 2 - anchoBarra / 2;
    let y = this.posY - 15;

    noStroke();
    fill(0, 0, 0, 120);
    rect(x, y, anchoBarra, altoBarra, 5);

    fill(200, 30, 30, 200);
    rect(x, y, anchoBarra * porcentaje, altoBarra, 5);

    noFill();
    stroke(255, 255, 255, 100);
    strokeWeight(1);
    rect(x, y, anchoBarra, altoBarra, 5);
  }

  recibirGolpe(luzX, luzY) {
    let colisiona = (
      luzX > this.posX &&
      luzX < this.posX + this.ancho &&
      luzY > this.posY &&
      luzY < this.posY + this.alto
      );

    if (colisiona) {
      this.vida -= 10;
      if (this.vida < 0) this.vida = 0;
      return true;
    }
    return false;
  }
}
