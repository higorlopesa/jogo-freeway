//Listas
let xCarros = [200, 320, 440,100, 220, 340]
let yCarros = [40, 98, 150, 320, 265, 210]
let velocidadesCarros = [5, 3, 1, 2, 3, 2]
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
  }

function movimentaxCarroDireita(){
  for (let i = 0; i < 3; i = i + 1){
  xCarros[i] -= velocidadesCarros[i]

  }
}

function movimentaxCarroEsquerda(){
  for (let i = 3; i < imagemCarros.length; i++){
  xCarros[i] += velocidadesCarros[i]
    
    }
}
    
//Função de retorno dos Carros
function voltaPosicaoInicialDoCarroEsquerda(){
  for (let i = 0; i < 3; i++){
  
  if (passouTodaATelaEsquerda(xCarros[i])){
    xCarros[i] = 600

    }
  }
}

function voltaPosicaoInicialDoCarroDireita(){
  for (let i = 3; i < imagemCarros.length; i++){
  
    if (passouTodaATelaDireita(xCarros[i])){
    xCarros[i] = 0
    }
  }
}

function passouTodaATelaEsquerda(xCarros){
  return xCarros < -50;
}

function passouTodaATelaDireita(xCarros){
  return xCarros > 620;
}