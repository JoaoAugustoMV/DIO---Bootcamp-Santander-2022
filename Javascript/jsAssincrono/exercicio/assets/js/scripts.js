
const imgBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')
const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

const getCats = async () =>{
    try{
        const dados = await fetch(BASE_URL)
        const json = await dados.json()

    return json.webpurl
    }
    catch(erro){
        console.log(erro)
    }
}
const loadImg = async() =>{
    catImg.src = await getCats()
}

imgBtn.addEventListener('click', loadImg)