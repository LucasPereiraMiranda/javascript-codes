// pessoa aponta para um endereco 123 que possui um objeto {...}

const pessoa = {
    nome: 'joão'
}

pessoa.nome = 'Pedro'

// e valido, mesmo pessoa sendo constante
// ja que quem mudou foi nome e nao o objeto pessoa

console.log(pessoa)

Object.freeze(pessoa) // faz com que nao possamos mudar nem mesmo
// os atributos do objeto pessoa

