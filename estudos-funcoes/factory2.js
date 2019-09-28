

const fabricaProdutos = function(nome='', preco=0.0){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}


console.log(fabricaProdutos('Notebook Acer',2100.99))
console.log(fabricaProdutos('iPad air',5980.99))


