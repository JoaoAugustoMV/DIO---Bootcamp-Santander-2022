const elementos = document.querySelectorAll('h1, button, footer, body')
const h1TituloPag = document.querySelector('h1#tituloPag')
const btnTrocaModo = document.getElementById('btnTrocaModo')

btnTrocaModo.addEventListener('click', trocaTudo)
let light_mode = true


function trocaTudo(){
    trocaCor()
    trocaTexto()
}
function trocaTexto(){
    let h1Modo = ''
    let btnModo = ''
    if(light_mode){
        h1Modo = 'Dark'
        btnModo = 'Light'
    } else{
        h1Modo = 'Light'
        btnModo = 'Dark'
        
    }
    h1TituloPag.innerText = `${h1Modo} Mode ON`
    btnTrocaModo.innerText = `${btnModo} Mode`
    light_mode = !light_mode
}
function trocaCor(){
   
    elementos.forEach((atual) =>{
        atual.classList.toggle('dark-mode')
    })
}


