// a) Elaborar um programa de computador que efetue a leitura de quatro
// valores inteiros (variáveis A, B, C e D). Ao final o programa deve
// apresentar o resultado do produto (variável P) do primeiro com o terceiro
// valor, e o resultado do produto (variável P) do primeiro com o terceiro
// valor, e o resultado da soma (variável S) do segundo com o quarto valor.

let valorA, valorB, valorC, valorD, prodUm, prodDois, somaUm;

valorA = parseFloat(prompt(`Digite o valor de A:`));

valorB = parseFloat(prompt(`Digite o valor de B:`));

valorC = parseFloat(prompt(`Digite o valor de C:`));

valorD= parseFloat(prompt(`Digite o valor de D:`));

prodUm = (valorA * valorC);
prodDois = (valorB * valorD);
somaUm = (valorB + valorD);

alert(`O produto de A e C é: ${prodUm}\n
O produto de B e D é: ${prodDois}\n
A soma de B e D é: ${somaUm}`);