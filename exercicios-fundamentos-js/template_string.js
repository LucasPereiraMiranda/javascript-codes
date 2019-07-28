
const nome = "Rebeca";
const concatenacao = "Olá" + nome + "!";

const template = ` // as quebras de linha serao consideradas
    ola
    ${nome}!`

    console.log(concatenacao,template);

// expressoes
console.log(`1+1 = ${1+1}`);
 
const upper = texto => texto.toUpperCase();
console.log(`Ei..." ${upper("cuidado")}`);
