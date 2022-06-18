function somarValores(input1: number | string, input2: number | string){ // inputs podem ser do tipo number ou string

    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString()
    }
    return input1 + input2
}


type input = number | string // É possivel criar tipos personalidados

function somarValores2(input1: input, input2: input){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString()
    }
    return input1 + input2
}

// Esta função recebe 3 parametros: 2 number e um função callback
// Ao realizar o resultado será chamada o callback()
function somarValoresNumericos(n1: number, n2: number, callback: (numero: number) => number): number{ // Garante o tipo de retorno
    let resultado = n1 + n2
    return callback(resultado)
}

function tipoVoid(str: string): void{ // Garante que não retornará nada
    console.log('Essa é uma string: ',  str)
}


function aoQuadrado(n: number): number{
    return n**2
}

function vezesTres(n: number): number{
    return n * 3
}

function print(str: number): string{ // Garante que não retornará nada
    return 'Essa é uma string: ' +  str
}
console.log(somarValoresNumericos(23, 4, vezesTres))
console.log(somarValoresNumericos(25, 7, print))




