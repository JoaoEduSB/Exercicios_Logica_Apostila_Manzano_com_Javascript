// e) Apresentar todos os valores numéricos inteiros ímpares situados na faixa
// de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a
// verificação lógica desta condição com a instrução se, perguntando se o
// número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.

let numero;

alert("Vamos apresentar os números ímpares entre 0 e 20");

numero = 0;

for (numero = 0; numero <= 20; numero++) {
  if (numero % 2 != 0) {
    alert(`O número ${numero} é ímpar.`);
  }
}
