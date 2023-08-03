function setup() {
    createCanvas(600, 400);
    tocarTrilha();
}
  function draw() {
    background(imagemEstrada);
    mostraMario();
    movimentoMario();
    mostraInimigo();
    movimentoInimigo();
    voltaInimigo();
    verificaColisao();
    atravessouTudo();
    placarDoJogo();
  }




