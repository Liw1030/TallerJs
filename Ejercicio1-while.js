// •Pide un número con prompt().
// •Usa un while para contar desde 1 hasta ese número.
// •Muestra cada número en consola.

const prompt = require("prompt-sync")();

let num = Number(prompt('Ingresa un número: '));

let contador = 0;

while(contador < num){
    console.log('Los números de 1 hasta el número digitado es: ', contador+1);
    contador = contador+1
}