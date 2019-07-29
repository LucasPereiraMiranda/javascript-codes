
/*estudos iniciais*/

function estruturaIfRetornaMenor(num1,num2){
    if(num1 < num2){
        return num1
    }
    else if(num1 == num2){
        return 'Os numeros são iguais'
    }
    else{
        return num2
    }
}

function estruturaForObterPares(){
    let conjuntoPares = []
    for(i=0;i<=50;i++){
        if(i%2 === 0){
            conjuntoPares.push(i)
        }
    }
    return conjuntoPares
}

console.log(estruturaForObterPares())
console.log(estruturaIfRetornaMenor(1,2))