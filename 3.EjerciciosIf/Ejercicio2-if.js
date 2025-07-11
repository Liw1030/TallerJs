// •Pide un número.
// •Si es positivo, muestra "Es positivo".
// •Si es negativo, muestra "Es negativo".
// •Si es cero, muestra "Es cero".

const prompt = require("prompt-sync")();

let num = Number(prompt('Por favor digita un número: '));

if (num > 0){
    console.log('El número ingresado es positivo');
} else if (num < 0){
    console.log('El número ingresado es negativo');
} else{
    console.log('El número es cero');
}; 
