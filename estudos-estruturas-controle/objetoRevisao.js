
// em js, um objeto e uma colecao dinamica de pares chave valor 

const produto = new Object

produto.nome = 'Caneta'
produto['marca'] = 'Bic'
produto.preco = 0.50

console.log(produto)

delete produto['marca']
delete produto.preco

console.log(produto)

const carro = {
    modelo:'Audi A4',
    valor: 150000,
    proprietario: {
        nome:'Lucas Pereira Miranda',
        idade: 21,
        endereco:{
            longradouro:'Rua ABC',
            numero: 1856
        }
    },
    condutoresAtuais : [{
        nome: 'Ellen Miranda',
        idade: 18
    },{
        nome: 'Erica Miranda',
        idade: 40
    }],
    calcularValorSeguro: function(){
        //
    }
}

console.log(carro)
