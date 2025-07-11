// •Pide al usuario su edad.
// •Si es mayor o igual a 18, muestra "Puedes entrar".
// •Si no, muestra "No puedes entrar".

const prompt = require("prompt-sync")();

let edad = Number(prompt('Por favor ingresa tu edad: '));

if (edad >= 18){
    console.log('Holi, puedes entrar');
} else{
    console.log('Upss! No puedes entar');
    
}