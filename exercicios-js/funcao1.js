// exemplo de uma funcao sem retorno

function imprimirSoma(a,b){
    console.log(a + b)
}


// funcao com retorno

function obterSoma(a, b= 5){ // vai utilizar o valor 5 para b, quando o mesmo nao for passado como parametro
    return a+b
}


/*chamando a funcao imprimirSoma*/ 
imprimirSoma(5, 9)
/*chamando a funcao obterSoma*/ 
console.log(obterSoma(2,3));
console.log(obterSoma(2));



