// array.reduce: Retorna apenas um valor


// Sintaxe:
//Array.filter(callback, valorIncial)
// - callback função (acumulador, valorAtual, indice, arrayOriginal)a ser passada, deve retornar t
// - valorInicial: Por padrao é o primeiro elemento, mas é possivel escolher com isso terá um iteração a mais

const lista = [1,2 , 4, 5, 6, 7]

function soma_lista(acumulador, valorAtual){
    return acumulador += valorAtual

}

const arrow_soma_lista = (acc, atual) => acc + atual

console.log('lista.reduce(soma_lista) =', lista.reduce(arrow_soma_lista))