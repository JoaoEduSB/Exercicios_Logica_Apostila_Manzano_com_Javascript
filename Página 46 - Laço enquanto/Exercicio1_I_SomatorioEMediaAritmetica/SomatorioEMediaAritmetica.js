// i) Elaborar um programa que efetue a leitura de 10 valores numéricos e
// apresente no final o total do somatório e a média aritmética dos valores
// lidos.

let valor, soma, media;
let contadora;

alert("Vamos ler 10 valores e apresentar a somatória e a média deles");

contadora = 1;
soma = 0;

while (contadora < 11) {
  valor = parseInt(prompt(`Digite o ${contadora}° valor: `)); 
  soma = soma + valor;

  contadora = contadora + 1;
}

media = soma / 10;

alert(`A soma dos valores é: ${soma}\n
A média dos valores é: ${media}`);