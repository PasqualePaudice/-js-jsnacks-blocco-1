
var parola1 = prompt('inserisci la prima parola');

console.log('prima parola: ' + parola1);

var parola2 = prompt('inserisci la seconda parola');

console.log('seconda parola: ' + parola2);

if (parola1.length > parola2.length) {
    console.log('la parola più lunga è: ' + parola1);
}else if (parola1.length < parola2.length){
    console.log('la parola più lunga è: ' + parola2);
}else {
    console.log('le parole sono della stessa lunghezza');
}
