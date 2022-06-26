//  ECMAScript Error: Ocorrem em tempo de execução

// DOMExecption: Erros relacionado ao DOM


//new Error(mensagem, nomeArquivo, numLinha)

const meuErro = new Error('Mensagem invalida')
meuErro.name = 'Nome do erro'
throw meuErro

function e_str (str){
    if(!str){
        throw meuErro
    }
}

function try_catch(str){
    try{ // Tenta rodar o codigo
        e_str()
    }
    catch(e){ // Caso haja um erro seja lançado no try, será executado o catch
        throw e 
    }

    finally{ // Rodará havendo erro ou não

    }
}

try_catch()

