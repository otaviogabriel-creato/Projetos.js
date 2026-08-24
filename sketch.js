// http://10.12.129.117:5501/plataforma-aula/assets/hellokitty.png

let img;
let x, y;
let vx, vy;
let g;
let largura, altura;

async function setup() {
  createCanvas(800, 600);

  img = await loadImage("Spider-Man-Standing-Transparent-Background-PNG.webp");
  x = width / 2;
  y = 10;
  vx = 0;
  vy = 3;
  g = 0.8;
  largura = 200;

  img.resize(largura, 0);
  altura = img.height;
}

function draw() {
  background(220);

  // atualizar
  if (keyIsDown(LEFT_ARROW)) {
    vx = -5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    vx = 5;
  } else {
    vx = 0;
  }

  x = x + vx;
  y = y + vy;

  vy = vy + g;

  if (y > height - altura) {
    y = height - altura;
  }

  // desenhar
  image(img, x, y);
}

function keyPressed() {
  if (keyCode == 32) {
    vy = -10;
    img = img
  }
}
