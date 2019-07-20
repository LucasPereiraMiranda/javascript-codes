

// armazenando uma funcao dentro de uma variavel

const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

// armazenando uma funcao arrow em uma variavel
// a setinha substitui o nome function

const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implicito

const subtracao = (a,b) => a - b

console.log(subtracao(2,1))

const imprimirString = a => console.log(a)

imprimirString('Olá arrow function')