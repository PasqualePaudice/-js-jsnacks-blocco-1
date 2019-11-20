
var array = [];

var num1 = parseInt(prompt('inserisci un numero'));

array.push(num1);

var num2 = parseInt(prompt('inserisci un numero'));

array.push(num2);

var num3 = parseInt(prompt('inserisci un numero'));

array.push(num3);

var num4 = parseInt(prompt('inserisci un numero'));

array.push(num4);

var num5 = parseInt(prompt('inserisci un numero'));

array.push(num5);

console.log(array);


var somma = 0;

for (var i = 0; i < array.length; i++) {
    var somma = somma + array[i] ;
}

console.log('somma con il for ' + somma);


var somma2= 0;
var index=0;

while(index < array.length){
    var somma2 = somma2 + array[index];
    index++;
}

console.log('somma con il while ' + somma2);
