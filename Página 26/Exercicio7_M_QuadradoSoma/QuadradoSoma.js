// m) Elaborar um programa que efetue a leitura de três valores (A,B e C) e
// apresente como resultado final o quadrado da soma dos três valores lidos.

let valorA, valorB, valorC, soma, resultado;

alert("Vamos ler três valores e apresentar o quadrado da soma dos três ");

valorA = parseFloat(prompt(`Digite o primeiro valor:`));

valorB = parseFloat(prompt(`Digite o segundo valor:`));

valorC = parseFloat(prompt(`Digite o terceiro valor:`));

soma = (valorA + valorB + valorC);

resultado = (soma * soma)

alert(`O quadrado da soma dos três valores é: ${resultado}`);