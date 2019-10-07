
// o map serve para transformar um array em outro
// se o array original tem x elementos, o array resultante vai ter o tamanho x
// o map e um for com proposito para transformar os elementos

const nums = [1,2,3,4,5,6,7,8,9,10]

let resultado = nums.map((elemento)=>{
    return elemento * 10
})

console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)