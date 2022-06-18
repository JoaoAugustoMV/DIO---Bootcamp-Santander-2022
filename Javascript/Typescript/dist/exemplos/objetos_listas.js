"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 25,
    profissao: 'desenvolvedora'
};
const andre = {
    nome: 'Andre',
    idade: 19,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 30,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeVolei"] = 3] = "JogadoraDeVolei";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica Discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materias);
