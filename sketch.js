function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaxCarroDireita();
  movimentaxCarroEsquerda();
  voltaPosicaoInicialDoCarroDireita();
  voltaPosicaoInicialDoCarroEsquerda();
  passouTodaATelaEsquerda();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}

