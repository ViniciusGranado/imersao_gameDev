function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  cenas = {
    telaInicial,
    jogo
  };
  jogo.setup();

  frameRate(40)
  // somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}