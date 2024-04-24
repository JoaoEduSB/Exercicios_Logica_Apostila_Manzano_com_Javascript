// h) Elaborar um programa que apresente como resultado o valor de uma
// potência de uma base qualquer elevada a um expoente qualquer, ou seja, de
// BE, em que B é o valor da base e E o valor do expoente. Observe que neste
// exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

let base, expoente, contadora;
let resultado;

alert("Vamos calcular uma potência?");

base = 0
expoente = 0;
resultado = 1;

base = parseInt(prompt(`Digite a base que deseja calcular: `));

expoente = parseInt(prompt(`Digite o expoente que deseja calcular: `));

for (contadora = 1; contadora <= expoente; contadora++) {
  resultado = resultado * base
}
alert(`O resultado da potência com base ${base} e expoente ${expoente} é: ${resultado}`);



