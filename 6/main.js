
// cubo di n numeri chiest in input

var n = parseInt(prompt('inserisci un numero '))



for (var i = 1; i <= n; i++) {

    console.log('numero = ' + i);
    var cont = i;

    for (var j = 1; j < 3; j++) {

        cont = cont * i;

    }

    console.log('cubo del numero = ' + cont );

}
