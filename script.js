console.log("Script carregado com sucesso!");

const diasElemento = document.getElementById("dias-value");
const horasElemento = document.getElementById("horas-value");
const minutosElemento = document.getElementById("minutos-value");
const segundosElemento = document.getElementById("segundos-value");
//document ajuda a procurar na página, getElementById pega o elemento pelo id, e o innerHTML é o que vai aparecer na tela

const agora = new Date(); // criacao da data atual

const dataProva = new Date(2026, 10, 8); //data do ENEM

const diferenca = dataProva - agora; //subtração da data do ENEM com a data atual