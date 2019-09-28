

const operacao = function(x,y){
    return x + y
}

const imprimirResultado = function(x,y,imprimindo = operacao){
    console.log(imprimindo(x,y))
}

imprimirResultado(10,20,(x,y)=>x*y)
imprimirResultado(50,80,(x,y)=>x%y==0)