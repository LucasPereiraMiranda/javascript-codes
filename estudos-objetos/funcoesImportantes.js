const pessoa = {
    nome: "Lucas",
    idade: 21,
    peso: 80
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => { //usando destructuring
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true, // pode ser enumeravel como aceitar o metodo keys ou values
    writable: false, // aceita ser reescrito
    values: '13/03/1998'
})
pessoa.dataNascimento = '15/9/1935'
console.log(Object.keys(pessoa))


// Object assign ES2015

const destino = {a:1}
const obj1 = {b:2}
const obj2 = {c:3,a:4}

const obj = Object.assign(destino,obj1,obj2)

console.log(obj)