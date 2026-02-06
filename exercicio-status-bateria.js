
// nessa parte do código o usuario não deve mexer
// dessa vez a parte do usuario interagir est no final pois as funcões precisam ser declaradas antes de serem chamadas
// traduzindo, nesse caso tenho que falar pra maquina o que fazer com os dados, depois informo os dados pra ela
// então nesse caso a interação do usuario com o codigo será no "rodapé"


function porcentagemDeDesgaste ( capacidadeAtual, capacidadeDesign){ // aqui crio a função e defino as variaveis necessarias pra ela funcionar

let desgaste = 100 - ( capacidadeAtual / capacidadeDesign * 100); // aqui digo o que essa função deve fazer com essas variaveis

let resultado = ' ' // crio a variavel de retorno de resultado, ela funciona como uma gaveta separada pra guardar algo que ainda não tenho

if (desgaste < 20) { // inicio as analises para classificar o resultado e declarar minha resposta
resultado = 'Bateria Saudável'
} else if ( desgaste >= 20 && desgaste <= 50 ) {
resultado = 'Sinais de desgaste. Considere calibrar'
} else if ( desgaste > 50) {
resultado = 'Substituição recomendada'
} else {
resultado ='Status da bateria não identificado.'
  // aqui previnimos que um erro de uso cause um erro no código
  // já nos preparamos caso alguma das variaveis não seja declarada ou caso seu valor não posssa ser usado nessa função (como um string, por exemplo)
}

return resultado; // aqui grito a resposta pra fora da função
}



// aqui o usuário mexe ----


let statusBateria = porcentagemDeDesgaste (capacidadeAtual, capacidadeDesign) 

console.log (statusBateria) 

// aqui nós  chamamos a função e preenchemos os campos 'capacidadeAtual' e 'capacidadeDesign'
// o usuario pode modificar AS VARIAVEIS de acordo com o caso real, executar o código e aguardar que o retorno será exibido no console
// neste caso, a função só funcionará, caso as duas variaveis tenham sido declaradas com valores em numeros inteiros (int)

















assim ta certo? (eu não vou dar valores pras variaveis da função quem vai fazer isso é o usuario, só quero saber se está funcional e correto
