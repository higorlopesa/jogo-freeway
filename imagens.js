//Imagens e sons da Estrada
let imagemDaEstrada;

//Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

//Imagens do Jogo
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarroVerde = loadImage("imagens/carro-1.png");
  imagemCarroPreto = loadImage("imagens/carro-2.png");
  imagemCarroAmarelo = loadImage("imagens/carro-3.png");
  imagemCarroVerde2 = loadImage("imagens/carro-4.png");
  imagemCarroPreto2 = loadImage("imagens/carro-5.png");
  imagemCarroAmarelo2 = loadImage("imagens/carro-6.png");
  imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde2, imagemCarroPreto2, imagemCarroAmarelo2]

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  
}