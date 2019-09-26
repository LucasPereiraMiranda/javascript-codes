// recurso introduzido no ES2015
// destructuring em objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        longradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // operador de destruturacao
// estamos retirando esses atributos do objeto

console.log(nome,idade)