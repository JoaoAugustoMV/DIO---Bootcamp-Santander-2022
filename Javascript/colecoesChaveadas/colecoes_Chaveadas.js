// Map: estrurura baseada em chave e valor
// É possivel iterar com for...of

const mapa = new Map()

mapa.set('chave', 'valor')
mapa.set(10, 'dez')
mapa.set([1, 2, 3],  50) // - Maps podem ter chaves de qualquer tipo\
console.log("mapa =", mapa)
console.log("mapa.length = ", mapa.size)
console.log("mapa.get('valor') =", mapa.get('chave'))
console.log('mapa.entries() =', mapa.entries()) // Retorna um objeto iteravel
for (const entry of mapa.entries()){
    console.log('entry = ', entry) // Arrays com pares de chave, valor
}

console.log('mapa.values() =', mapa.values())

for(const valor of mapa.values()){
    console.log('valor = ', valor) // Retorna apenas os valores
}

console.log('---------------------------')
//mapa.delete('chave')

// DIferenças Map e Objeto
// - Maps podem ter chaves de qualquer tipo\
// - Maps possuem .size(equivalente a array.length)
// - Map é utilizado quando o valor das chaves é desconhecido
// - Os valores tem o mesmo tipo




// Set: Especie de array, apenas com valores ÚNICOS, além de possuir propriedades diferentes dos arrays

const meuSet = new Set()

meuSet.add('valor')// Adicionar um valor por vez
meuSet.add(12).add(['abc', 123]) // Adicionar mais de um valor na mesma linha
meuSet.add('valor') // Se tentar adicionar valores já existente, não ocorerá erro, apenas será ignorado
console.log('meuSet[1 = ', meuSet)
console.log('meuSet = ', meuSet)
console.log('meuSet.has(\"12\") =', meuSet.has('12'))
console.log('meuSet.has(12) =', meuSet.has(12))

console.log('\nfor.. of set.entreis ')
for (const entry of meuSet.entries()){
    console.log('entry = ', entry) // Retorna um array com duas posições onde as duas são o valor
}

console.log('mapa.values() =', mapa.values())

for(const valor of meuSet.values()){
    console.log('valor = ', valor) // Retorna apenas os valores
}

// Diferenças entre set e array:
// - Possui valores unicos
// - Não tem .length, mas tem .size
// - Não possui: .map, .filter, .reduce

