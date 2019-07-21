function teste(){
    console.log('a = ', a)
    var a = 2 
    console.log('a = ', a)
}

teste()
console.log('a = ', a)

// a variavel a sera içada para a primeira linha
// ela estara indefinida na primeira linha
// nao e uma boa pratica
// evitar o hoisting
// o içamento nao funciona quando temos um let
// let a = 2