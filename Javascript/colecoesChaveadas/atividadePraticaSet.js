// Atividade 2: Dado um array retorna outro array com valores unicos
const lista = [30, 30, 40, 5, 223, 2049, 3034, 5]


function valores_unicos(lista){
    const meuSet = new Set()
    for(const valor of lista){
        meuSet.add(valor)
    }
    return [...meuSet] // 
}

console.log(valores_unicos(lista))

// Solução da prof: const MySet = new Set(lista)