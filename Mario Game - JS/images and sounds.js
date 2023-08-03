
//Variáveis das imagens
let imagemEstrada;
let imagemMario;
let imagemPrincesa;
let imagemInimigo1;
let ImagemInimigo2;
let ImagemInimigo3;
let ImagemInimigo4;
let ImagemInimigo5;

//Variáveis dos sons

let trilhaSonora;
let pontos;
let colidiu;

function preload(){
    imagemEstrada = loadImage('./assets/estrada.png');
    imagemMario = loadImage('./assets/ator-1.png');
    imagemInimigo1 = loadImage ('./assets/inimigo-1.png');
    imagemInimigo2 = loadImage ('./assets/inimigo-2.png');
    imagemInimigo3 = loadImage ('./assets/inimigo-3.png');
    imagemInimigo4 = loadImage ('./assets/inimigo-4.png');
    imagemInimigo5 = loadImage ('./assets/inimigo-5.png');
    imagemInimigo6 = loadImage ('./assets/inimigo-2.png');
    imagemInimigos = [imagemInimigo1, imagemInimigo2, imagemInimigo3, imagemInimigo4, imagemInimigo5, imagemInimigo6]

    trilhaSonora = loadSound('./assets/trilha.mp3');
    pontos = loadSound('./assets/pontos.wav');
    somDacolisao = loadSound('./assets/colidiu.wav');
}

function tocarTrilha(){
    userStartAudio().then(function() {
        trilhaSonora.loop();
      });
}