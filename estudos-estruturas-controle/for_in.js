
const notas = [1,2,3,4,5,6,7,8,9]


function imprimirNotas(notas){
    console.log('Notas a serem listadas: ')
    for(i in notas){
        console.log('nota: ',notas[i])
    }   
}

imprimirNotas(notas)

const Pessoa = {
    nome: 'Lucas',
    idade: '21',
    sexo: 'Masculino',
    curso: 'Engenharia de Computação'
}

for(atributo in Pessoa){
    console.log(`${atributo}`, `${Pessoa[atributo]}`)
}
