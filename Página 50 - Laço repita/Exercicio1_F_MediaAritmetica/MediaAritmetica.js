// f) Elaborar um programa que efetue a leitura sucessiva de valores
// numéricos e apresente no final o total do somatório, a média aritmética
// e o total de valores lidos. O programa deve fazer as leituras dos valores
// enquanto o usuário estiver fornecendo valores positivos. Ou seja, o
// programa deve parar quando o usuário fornecer um valor negativo. Não se
// esqueça que o usuário pode entrar como primeiro número um número negativo,
// portanto, cuidado com a divisão por zero no cálculo da média.

alert("Vamos calcular média e soma total dos valores lidos");

let totalSomatorio = 0;
let totalValores = 0;
let valor = 0;

do {
    valor = parseInt(prompt("Digite um valor (negativo para sair):"));

    if (valor >= 0) {
        totalSomatorio += valor;
        totalValores++;
    }
} while (valor >= 0);

if (totalValores > 0) {
    alert("O total do somatório é: " + totalSomatorio);
    alert("A média aritmética é: " + totalSomatorio / totalValores);
    alert("O total de valores lidos é: " + totalValores);
} else {
    alert("Nenhum valor válido foi inserido.");
}