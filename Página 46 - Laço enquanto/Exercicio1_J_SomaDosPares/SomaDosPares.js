// j) Elaborar um programa que apresente os resultados da soma e da média
// aritmética dos valores pares situados na faixa numérica de 50 a 70.

let contadora, soma;
let media, contagem;

alert("Vamos apresentar a soma e média dos valores pares entre 50 e 70");

contadora = 50;
soma = 0;
contagem = 0;

while (contadora < 71) {
    if (contadora % 2 == 0) {
      contagem = (contagem + 1);
      soma = (soma + contadora);
    }
    contadora = (contadora + 1);
  }

media = (soma / contagem);

alert(`A soma dos valores pares entre 50 e 70 é: ${soma}\n
A média desses valores é: ${media}`);