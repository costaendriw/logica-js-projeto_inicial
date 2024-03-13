alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 3;
console.log('O número secreto é o', numeroSecreto);
let chute = prompt('Escolha um número entre 1 a 10');

// Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto})`);
} else {
    alert('Você errou! Tente novamente.');
}