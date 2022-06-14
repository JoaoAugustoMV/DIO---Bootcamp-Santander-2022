// Atividade 1: Dado um map com nomes como chaves e funções como valor, retorna um array com os nomes do Admins

const membros = new Map()
membros.set('Joao', 'Manutencao').set('Ana', 'Admin').set('Lucka', 'analista').set('Julia', 'Admin')
console.log(membros)

function getAdmins(membros){
    listaAdmins = []
    for([nome, funcao] of membros){
        // console.log('1', nome, funcao)
        if(funcao === 'Admin'){
            listaAdmins.push(nome)
        }
    }
    return listaAdmins
}

console.log(`Os administradores são ${getAdmins(membros)}\n`)




