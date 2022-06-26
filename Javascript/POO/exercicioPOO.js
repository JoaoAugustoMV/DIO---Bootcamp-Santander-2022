class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){ // Parametros para instaciar
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = saldo // atributos que tenham getter e setter, por convenção, são iniciados com '_'
    }
    get saldo(){
        return this._saldo
    }
    set setSaldo(valor){
        this._saldo = valor
    }
    sacar(valor){
        this._saldo = this._saldo - valor
    }
    depositar(valor){
        this._saldo = this._saldo + valor
    }

} //end class ContaBancaria

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, tipo = 'Conta Corrente', saldo, cartaoCredito){
        super(agencia, numero, tipo, saldo)
        this._cartaoCredito  = cartaoCredito // atributos que tenham getter e setter, por convenção, são iniciados com '_'
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCretido(valor){
        this._cartaoCredito = valor
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo)
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo)
    }
    sacar(valor){
        if(valor < 500){
            this._saldo = this._saldo - valor
        } else{
            console.log('Apenas saques de até 500 são possiveis')
        }
    }
}

const bradesco = new ContaBancaria(1234, 4, 'corrente', 900)

// bradesco.setSaldo = 1000
// bradesco.sacar(150)
// bradesco.depositar(300)
// console.log(bradesco)

const santander = new ContaCorrente(2211, 5, 'corrente', 1500, true)
santander.depositar(500)
console.log(santander)

const nubank = new ContaUniversitaria(9872, 1, 'estudante', 750)
nubank.sacar(300)
console.log(nubank)