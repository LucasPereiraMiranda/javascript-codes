
const a = {
    nome : "teste"
};


console.log(a);

const b = a;

console.log(b);

b.nome = "opa";

//ambas as constantes tem a referencia para o objeto, entao ambas sentirao
//a mudanca ja que ela apontam por referencia para o objeto b
console.log(a,b);

let c = 3;

let d = c;

d++;

// como e um tipo primitivo da linguagem, foi realizada apenas uma copia
// c = 3 e d = 4
console.log('c = '+c,'d = '+d);

let valor; // sem ser inicializada

console.log(valor); // valor e undefined

valor = null; // valor foi inicializado, ou seja, esta definida, entretanto ela aponta para o endereco null

console.log(valor);