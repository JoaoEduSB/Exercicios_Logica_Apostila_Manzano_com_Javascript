// l) Elaborar um programa que efetue a leitura de três valores (A, B e C) e
// apresente como resultado final à soma dos quadrados dos três valores lidos.

let valorA, valorB, valorC, quadA, quadB, quadC, soma;

alert("Vamos ler três valores e apresentar o resultado da soma do quadrado deles ");

valorA = parseFloat(prompt(`Digite o primeiro valor:`));

valorB = parseFloat(prompt(`Digite o segundo valor:`));

valorC = parseFloat(prompt(`Digite o terceiro valor:`));

quadA = (valorA * valorA);
quadB = (valorB * valorB);
quadC = (valorC * valorC);

soma = (quadA + quadB + quadC);

alert(`O resultado da soma do quadrado dos três valores é: ${soma}`);