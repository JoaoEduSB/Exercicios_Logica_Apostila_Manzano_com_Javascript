// l) Elaborar um programa que efetue a leitura de valores positivos inteiros
// até que um valor negativo seja informado. Ao final devem ser apresentados
// o maior e o menor valores informados pelo usuário.

let maiorValor, menorValor, valor;

alert("Vamos ler números positivos e parar quando for inserido um número Negativo, além de informar o maior e o menor");

valor = parseInt(prompt(`Digite um valor: `));

while (valor < 0) {
  alert (`Valor só pode ser digitado após a inserção de 1 valor positivo.`);
  }

maiorValor = valor;
menorValor = valor;

while (valor >= 0) {
  valor = parseInt(prompt(`Digite um valor: `));

  if (valor > maiorValor) {
    maiorValor = valor;
  }
  else if ((valor < menorValor) && (valor >= 0)) {
    menorValor = valor;
  }
}

alert(`O maior valor digitado foi: ${maiorValor}\n
O menor valor digitado foi: ${menorValor}`);