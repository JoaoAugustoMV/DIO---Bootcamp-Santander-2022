// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo')! as HTMLButtonElement // ! Indica que o elemento não pode ser nulo
let somar = document.getElementById('somar') as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLHeadElement



function somarrAoSaldo(somar: number): void {
    let campo = Number(campoSaldo.innerHTML)
    campoSaldo.innerHTML = `${campo + somar}`;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}
if(botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        if(somar){
            somarrAoSaldo(Number(somar.value))
        }
    })
}

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="somar"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */