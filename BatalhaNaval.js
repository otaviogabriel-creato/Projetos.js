const prompt = require ("prompt-sync")();

let tabuleiro = []

for (let i = 0; i < 5; i++) {
    tabuleiro[i] = []
    for (let j = 0; j < 5; j++) {
        tabuleiro[i][j] = 0
    }
}

console.log(tabuleiro);

let posicoes = 0
let l;
let c;

while (posicoes < 3) {
    l = prompt("Digite uma Linha(0 - 4): ");
    c = prompt("Digite uma Coluna(0 - 4): ");

    tabuleiro[l][c] = 1;

    posicoes++
}

console.log(tabuleiro);

let chances = 0
let tiro_linha;
let tiro_coluna;
let acertos = 0

while (chances < 7) {
    tiro_linha = prompt("Digite a Linha que você quer atirar(0 - 4): ");
    tiro_coluna = prompt("Digite a Coluna que você quer atirar(0 - 4): ");

    if (tabuleiro[tiro_linha][tiro_coluna] === 1){
        tabuleiro[tiro_linha][tiro_coluna] = -1
        console.log(`Você acertou o navio!!!`)
        acertos++
        

    }else if(tabuleiro[tiro_linha][tiro_coluna] === -1){
        console.log(`Navio já acertado`);
        
    }else{
        console.log(`Água não foi dessa vez.`)
    }

    chances++
}

console.log(tabuleiro);
console.log(`Quantidade de Acertos:${acertos}`);
