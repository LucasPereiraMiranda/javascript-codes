const a = 1
const b = 2
const c = 3

const obj1 = {
    a,
    b,
    c
}

console.log(obj1)

const nomeAtributo = 'nota'
const valorAtributo = 7.8

const obj2 = {}
obj2[nomeAtributo] = valorAtributo
console.log(obj2)

const obj3 = {
    nomeAtributo: valorAtributo
}

console.log(obj3)

const obj4 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj4)