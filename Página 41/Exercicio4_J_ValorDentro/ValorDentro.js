// j. Elaborar um programa que efetue a leitura de um valor que esteja entre a
// faixa de 1 a 9. Após a leitura do valor fornecido pelo usuário, o programa
// deverá indicar uma de duas mensagens: "O valor está na faixa permitida",
// caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor
// está fora da faixa permitida", caso o usuário forneça valores menores
// que 1 ou maiores que 9.

let numero;

alert(`Vamos dizer se o valor está entre 1 e 9`);

numero = parseInt(prompt(`Digite um número entre 1 e 9: `));

while ((numero < 0) || (numero > 9)) {
    numero = parseInt(prompt(`O número ${numero} não está na faixa de 1 a 9.\n
    Digite novamente: `));
}

if ((numero >= 0) || (numero <= 9)) {
    alert(`O número ${numero} está na faixa de 1 a 9`);
}

