
//Código do Mario
let xMario = 100
let yMario = 355
let colisao = false

//variáveis de placar
let meusPontos = 0

function mostraMario(){
    image(imagemMario, xMario, yMario, 40, 40);
  }

function movimentoMario(){
    if (keyIsDown(UP_ARROW)){
        yMario -= 3
    }
    if (keyIsDown(DOWN_ARROW)){
        yMario += 3
    }
    yMario = constrain(yMario, -10, 360)
  }
function verificaColisao(){
  //collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100)
  for (i = 0; i < imagemInimigos.length; i = i + 1){
 colisao = collideRectCircle(xMario, yMario, 20, 20, xInimigos[i], yInimigos[i], 30)
  if(colisao){
    yMario = 355
    somDacolisao.play();
    if(meusPontos > 0){
      meusPontos -= 1
    }
  }

  }
}
function atravessouTudo(){
  if (yMario < -4){
    yMario = 355
  }
}

function placarDoJogo(){
  stroke('red')
  fill('black')
  text('POINTS', 320, 28)
  fill('black')
  rect (265, 1, 50, 30)
  fill('red')
  text(meusPontos, 280, 28)
  textSize(32)
  if(yMario < -2){
    meusPontos += 1
    pontos.play();  
  }
}