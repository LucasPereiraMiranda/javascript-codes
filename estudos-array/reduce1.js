
// reduce: transformar o array em alguma outra coisa

const alunos = [
    {nome: 'João',nota: 7.3,bolsista:false},
    {nome: 'Maria',nota: 9.2,bolsista:true},
    {nome: 'Pedro',nota: 9.8,bolsista:false},
    {nome: 'Ana',nota: 8.7,bolsista:true}
]

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador,atual)=>{
    console.log(acumulador,atual)
    return acumulador + atual
}) // podemos passar um valor inicial aqui ,valor)

console.log(resultado)