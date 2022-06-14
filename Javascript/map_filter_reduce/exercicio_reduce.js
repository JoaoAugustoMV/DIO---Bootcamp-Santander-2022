// Calcule o saldo final do Cliente após as compras

const compras = [10, 450, 13, 1.5, 800]

const calculaSaldo = (acc, valor) => acc - valor
    
console.log('compras.reduce(calculaSaldo, 3500)', compras.reduce(calculaSaldo, 3500))