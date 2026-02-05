// Aqui criamos a variável de controle do nível

let nivel;

// Loop que simula o progresso de 1 a 30 passos

for (let passos = 1; passos <= 30; passos++) {

    // Lógica de classificação por intervalos (Range logic)
    if (passos >= 1 && passos <= 10) {
        nivel = 'Facil';
    } else if (passos > 10 && passos <= 20) {
        nivel = 'Médio';
    } else if (passos > 20 && passos <= 30) {
        nivel = 'Dificil';
    } else {
        nivel = 'Não identificado';
        // aqui previnimos que um erro de uso cause um erro no código
        // considerando qualquer coisa diferente de 1 á 30 passos como 'não identificado'
    }

    // Exibe o status atualizado a cada iteração

    console.log('Você já deu ' + passos + ' passos até agora. \n Você está na fase ' + nivel + '!');
}
