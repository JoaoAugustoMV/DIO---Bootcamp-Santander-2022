// Filter: Função para filtrar os elementos do array original


// Sintaxe:
//Array.filter(callback, thisArg)
// - callback(valorAtual, indice, arrayOriginal) função a ser passada, deve retornar true ou false
// - thisArg: especifica qual será o this usado


function apenasPares(valor){
    if(valor % 2 == 0){
        return valor
    }
}

const lista = [1, 2, 4, 6, 7, 76, 6, 21]
console.log('lista.filter(apenasPares)', lista.filter(apenasPares))