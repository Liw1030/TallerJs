// •Pide un número con prompt().
// •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10).

const prompt = require("prompt-sync")();

console.log('Hola, vamos a ver las tablas de multiplicar');

let num = Number(prompt('Ingresa un número: '))

for (i = 1; i <= 10; i++) {
  console.log(num , ' x ' , i ,' = ' , (num * i));
}

