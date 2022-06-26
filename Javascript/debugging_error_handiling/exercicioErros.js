lista = [1, 23, 4, 5, 6]

function tamanho(array, n){
   try{
        if(!array || !n) throw new ReferenceError('Parametro(s) invalidos')
            

        if(typeof array !== 'object') throw new TypeError('Parametro do array invalidos')

        if(typeof n !== 'number') throw new TypeError('Parametro número invalido')

        if(array.length !== n) throw new RangeError('O array tem tamanho diferente')

        return array
    }

    catch(error){

        // instanceof valida se os elementos tem o mesmo prototype
        if(error instanceof ReferenceError){
            console.log('Reference error')
            console.log(error.name)
            console.log('error.message', error.message)
        } else if(error instanceof TypeError){
            console.log('TypeError')
            console.log('error.name', error.name)
            console.log('error.message', error.message)
        } else if(error instanceof RangeError){
            console.log('RangeError')
            console.log('error.name', error.name)
            console.log('error.message', error.message)
        } else if(error instanceof TypeError){
            console.log('TypeError')
            console.log('error.name', error.name)
            console.log('error.message', error.message)
        } else{
            console.log('Erro diferente -')
        }
        
    }
} //end tamanho(array, n)

tamanho([], 1)