

const alunos = [
    {nome: 'João',nota: 7.3,bolsista:false},
    {nome: 'Maria',nota: 9.2,bolsista:true},
    {nome: 'Pedro',nota: 9.8,bolsista:false},
    {nome: 'Ana',nota: 8.7,bolsista:true}
]

// array de bolsistas
const array = alunos.map((objeto)=>objeto.bolsista)
console.log(array)

// desafio 1: todos os alunos sao bolsistas?

const todosSaoBolsistas = (resultado,elemento)=>resultado && elemento
console.log(alunos.map(objeto=>objeto.bolsista).reduce(todosSaoBolsistas))

// desafio 2: algum aluno e bolsista?

const algumBolsistas = (resultado,elemento)=>resultado || elemento
console.log(alunos.map(objeto=>objeto.bolsista).reduce(algumBolsistas))

  
