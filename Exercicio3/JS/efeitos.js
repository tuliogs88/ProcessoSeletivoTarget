var arrayFatura = [];

function AddRegistro(){
    let fatura = {};
    fatura.valor = parseFloat(document.getElementById("valor").value);
    fatura.data = document.getElementById("data").value;
    
    
    arrayFatura.push(fatura);
	document.getElementById("valor").value = "";
	document.getElementById("data").value = "";
    
    var valoresArmazenados = document.getElementById("registro");
	valoresArmazenados.innerHTML = "";
	localStorage.meuRegistro = JSON.stringify(arrayFatura);
    
    for (var i = 0; i < arrayFatura.length; i++){
        var listaFatura = document.createElement('li');
        listaFatura.innerHTML = "Valor: " + arrayFatura[i]["valor"] + " Data: "+ arrayFatura[i]["data"];
        valoresArmazenados.appendChild(listaFatura);
    }
}

function verificaValores() {
    var verificaValor = document.getElementById("verifica");
	verificaValor.innerHTML = "";
    var maior = 0;
    var media = 0;
    var numeroDias = 0;
    
    for (var m = 0; m < arrayFatura.length; m++){
        var maiorNumero = arrayFatura[m]["valor"];
        
        if (maiorNumero > maior){
            maior = maiorNumero;
        }
        
    }
    var exibirMaior = document.createElement('p');
    exibirMaior.innerHTML = "O maior valor é: " + maior;
    verificaValor.appendChild(exibirMaior);
    
    var menor = maior;
    for (var r = 0; r < arrayFatura.length; r++){
        var menorNumero = arrayFatura[r]["valor"];
        
        if (menorNumero < menor){
            menor = menorNumero;
        }
    }
    var exibirMenor = document.createElement('p');
    exibirMenor.innerHTML = "O menor valor é: " + menor;
    verificaValor.appendChild(exibirMenor);
    
    for (var a = 0; a < arrayFatura.length; a++){
        media += arrayFatura[a]["valor"];
    }
    var mediaFinal = media / arrayFatura.length;
    
    for (var c = 0; c < arrayFatura.length; c++){
        var valor = arrayFatura[c]["valor"];
        
        if (valor > mediaFinal){
            numeroDias++;
        }
    }
    var exibirMedia = document.createElement('p');
    exibirMedia.innerHTML = "O numero de dias em que o faturamento foi superior : " + numeroDias;
    verificaValor.appendChild(exibirMedia);
    
}
