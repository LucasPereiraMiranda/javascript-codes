

const ferrari = {
    modelo: 'f40',
    velocidadeMaxima: 324
}

const volvo = {
    modelo:'v40',
    velocidadeMaxima: 200
}

console.log(ferrari.__proto__) // vai procurar os atributos no prototipo do objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)