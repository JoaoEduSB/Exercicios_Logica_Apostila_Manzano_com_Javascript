// f) Elaborar um programa que apresente como resultado o valor de uma potência
// de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em
// que B é o valor da base e E o valor do expoente. Observe que neste exercício
// não pode ser utilizado o operador de exponenciação do portuguol (^).

let resultado, valor, contadora, expoente;

alert("Vamos calcular uma potência de um valor digitado por você");

valor = parseFloat(prompt(`Digite o valor (potência) que deseja calcular: `));
expoente = parseFloat(prompt(`Digite o expoente que deseja calcular: `));

resultado = 1
contadora = 0;


while (contadora < expoente) {
  resultado = (resultado * valor)

  contadora = contadora + 1;
  }

  alert(`Resultado de ${valor} elevado a ${expoente} é: ${resultado}`);