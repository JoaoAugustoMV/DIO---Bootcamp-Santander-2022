// npm init
let botao = document.getElementById('botao')
let n1 = document.querySelector('#input1') as HTMLInputElement
let n2 = document.getElementById('input2') as HTMLInputElement

function soma(n1: number, n2: number, devePrintar: boolean, frase: string){
    let resultado = n1 + n2
    if(devePrintar){
        console.log(frase + resultado)
    }
    return n1 + n2
}

let devePrintar = true
let frase:string = 'O valor é: '

if(botao){
    botao?.addEventListener('click', () =>{
        if(n1 && n2){
        console.log(soma(Number(n1.value), Number(n2.value), devePrintar, frase))
    }
    })

}
