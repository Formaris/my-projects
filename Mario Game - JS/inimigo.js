
//variáveis dos inimigos
let xInimigos = [525, 525, 525, 525, 525, 525]
let yInimigos = [30, 85, 142, 200, 260, 309]
let velocidadeInimigos = [2, 2.5, 3.2, 2,3, 2.7, 3.5]

function mostraInimigo(){
    for (let i = 0; i < imagemInimigos.length; i += 1){
    image (imagemInimigos[i], xInimigos[i], yInimigos[i], 57, 57)
    }
}

function movimentoInimigo(){
    for (let t = 0; t < velocidadeInimigos.length; t += 1){
    xInimigos[t] -= velocidadeInimigos[t]
    }
}

function voltaInimigo(){
    for (let v = 0; v < xInimigos.length; v += 1)
    if (xInimigos[v] < 10){
        xInimigos[v] = 525  
    }
}