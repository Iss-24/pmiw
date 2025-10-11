function dentroBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function dibujaBoton(x, y, w, h, texto) {

  let hover = dentroBoton(x, y, w, h);
  let baseColor = color(255, 245, 230, 180);
  let hoverColor = color(210, 180, 140, 200);
  let bordeColor = hover ? color(100, 60, 30) : color(120, 80, 40);


  stroke(bordeColor);
  strokeWeight(1.5);
  fill(hover ? hoverColor : baseColor);
  rect(x, y, w, h, 10);


  noStroke();
  fill(40, 30, 20);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  textAlign(LEFT);
}
