function augment(){

    let numeroAtual = document.getElementById("valorAtual").innerHTML;
    let numeroMaximo = document.getElementById("Maximo").innerHTML;

    if(parseInt(numeroAtual) < parseInt(numeroMaximo)){
    let somaresultado = parseInt(numeroAtual) + 1;
    $("#valorAtual").text(somaresultado);

    let percentage = somaresultado * 100 / parseFloat(numeroMaximo);

    $("#percentage").text(percentage + "%");
    $("#percentage").width(percentage + "%");
    }
}

function reset(){
    $("#valorAtual").text(0);
    $("#percentage").text("0%").width("0%");
}