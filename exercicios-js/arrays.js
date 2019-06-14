
const valores = [7.8 , 8.9 , 6.7 , 8.2]; // declarando um array

console.log(valores[0], valores[3]); // acessando as posicoes

console.log(valores[4]); // vai retornar que o elemento 4 nao existe _ indefinido

console.log(valores.length); // obtendo o numero de elementos do array

valores.push({id : 3}, null, undefined, 'teste'); // o array e uma estrutura heterogenea

console.log(valores);

console.log(valores.pop()); // vai retirar e retornar a ultima posicao do array

console.log(valores);

delete valores[0]; //removendo a posicao 0 do array

console.log(valores);

console.log(`o array é do tipo: ${typeof(valores)}`);

