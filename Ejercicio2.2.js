// •Pide dos números con prompt().
// •Convierte los datos a número.
// •Muestra la suma en consola.

const prompt = require("prompt-sync")();

console.log('Vamos a sumar dos números :)');

num1 = Number(prompt('Ingresa el número 1: '));
num2 = Number(prompt('Ingresa el número 2: '));

suma = num1 + num2;

console.log('El resultado de la suma es: ', suma);


