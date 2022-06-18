// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Tipando pelo lista
let funcionario: {codigo: number, nome: string} = {
    codigo: 12,
    nome: 'Joao'
}

// Tipando por inferencia
let funcionario2 = {
    codigo: 92,
    nome: 'Ana'
}

// Tipando por interface
interface Funcionario3{
    codigo: number, 
    nome: string
}

let funcionarioTres: Funcionario3 = {
    codigo: 43,
    nome: 'Maria'
}

