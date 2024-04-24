// d) Elaborar um programa que apresente no final o somatório dos valores
// pares existentes na faixa de 1 até 500.

let contagem, soma;

alert("Vamos apresentar a soma dos números pares entre 1 e 500");

contagem = 0;
soma = 0;

for (contagem = 1; contagem <= 500; contagem++) {
  if (contagem % 2 == 0) {
    soma = (soma + contagem);
  }
}

alert(`A somatória de todos os números pares entre 1 e 500 é: ${soma}`);