
Array.prototype.filter2 = function(callback){
    const novoArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil : true},
    {nome: 'ipad pro', preco: 4200, fragil : true},
    {nome: 'Copo de vidro', preco: 12.49,fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter2(function(objeto){
    return objeto.preco >= 500 
}))