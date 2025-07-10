// •Pide al usuario su año de nacimiento con prompt().
// •Calcula su edad.
// •Muestra.

const prompt = require("prompt-sync")();

let edad = prompt('Ingresa tu edad: ')
let anio = 2025;

anioNacimiento =  anio - edad;

console.log('Tu fecha de nacimiento es: ', anioNacimiento);
