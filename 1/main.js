var numero1 = parseInt(prompt('Inserisci il primo numero: '));

console.log('Primo numero: ' + numero1);

var numero2 = parseInt(prompt('Inserisci il secondo numero: '));

console.log('Secondo numero: ' + numero2);

if (numero1 > numero2) {
    console.log('Il numero maggiore è ' + numero1);
} else if (numero1 < numero2) {
    console.log('Il numero maggiore è ' + numero2);
}else console.log('I numeri sono uguali');
