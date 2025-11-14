class linterna {
  constructor() {
    this.sprite = arraySprites[7];
    this.x = 0;
    this.y = 0;
    this.lanzada = false;
    this.velocidad = 12;
    this.direccion = 1;
  }

  dibujar() {
    if (this.lanzada) {
      image(this.sprite, this.x, this.y, 60, 60);
      this.x += this.velocidad * this.direccion;

      if (this.x < -100 || this.x > width + 100) {
        this.lanzada = false;
      }
    }
  }

  disparar(x, y, dir) {
    if (!this.lanzada) {
      this.x = x;
      this.y = y;
      this.direccion = dir;
      this.lanzada = true;
    }
  }
}
