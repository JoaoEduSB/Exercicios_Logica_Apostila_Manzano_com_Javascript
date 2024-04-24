// e) Elaborar um programa que efetue a leitura de 15 valores numéricos
// inteiros e no final apresente o total do somatório da fatorial de cada
// valor lido..

alert("Vamos calcular o somatório dos fatoriais de 15 valores digitados pelo usuário");

let totalSomatorio = 0;
let contador = 1;

do {
    let valor = parseInt(prompt(`Digite o ${contador}º valor:`));
    let fatorial = 1;
    let numero = 1;

    do {
        fatorial *= numero;
        numero++;
    } while (numero <= valor);

    totalSomatorio += fatorial;
    contador++;
} while (contador <= 15);

alert(`O total do somatório do fatorial dos valores é: ${totalSomatorio}`);
