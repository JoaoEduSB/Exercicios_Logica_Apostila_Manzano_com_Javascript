// b) Elaborar um programa que apresente no final o somatório dos valores
// pares existentes na faixa de 1 até 500.

let soma = 0;
let numero = 0;

alert("Vamos calcular os números pares entre 1 a 500");

do {
    numero++;  
    if (numero % 2 === 0) {
        soma += numero;
    }
} while (numero < 500);

alert(`O somatório dos números pares entre 1 e 500 é: ${soma}`);
