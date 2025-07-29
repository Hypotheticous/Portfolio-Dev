console.log("Olá, Mundo!");
// JavaScript aceita ' e ''

/*Comentários
Multiplas
Linhas*/ 

/* Blocos de código delitam uma senteça de código.
para isso, use o {}*/

// Desafio 1
{console.log("1\n3\n5\n7\n9");}
{console.log("2\n4\n6\n8\n10");}

//  Usar camelCase
// Podemos criar uma varriável vazio e depois referênciar

var identificar;

var variavelAntiga = "Antigo. Não deve ser usado.";
let variavelNova= "Mudam";
const contantes = "Não mudam";

// Tipos de variáveis do JavaScript

    // Tipo String
    let nome = "Ariana";

    // Tipo booleano
    let ligado = true;

    // Os tipos númericos sempre são Double.
    let salario = 8951.5;
    let idade = 27;

    // Tipo object
    const carro = { marca: "Toyota", modelo: "Corolla", ano: 2023 };

    let vazio = null;
    let inexistente = undefined;

    // É melhor ter mais contantes do que variáveis em um código.

// Desafio 2

let area = 25;
let raio = 10;
const pi = 3.14159;

console.log("A circunferência é: " + (pi * (raio ** 2)) + " m²");

// Desafio 3

let a = 7;
let b = 94;

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);