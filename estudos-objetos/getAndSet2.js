

const p1 = {
    _nome :undefined,
    _idade:NaN,

    set nome(nome){
        this._nome = nome
    },

    get nome(){
        return this.nome
    },

    set idade(idade){
        if(idade>0){
            this._idade = idade
        }
    },

    get idade(){
        return this._idade
    }
}

p1.nome = 'Lucas'
p1.idade = 21
console.log(p1)