// •Pide una contraseña con prompt().
// •Usa un while para seguir preguntando hasta que ingrese "1234".
// •Cuando acierte, muestra "Contraseña correcta".

const prompt = require("prompt-sync")();

let pw = prompt('Digita la contraseña: ');
const passwordCorrecta = "1234";

// Al usar ! estoy negando == osea estoy contradiciendo, no quiero que sea igual sino que sea diferente
while (pw !== passwordCorrecta) {
    console.log('Contraseña incorrecta. Inténtalo de nuevo.');
    pw = prompt('Digita la contraseña: ');
}

console.log('Contraseña correcta.');
