let play5 = {
    preco: 4000,
    ano_lancamento: 2020,
    resolucao_max: "2160p",
    fps_max: 120, 
    nucleos_e_threads: [8, 16]
}

// for ..in em objetos: Retorna a chave do atributo
for(let atrs in play5){
    console.log(atrs)
}
// Para acessar os valores: obj[atr]
for(let atrs in play5){
    console.log(play5[atrs])
}

//for...in em array OU strings: retorna os indices dos elementos
for(let nums in [435, 56, 5, 7, 4, 34534, 5]){
    console.log(nums)
}//for...of em array OU strings: retorna os elementos
for(let nums of [435, 56, 5, 7, 4, 34534, 5]){
    console.log(nums)
}
