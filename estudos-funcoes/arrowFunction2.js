// arrow function 
let imc = (altura,peso) => (peso)/(altura)**2

console.log(imc(1.70,56))

function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

