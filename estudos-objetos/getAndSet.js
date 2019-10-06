

const sequencia = {
    _valor : 1, //convencao de que _valor e privado
    get valor(){ 
        return this._valor++;
    },
    
    set valor(valor){
        if(valor > this._valor){
           this._valor = valor
        }
    }
}


console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1500
console.log(sequencia.valor,sequencia.valor)