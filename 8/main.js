var number = prompt('inserisci un numero a 4 cifre');

    array = [],
    sNumber = number.toString();

for (var i = 0, n = sNumber.length; i < n; i++) {

    array.push(+sNumber.charAt(i));
}

console.log('array: '+ array);

var somma = 0;

for (var i = 0; i < array.length; i++) {
    somma += array[i];
}

console.log('somma: ' + somma);
