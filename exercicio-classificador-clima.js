// A variável T representa a temperatura (aqui o usuário define o valor)
let T = ' '; 



// Apartir desta linha o usuario não deve mexer

// Início da verificação lógica
if (T < 18) {
    console.log('Clima de montanha!');
} 
// O o perador && é pra definir um intervalo fechado ( nesse caso, entre 18 e 25)

else if (T >= 18 && T <= 25) {
    console.log('Clima agradável!');
} 
else if (T > 25) {
    console.log('Clima de deserto!');
} 
// Caso o valor de T não seja um número ou não tenha sido definido já temos também uma resposta
// Aqui estamos previnindo que um erro de uso cause um erro no sistema

else {
    console.log('Clima não detectável');
}
