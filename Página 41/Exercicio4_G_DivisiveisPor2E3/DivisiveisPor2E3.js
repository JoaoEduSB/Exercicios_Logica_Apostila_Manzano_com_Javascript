// g. Efetuar a leitura de quatro números inteiros e apresentar os números que
// são divisíveis por 2 e 3.

let num1, num2, num3, num4;

alert(`Vamos ler quatro números inteiros e apresentar os que são divisíveis por 2 e 3`);

num1 = parseInt(prompt(`Digite o primeiro número: `));

num2 = parseInt(prompt(`Digite o segundo número: `));

num3 = parseInt(prompt(`Digite o terceiro número: `));

num4 = parseInt(prompt(`Digite o quarto número: `));

let divisivelEncontrado = false;

if (num1 % 2 == 0 && num1 % 3 == 0) {
    alert(`O número ${num1} é divisível por 2 e 3 `);
    divisivelEncontrado = true;
}
if (num2 % 2 == 0 && num2 % 3 == 0) {
    alert(`O número ${num2} é divisível por 2 e 3 `);
    divisivelEncontrado = true;
}
if (num3 % 2 == 0 && num3 % 3 == 0) {
    alert(`O número ${num3} é divisível por 2 e 3 `);
    divisivelEncontrado = true;
}
if (num4 % 2 == 0 && num4 % 3 == 0) {
    alert(`O número ${num4} é divisível por 2 e 3 `);
    divisivelEncontrado = true;
}
if (!divisivelEncontrado) {
    alert(`Não há números divisíveis por 2 e por 3`);
}


