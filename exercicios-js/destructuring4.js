function rand([min=0,max=1000]){
    if(min > max){
        [min,max] = [max,min]
    }
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

vector = [50,60]
console.log(rand(vector))