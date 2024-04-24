// a. Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.

let lerValor1, lerValor2, diferenca;

lerValor1 = parseInt(prompt("Digite um valor: "));
lerValor2 = parseInt(prompt("Digite outro valor: "));

diferenca = lerValor1 - lerValor2
if (lerValor2 > lerValor1) {
    diferenca = lerValor2 - lerValor1
}
    alert(`A diferença entre os valores é: ${diferenca}`);

