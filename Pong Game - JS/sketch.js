//variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let velocidadeXBolinha = 5
let velocidadeYBolinha = 5
let raio = diametro/2

//variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let wRaquete = 10
let hRaquete = 90

//variáveis da raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

//variáveis do Placar
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada
let ponto
let trilha

function preload(){
  raquetada = loadSound('./assets/raquetada.mp3')
  ponto = loadSound('./assets/ponto.mp3')
  trilha = loadSound('./assets/trilha.mp3')
}

let colisao = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop()

}

function draw() {
  background(0);
 desenhoBolinha()
 velocidadeBolinha()
 colisaoBolinha()
 movimentoraquete()
 //colisaoRaquete()
 colisaoRaqueteBiblioteca(xRaquete, yRaquete)
 colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente)
  desenhoraquete(xRaquete, yRaquete)
  desenhoraquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente();
  quadradoPlacar();
  placarDoJogo();
  bugDaBolinha();


}

function desenhoBolinha(){
  circle(xBolinha, yBolinha, diametro)
}
function velocidadeBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}
function colisaoBolinha(){
   if (xBolinha + raio > width ||
     xBolinha < raio){
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height ||
     yBolinha <raio){
    velocidadeYBolinha *= -1
  }
  }
function desenhoraquete(x, y){
  rect(x, y, wRaquete, hRaquete)
}
function movimentoraquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
}
  
  yRaquete = constrain(yRaquete, 0, 310)
  yRaqueteOponente = constrain(yRaqueteOponente, 0, 310)
  
}
function colisaoRaquete(){
  //variáveis da colisão da Bolinha
  let esquerdaBolinha = xBolinha - raio
  let superiorBolinha = yBolinha - raio
  let inferiorBolinha = yBolinha + raio
  
  //variáveis da colisão na Raquete
  let direitaRaquete = xRaquete + wRaquete
  let inferiorRaquete = yRaquete + hRaquete
  let superiorRaquete = yRaquete

  if (esquerdaBolinha < direitaRaquete && superiorBolinha < inferiorRaquete && inferiorBolinha > superiorRaquete){
    velocidadeXBolinha *= -1
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu =
  collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, diametro)
  if (colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - hRaquete /2 - 60
  yRaqueteOponente += velocidadeYOponente
}

function placarDoJogo(){
  noStroke()
  textAlign(CENTER)
  textSize(25)
    fill('white')
    text(meusPontos, 150, 60)
    fill('white')
    text(pontosOponente, 420, 60)
  if (xBolinha - raio < 0){
      pontosOponente += 1
    ponto.play()
      }
  if (xBolinha + raio > 600){
    meusPontos += 1
    ponto.play()
  }
}
function quadradoPlacar(){
    strokeWeight(2)
    fill('orange')
    stroke('white')
    rect(400, 37, 40, 30)
    fill('orange')
    rect(130, 37, 40, 30)
}

function bugDaBolinha(){
    if (xBolinha - raio < 0){
       xBolinha = 23
    }
    if (xBolinha + raio > 600){
        xBolinha = 580
    }
}