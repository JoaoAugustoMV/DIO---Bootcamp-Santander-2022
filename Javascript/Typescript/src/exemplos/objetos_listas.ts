const pessoa = {
    nome: "Mariana",
    idade: 25,
    profissao: 'desenvolvedora'
}

const andre: {nome: string, idade:number, profissao: string} = { // Especificar o tipo de cada atributo
    nome: 'Andre',
    idade: 19,
    profissao: 'pintor'
}

const paula: {nome: string, idade:number, profissao:string} = {
    nome: 'Paula',
    idade: 30,
    profissao: 'Desenvolvedora'
}

enum Profissao{ // Lista de contantes
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeVolei
}

interface Pessoa{ // Lista de atributos
    nome:string,
    idade: number
    profissao?: Profissao // ?: atributo não obrigatorio
    sexo?: 'M' | 'F'
}
interface Estudante extends Pessoa { // Herda os atributos da interface Pai
    materias: string[]
}
const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora

}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Desenvolvedora
}
const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica Discreta', 'Programação']
}

function listar(lista: string[]){ // Recebe como parametro um lista de string
    for(const item of lista){
        console.log('- ', item)
    }
}

listar(jessica.materias)