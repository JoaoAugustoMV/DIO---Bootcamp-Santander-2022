// Modulos: Arquivos .js que podem exportar e importar informação

// Default export: Só pode haver por arquivo, será o padrao de retorno

// Convenção usar .mjs para indicar o uso de modulo
// Lembrar que o caminho do arquivo deve começar com ./
// import * as Tudo from './funcoes.mjs'

// console.log(Tudo)
// console.log(Tudo.mostraCidade('Barueri', 74))
// console.log(Tudo.mostraIdade('Joao', 19))
// console.log(Tudo.mostraHobby('Artesanato', 3))

import {mostraCidade, mostraHobby, mostraIdade} from './funcoes.mjs'
console.log(mostraCidade('Barueri', 74))
console.log(mostraIdade('Joao', 19))
console.log(mostraHobby('Artesanato', 3))

