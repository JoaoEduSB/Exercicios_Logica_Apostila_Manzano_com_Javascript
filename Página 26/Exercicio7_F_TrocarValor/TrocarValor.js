// f) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A
// e B, e efetuar a troca dos valores de forma que a variável A passe a
// possuir o valor da variável B e a variável B passe a possuir o valor da
// variável A. Apresentar os valores trocados

let A, B, troca;

alert(`Você digitará dois textos e iremos alterar a posição de exibição dos dois`);

A = String(prompt(`Digite um texto`));
B = String(prompt(`Digite outro texto`));

troca = A;
A = B;
B = troca;

alert(`O texto invertido ficará:\n
${A}\n
${B}`);