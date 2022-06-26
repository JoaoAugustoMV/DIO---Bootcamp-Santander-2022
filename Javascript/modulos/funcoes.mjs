function mostraIdade(nome, idade){
        return `A idade de ${nome} é ${idade}`
}

function mostraCidade(nome, idade){
    return `A cidade ${nome} tem ${idade}`
}
function mostraHobby(nome, idade){
    return `Eu faco ${nome} ha ${idade}`
}

console.log(mostraIdade('jao', 19))

export{
    mostraCidade,
    mostraIdade,
    mostraHobby
}