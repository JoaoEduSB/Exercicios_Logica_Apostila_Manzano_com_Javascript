// e. Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o
// cálculo da equação completa de segundo grau, apresentando as duas raízes,
// se para os valores informados for possível efetuar o referido cálculo.
// Lembre-se de que a variável A deve ser diferente de zero.

let A, B, C, delta, raiz1, raiz2;

A = parseFloat(prompt(`Digite o valor de A: `));

if (A == 0) {
    alert(`A equação não é de segundo grau, pois A deve ser diferente de zero.`)
}
else {
    B = parseFloat(prompt(`Digite o valor de B: `));
    C = parseFloat(prompt(`Digite o valor de C: `));
}

delta = (B * 2 - 4 * A * C);

if (delta < 0) {
    alert(`A equação não possui raízes reais.`);
} else {
    raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
}
