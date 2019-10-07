console.log(typeof Array, typeof new Array,typeof [])

let aprovados = new Array('Bia','Carlos','Ana')

console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined

aprovados[3] = 'Paulo'
aprovados.push('Abila') // forma mais usual para adicionar um elemento
console.log(aprovados.length)


aprovados.sort()
console.log(aprovados)
delete aprovados[1] // vai colocar undefined no lugar

aprovados.splice(1,2,'Lucas','Ellen') // indice que quer trabalhar, numero de elementos que quer excluir, elementos que quer adicionar
console.log(aprovados)
