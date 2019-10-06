

// forma literal

const obj = {}
console.log(obj)
// funcao construtora

const obj2 = new Object()
console.log(obj2)

// criando as nossas proprias funcoes construtoras
function Produto(nome,preco,desconto){
    this.nome = nome // esta publico gracas ao this
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 2.50,0.15)
const p2 = new Produto("Notebook", 3500.00,0.25)

console.log(`Preco com desconto: ${p1.getPrecoComDesconto()}`)
console.log(`Preco com desconto: ${p2.getPrecoComDesconto()}`)


// funcao factory
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João',7980,4)
const f2 = criarFuncionario("Maria",18750,1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
 
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funcao famosa que retorna um Object
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)
