let meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

let dia = document.querySelector("#dia");

for (let d = 1; d <= 31; d++) {
    dia.innerHTML += `<option class="text-black">${d}`
    
};

let mes = document.querySelector("#mes");
for (let m = 0; m < meses.length; m++) {
    mes.innerHTML += `<option class="text-black">${meses[m]}`
    // Criar condicionais para verificar mes de fevereiro e mese que terminan em 30
};

function descobrirNome() {
    // tarefa de casa SWITCH
    // usando dia.value e mes.value

    console.log(dia.value);
    console.log(mes.value);
}
