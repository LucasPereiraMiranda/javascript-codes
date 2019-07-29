
function faloSeForVerdade(algo){
    if(algo){
        console.log('Verdade...',algo)
    }
}


faloSeForVerdade() // nada: undefined -> false
faloSeForVerdade('') //vazio -> false
faloSeForVerdade(NaN) // -> false
faloSeForVerdade(undefined) // -> false
faloSeForVerdade(0) // -> false
faloSeForVerdade(-1) // -> verdade
faloSeForVerdade(' ')// -> string nao vazia -> true
faloSeForVerdade({})// -> objeto -> true


