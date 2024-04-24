// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
// 1 até 500.

let numero, tabuada;
let resultado;

alert("Vamos apresentar a tabuada do 0 até o 10, de qualquer número desejado");

numero = parseInt(prompt(`Digite o número da tabuada desejada: `));

alert(`A tabuada do número ${numero} é: `);

for (tabuada = 1; tabuada <= 10; tabuada++){
resultado = (numero * tabuada);
  alert(`${numero} x ${tabuada} = ${resultado}`);
}

