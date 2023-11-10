g = 10,
o = 0;
cont = 0;
intervalo = 60;


setup = _=>{
    createCanvas(W = windowWidth, H = windowHeight);
    noStroke();
}

draw = _=>{
//  if (cont % floor(random([120,240,480])) === 0) {
//    h = random(1,55);
//  }
  h = map(mouseX, 0, W, .5, 100);
  o += .05;
  for (i = 0; i < W; i += g) {
    for (j = 0; j < H; j += g) {
      d = dist(W / 2, H / 2, i + g, j + g),
      a = map(d, 0, W / 2, 0, PI),
      s = abs(cos(tan(a-W) * h -a*o-o));
      fill(.5 < s ? 0 : W),
      rect(i, j, g)
    }
  }
//  cont++
}
