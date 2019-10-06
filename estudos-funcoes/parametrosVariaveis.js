// versao old school
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(10,20,30))
console.log(soma(1.1,2.2,"OLÁ MUNDO"))
console.log(soma('a','b','c'))
