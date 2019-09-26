

function retornarRange(num1,num2){
    let vet = []
    var i = num1
    while(i<=num2){
        vet.push(i)
        i++
    }
    return vet
}


console.log(retornarRange(0,10))
