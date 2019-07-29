

function verificacaoNumerica(num){    
    if(num>7){
        return "Aprovado"
    }
    else if(num<7){
        return "Reprovado"
    }
    else{
        return "Aprovado com a nota mínima"
    }
}

console.log(verificacaoNumerica(8))