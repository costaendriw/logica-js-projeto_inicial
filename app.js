alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log('O número secreto é o', numeroSecreto);
let chute;
let tentativas = 1;

// emquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 a 10');
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        
    }
    // tentativas = tentativas + 1
    tentativas++;
}
