

const notas = [7.7,8.9,7.9,7.5,9.4,7.6,4.5]

// diferenca entre usar callback e nao usar esta tecnica
//sem calback

const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter((nota) => nota < 7)

console.log(notasBaixas2)



