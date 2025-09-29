const readlineSync = require('readline-sync');

let tabuleiro = [" "," "," "," "," "," "," "," "," "];
let jogador = "X";
let jogadas = 0;

function mostrarTabuleiro() {
console.log(`
    ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
    ----------
    ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]} 
    ----------
    ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]} 
`);
}
function verificarVitoria() {
    const combinacoes = [
        [0,1,2], [3,4,5], [6,7,8], //linhas
        [0,3,6], [1,4,7], [2,5,8], //colunas
        [0,4,8], [2,4,6] //diagonal
    ];
    return combinacoes.some(([a,b,c]) =>
    tabuleiro[a] === jogador && tabuleiro[b] === jogador && tabuleiro[c] === jogador
); //formando uma linha vencedora
}
do {
    mostrarTabuleiro();
    let pos = 
    readlineSync.questionInt(`Jogador ${jogador}, escolha uma posicao (1-9): `) - 1;
    if (tabuleiro[pos] === " ") {
        tabuleiro[pos] = jogador;
        jogadas++;
        
    if (verificarVitoria()) {
        mostrarTabuleiro();
        console.log(`Jogador ${jogador} venceu!!`);
        break;
    }
        jogador = jogador === "X" ? "0" : "X"; //troca de jogador
    } else {
    }
        console.log("Posição ocupada, escolha outra.");
    } while (jogadas < 9);
    if (jogadas === 9){
        mostrarTabuleiro();
        console.log("Deu velha!");
    }
