"use strict";
// Tipo any
// - Não é recomendado usar 
// - Pode ser encotrado em projeto que originalmente foi escrito em JS e para facilitar a 'tradução' ou em uso de bibliotecas externas
let valorAny; // Aceita qualquer tipo
valorAny = 45;
valorAny = 'wresf';
valorAny = true;
// O tipo unkwonw é parecido, mas a diferença entre eles é que para unkwow ser atribuido a outra variavel é necessário fazer um verificação
let desconhecido;
desconhecido = '21';
desconhecido = 'Str';
desconhecido = true;
let str;
// Verficação
if (typeof desconhecido === 'string') {
    str = desconhecido;
}
// Ainda existe o tipo never: Usado para codigo que nunca terminaram sua execução(Uso Rarissimo)
