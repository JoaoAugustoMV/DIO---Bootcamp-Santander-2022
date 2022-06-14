// map: Aplicar função a um array e gerar novo array modificado

const lista = [1, 23, 4, 6, 7, 8]

function dobro(valorAtual, indiceAtual, arrayOriginal){
    console.log('valorAtual =', valorAtual)
    console.log('indice =', indiceAtual)
    console.log('arrayOriginal =', arrayOriginal)
    return valorAtual * 2
}

// Sintaxe:
//Array.map(callback, thisArg)
// - callback(valorAtual, indice, arrayOriginal) função a ser passada, deve retorna o valor modificado
// - thisArg: especifica qual será o this usado
console.log('lista.map(dobro)', lista.map(dobro))

// array.map VS array.forEach
// - .map retorna o array modificado e .forEach retorna undefined