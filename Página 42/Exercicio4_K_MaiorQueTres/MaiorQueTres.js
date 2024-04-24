// k. Elaborar um programa que efetue a leitura de um determinado valor
// inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.

var numero;

numero = 1;

alert(`Digite um número inteiro, se o valor for menor que 3 será exibido abaixo`)

while ((numero <= 3) || (numero > 3)) {
    numero = parseInt(prompt(`Digite o número: `));

    if (numero < 3) {
        alert(`O número ${numero} é menor que 3`)
    }
}
