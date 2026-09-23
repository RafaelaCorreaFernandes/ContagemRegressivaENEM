console.log("Script carregado com sucesso!");

const diasElemento = document.getElementById("dias-value");

const horasElemento = document.getElementById("horas-value");

const minutosElemento = document.getElementById("minutos-value");

const segundosElemento = document.getElementById("segundos-value");

// document ajuda a procurar na página,
// getElementById pega o elemento pelo id


const dataProva = new Date(2026, 10, 8); // data do ENEM


function atualizarContador() {


    const agora = new Date();


    const diferenca = dataProva - agora;

    // Subtração da data do ENEM com a data atual

    // O resultado é dado em MILISSEGUNDOS.

    // 1 segundo = 1.000 milissegundos


    

    // 1 dia = 1.000 × 60 × 60 × 24
    // 1 dia = 86.400.000 milissegundos

    const dias = Math.floor(diferenca / 86400000);

    // Math.floor arredonda para baixo


    
    // CONVERSÃO PARA HORAS


    const horas = Math.floor(
        (diferenca % 86400000) / 3600000
    );

    // O operador % é o resto da divisão.
    // Ele pega o que sobrou depois de retirar os dias.


    
    // CONVERSÃO PARA MINUTOS
    

    const minutos = Math.floor(
        (diferenca % 3600000) / 60000
    );

    // 1 minuto = 1.000 × 60
    // 1 minuto = 60.000 milissegundos


    // CONVERSÃO PARA SEGUNDOS

    const segundos = Math.floor(
        (diferenca % 60000) / 1000
    );

    // 1 segundo = 1.000 milissegundos


    //valores no html

    diasElemento.textContent = dias;

    horasElemento.textContent = horas;

    minutosElemento.textContent = minutos;

    segundosElemento.textContent = segundos;
}



// Executa uma vez assim que a página carrega.

atualizarContador();


//atualiza automaticamente
// Executa atualizarContador novamente a cada 1 segundo.
// 1000 milissegundos = 1 segundo.

setInterval(atualizarContador, 1000);