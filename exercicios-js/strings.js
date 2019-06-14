
const string = "Cao";

console.log(string.charAt(2)); //retornar o quarto caractere da string
console.log(string.charAt(50)); // nao levantara uma excecao entretanto retornara um vazio
console.log(string.charCodeAt(1)); // retornara o codigo ascii do caractere relativo a quarta posicao
console.log(string.indexOf("C")); // retornara o indice relativo ao caractere passado como argumento
console.log(string.substring(1)); // retornara a string a partir do indice passado como argumento
console.log(string.substring(0,3)); // retornando a string limitada pelos indices passados como argumento

console.log("Escola".concat(" ".concat(string)).concat("!")); // + tambem realiza concatenacao entre strings
console.log("Lucas,Marta,Joao".split(',')); // quebrando  a string em um array pelo split

