
// filtrar a estrutura array com objetivo de obter os elementos
// a partir de algum criterio
// se for false, nao vai adicionar no novo array
// se for true, vai adicionar no novo array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil : true},
    {nome: 'ipad pro', preco: 4200, fragil : true},
    {nome: 'Copo de vidro', preco: 12.49,fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(objeto){
    return objeto.preco >= 500 
}))

const caro = (objeto)=>{
    return objeto.preco > 500
}

const fragil = (objeto)=>{
    return objeto.fragil
}

console.log(produtos.filter(caro).filter(fragil))

