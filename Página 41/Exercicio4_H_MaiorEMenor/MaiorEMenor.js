// h. Efetuar a leitura de cinco números inteiros e identificar o maior e o
// menor valores.

let contador, numero, maior, menor;

numero = parseInt(prompt(`Digite o 1° número inteiro: `));

maior = numero;

menor = numero;

for (contador = 2; contador <= 5; contador++) {
    numero = parseInt(prompt(`Digite o ${contador}° número inteiro`));

    if (numero > maior) {
        maior = numero
    }
    else if (numero < menor) {
        menor = numero
    }
}

alert(`O maior número é: ${maior}\n
O menor número é: ${menor}`);
