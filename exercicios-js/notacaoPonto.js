
console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
obj1['Preço'] = 89.90

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Lucas')
const obj3 = new Obj('Marcos')

console.log(obj2.nome)
console.log(obj3.nome)
