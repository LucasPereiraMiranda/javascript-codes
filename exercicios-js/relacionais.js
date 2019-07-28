console.log('1)','1' == 1) // igual ==
console.log('2)', '1'===1) // estritamente igual ===
console.log('3)', '3'!=3) // diferente !=
console.log('4)', '3'!==3) // estritamente diferente !==
console.log('5)', 3 < 2) // menor que <
console.log('6)', 4 > 5) // maior que >
console.log('7)', 8 >= 8) // maior igual igual >=
console.log('8)', 80 <= 80) // menor igual que <=

const d1 = new Date(0)
const d2 = new Date(0)

console.log('9)',d1 === d2) // vai comparar os enderecos de memoria
console.log('10)',d1 == d2) // vai dar False para ambos
console.log('11)',d1.getTime() == d2.getTime()) // vai ser True
