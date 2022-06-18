"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}
function somarValores2(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}
// Esta função recebe 3 parametros: 2 number e um função callback
// Ao realizar o resultado será chamada o callback()
function somarValoresNumericos(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function tipoVoid(str) {
    console.log('Essa é uma string: ', str);
}
function aoQuadrado(n) {
    return n ** 2;
}
function vezesTres(n) {
    return n * 3;
}
function print(str) {
    return 'Essa é uma string: ' + str;
}
console.log(somarValoresNumericos(23, 4, vezesTres));
console.log(somarValoresNumericos(25, 7, print));
