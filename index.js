let meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

let mes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let ano = new Date().getFullYear();

for (let m = 0; m < meses.length; m++) {
    mes.innerHTML += `<option class="text-black">${meses[m]}`;
}

// Verifica se o ano é bissexto
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// Criar condicionais para verificar mes de fevereiro e meses que terminam em 30
function diasNoMes(nomeMes, ano) {
    if (nomeMes === "FEV") {
        return ehBissexto(ano) ? 29 : 28;
    }
    if (nomeMes === "ABR" || nomeMes === "JUN"
        || nomeMes === "SET" || nomeMes === "NOV") {
        return 30;
    }
    return 31;
}

// Monta a lista de dias de acordo com o mês escolhido
function preencherDias() {
    dia.innerHTML = "";   // apaga os dias antigos

    let total = diasNoMes(mes.value, ano);

    for (let d = 1; d <= total; d++) {
        dia.innerHTML += `<option class="text-black">${d}`;
    }
}

preencherDias();                              // preenche ao abrir a página
mes.addEventListener("change", preencherDias); // atualiza quando trocar o mês

function descobrirNome() {
    // tarefa de casa SWITCH
    // usando dia.value e mes.value

    console.log(dia.value);
    console.log(mes.value);
}
