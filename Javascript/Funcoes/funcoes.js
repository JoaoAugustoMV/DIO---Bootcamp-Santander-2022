// Lembretes
// Variaveis declaradas dentro de funções tem escopo apenas dentro da função
// Toda função tem o array "arguments" que contém todos os parâmetros passados na chamada

// Função Estruturada
function somaEstruturada(num1, num2){
    return num1 + num2
}

// Função Anonima
const somaAnonima = function (num1, num2){
    return num1 + num2
}

// Função Arrow(não faz hoisting)
// - this sempre será o objeto global
// - Não existe arguments
// - Não existe constructor
const somaArrow = (num1, num2) => num1 + num2 // return implicito

// Spread: Espalhar os elementos do array para os argumentos da função
function sum(a, b, c){
    console.log(`A soma é ${a + b +c}`)
}
sum(...[2,3, 4])
//-------------------------------------------------------------------

// Rest: Combina os argumentos em um array
function tamanho(...args){
    console.log(`Foram passadas ${args.length} numeros`)
}
tamanho(4,456, 45,7, 65,7 ,6766,5, 7,45)
//-------------------------------------------------------------------

// Object Destructuring: Filtrar quais atributos ou metodos deseja passar como parametro para funcao

let play5 = {
    preco: 4000,
    ano_lancamento: 2020,
    resolucao_max: "2160p",
    fps_max: 120, 
    nucleos_e_threads: [8, 16]
}// Atributo: outro nome. Ao adicionar os ":" é possivel dar outro nome para o atributo

// Para variaveis
const {ano_lancamento:ano, fps_max:fps} = play5
console.log('ano, fps', ano, fps)

// Para funções
function dados_tecnicos({resolucao_max:resol_max, fps_max, nucleos_e_threads}){
    console.log(`Os dados tecnicos do ps5 são: ${resol_max} ${fps_max} ${nucleos_e_threads}`)
    console.log(play5)
}

dados_tecnicos(play5)