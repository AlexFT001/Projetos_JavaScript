function augment(){

    let numeroAtual = document.getElementById("valorAtual").innerHTML;
    let numeroMaximo = document.getElementById("Maximo").innerHTML;

    if(parseInt(numeroAtual) < parseInt(numeroMaximo)){
    let somaresultado = parseInt(numeroAtual) + 1;
    document.getElementById("valorAtual").innerHTML = somaresultado;

    let percentage = somaresultado * 100 / parseFloat(numeroMaximo);

    document.getElementById("percentage").innerHTML = percentage+"%";
    document.getElementById("percentage").style.width = percentage + "%";
    }
}

function reset(){
    document.getElementById("valorAtual").innerHTML = 0;
    document.getElementById("percentage").innerHTML = "0%";
    document.getElementById("percentage").style.width = "0%";
}