var array = [];

for(var i=0; i<6 ; i++){
    var j = parseInt(prompt('inserisci un numero:'));
    if (j % 2 != 0) {
        array.push(j);
        console.log('numero ' + j);
    }

}

console.log('array ' + array);
