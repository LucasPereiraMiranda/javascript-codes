

const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai) // cria um novo objeto com um prototipo pai definido
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai,{
    nome: {
        value: 'Bia',
        writable:false,
        enumerable: true
    }
})
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // pelo prototipo, vai pegara cor do cabelo do pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){ // verificar se uma determinado atributo passado por parametro pertence diretamente ou nao ao objeto 
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}