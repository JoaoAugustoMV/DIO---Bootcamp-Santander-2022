// O valor do objeto this DEPENDE do contexto(só funciona dentro de funções)

// Quando usado dentro de um objeto, this se refere ao proprio objeto
let play5 = {
    preco: 4000,
    ano_lancamento: 2020,
    resolucao_max: "2160p",
    fps_max: 120, 
    nucleos_e_threads: [8, 16], 
    qualidade_max: `${this.resolucao_max} e ${this.fps_max}`, // Dará undefined
    show_qualidade: function () {
        console.log(`${this.resolucao_max} e ${this.fps_max}fps`)
    }
}
//play5.show_qualidade()
let monitor ={
    preco: 1800
}

// Call: Indica qual objeto para o this se referir
// - Para passar argumentos, primeiro passe o objeto depois os argumentos separados por virgulas

function mostra_preco_Call(teste1, teste2){
    console.log('Call:',this.preco, teste1, teste2)
}
mostra_preco_Call.call(monitor, 45, 'joao')

// Apply: Indica qual objeto para o this se referir 
// - Para passar argumentos, primeiro o objeto depois um array com os argumentos
function mostra_preco_Apply(teste1, teste2){
    console.log('Apply:', this.preco, teste1, teste2)
}
mostra_preco_Apply.apply(play5, [45, 'joao'])

// Bind: Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
// Clona a função e torna this o que voce passar para dentro

function mostra_preco_Bind(){
    console.log('Bind:', this)
}

let price = mostra_preco_Bind.bind({preco: 'bind: 1000', teste: 'teste'})
price()

// O primeiro parametro será o this e o restante será os argumentos
function sumNumbers(firstNumber,secondNumber = 0) {
	const sum = this + firstNumber + secondNumber;

	console.log('Bind this:', this)
    console.log('Bind sum:', sum)
}

const bindResultFunction = sumNumbers.bind(10, 22)

bindResultFunction()

// Sozinha: se refere ao objeto global
// - Navegador: window
// - Node: {}

// Função: Objeto global

// Evento: Elemento html que recebeu o evento