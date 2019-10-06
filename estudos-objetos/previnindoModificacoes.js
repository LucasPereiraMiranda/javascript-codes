
// prevenindo modificacoes no objeto, deixa mudar os dados, mas não inserir novas chaves/valores

const produto = Object.preventExtensions({
    nome: 'Computador', preco: 11500.0, tag: 'promocao'
})

console.log('Extensível: ',Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

// Object.seal faz com que nao possamos adicionar/excluir novos atributos... 
// mas podemos modificar os atuais

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva' // nao surte efeito
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)