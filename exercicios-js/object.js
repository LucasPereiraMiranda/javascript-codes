// criando objetos em javascript de forma literal
// o par de chaves, representa um objeto
// objeto em javascript é uma coleção chave-valor

const prod1 = {};

prod1.nome = 'Celular ultra-mega';
prod1.preco = 2500.00;

// outra forma de criar um objeto

const prod2 = {
    nome : 'Tenis',
    preco : 79.90,
    categoria : {
        tipo : 'Calçados'
    }
};

console.log(prod1,prod2);

// estes objetos sao diferentes de um json
//json -> texto
