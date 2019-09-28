
const pessoa = {
    saudacao: "bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre o mundo funcional e o mundo orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // coloca o this do objeto que passei para a funcao bind
falarDePessoa()
