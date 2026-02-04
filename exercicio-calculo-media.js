// Variável para armazenar o resultado final
let media;

// Array que o usuário pode preencher com quantos números quiser
let arrayNumeros = [10, 8, 6, 4]; 

function mediaDosNumeros(arrayNumeros) {
    // Aqui temos o 'acumulador': ele começa em zero e vai "guardando" a soma de cada item
    let soma = 0;

    // Laço que percorre o array do início ao fim
    for (let index = 0; index < arrayNumeros.length; index++) {
      
// Pega o valor atual da soma e adiciona o número da posição atual do array
        soma = soma + arrayNumeros[index];
    }
    // A média fica fora do loop, porque só pode ser calculada APÓS o loop terminar de somar tudo.
    media = soma / arrayNumeros.length;

    // Aqui a gente 'grita' a média pra fora da função
    return media;
    
}

// Aqui chamamos a função e fazemos a exibição do resultado junto de uma mensagem em string
console.log("A média dos números informados é: " + mediaDosNumeros(arrayNumeros));
