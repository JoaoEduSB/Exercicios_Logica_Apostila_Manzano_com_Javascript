// i) Escreva um programa que apresente a série de Fibonacci até o décimo
//quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5,
// 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo
// atual com o seu anterior subseqüente, para que seja formado o próximo
// valor da seqüência. Portanto começando com os números 1, 1 o próximo termo
// é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.

let anterior, atual, proximo, contagem;

alert("Vamos exibir a série de Fibonacci de 0 até 15");

anterior = 1;
atual = 1;
proximo = 0;

for (contagem = 0; contagem <= 15; contagem++) {
  proximo = (anterior + atual);

  alert(`${contagem}° - ${anterior} + ${atual} = ${proximo}`);

  anterior = atual;
  atual = proximo;
}