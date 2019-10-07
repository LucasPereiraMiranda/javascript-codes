
const carrinho = [
    '{"nome": "borracha","preco":3.45}',
    '{"nome": "caderno","preco":13.90}',
    '{"nome": "kit de lápis","preco":41.50}',
    '{"nome": "caneta","preco":2.20}'
]
// retornar um array apenas com os preços

const carrinhoObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(carrinhoObjeto).map(apenasPreco)
console.log(resultado)
