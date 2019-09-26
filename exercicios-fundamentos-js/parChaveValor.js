// par chave/valor

const saudacao = 'Oi' // possui um contexto lexico 1

function exec(){
    const saudacao = 'Eaeee galera' // possui um contexto lexico 2
    return saudacao
}

// objetos sao grupos aninhados de pares chave/valos

const Cliente = {
    nome: 'Marthinsen',
    idade: 40,
    peso: 150,
    endereco: {
        longradouro : 'Rua Prínio José',
        numero: 567
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)