
const functs = []

for(var i = 0; i < 10; i++){
    functs.push(function(){
        console.log(i);
    })
}

functs[2]()
functs[8]()

// sera impresso para as situacoes o valor de 10, ja que var nao tem escopo de bloco
