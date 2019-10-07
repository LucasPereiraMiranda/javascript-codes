

//cadeia de prototipos prototype chain

Object.prototype.atributo0 = 'Z' // nao faca isso

const avo = {
    atributo1 : 'A'
}

const pai = {
    __proto__ : avo,
    atributo2: 'B'
}

const filho = {
    __proto__ : pai,
    atributo3: 'C'
}

console.log(filho.atributo1,filho.atributo2,filho.atributo3)
console.log(filho.atributo0)


const carro = {
    velAtual : 0,
    velMax : 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro) // vai estabelecer relacao de prototipo entre 2 objetos
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari)