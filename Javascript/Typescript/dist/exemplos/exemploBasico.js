"use strict";
// npm init
let botao = document.getElementById('botao');
let n1 = document.querySelector('#input1');
let n2 = document.getElementById('input2');
function soma(n1, n2, devePrintar, frase) {
    let resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return n1 + n2;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (botao) {
    botao === null || botao === void 0 ? void 0 : botao.addEventListener('click', () => {
        if (n1 && n2) {
            console.log(soma(Number(n1.value), Number(n2.value), devePrintar, frase));
        }
    });
}
