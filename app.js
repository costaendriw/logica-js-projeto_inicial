alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log('O número secreto é o', numeroSecreto);
let chute;
let tentativas = 1;

// emquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 a 100');
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// em vez de fazer isso abaixo
// if (tentativas > 1){
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

