var invitati = ['Pippo' , 'Pluto' , 'Topolino' , 'Minnie'];

var nome = prompt('scrivi il tuo nome');
  return nome.charAt(0).toUpperCase() + nome.slice(1);

console.log('nome: ' + nome);

for (var i = 0; i < invitati.length; i++) {
    if(nome == invitati[i]){

        console.log('sei stato invitato');
        break;
    }

}

if (i == invitati.length){
 console.log('non sei stato invitato');
}
