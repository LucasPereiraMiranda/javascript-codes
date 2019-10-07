
const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() //massa saiu da lista de pilotos

console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento ... indice 0
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca um elemento no indice 0
console.log(pilotos)

// splice pode inserir e/ou remover elementos

//adicionar 
pilotos.splice(2,0,'Botas','Massa')
console.log(pilotos)

// remover 
pilotos.splice(3,1) // massa saiu novamente
console.log(pilotos)

const algunsPilotos = pilotos.splice(2) // vai retornar um novo array
console.log(algunsPilotos)

