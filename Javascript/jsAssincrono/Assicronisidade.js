// Assincrono: Não ocorre ao mesmo tempo
// Normalmenete, é executado linha a linha seguindo a ordem

// Promises: Inicialmente não terá um valor, mas pode ser resolvisa ou rejeitada
// Elas podem estar: Pending, Fulfilled, Rejected


async function resolverPromise(){ // Retorna outra Promisse
        const meuPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Resolvida'))
        }, 2000)
    })


    const resolvida = await meuPromise // Executada quando a Promise for resolvida
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((error) => console.log(error.message))

        
    return resolvida
    
}

resolverPromise() // Retorna apenas

console.log('Sincrono')
// Dá erro no node, mas no navegador funciona
//await resolverPromise() // Com o await na frente, os resultados(then) são executados
// await faz o programa parar até que a Promise seja concluida(resolvida ou rejeitada)

