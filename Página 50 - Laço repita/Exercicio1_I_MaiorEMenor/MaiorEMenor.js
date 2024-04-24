// i) Elaborar um programa que efetue a leitura de valores positivos inteiros
// até que um valor negativo seja informado. Ao final devem ser apresentados
// o maior e o menor valores informados pelo usuário.

alert("Vamos ler valores positivos inteiros até que seja digitado um valor negativo");

let valor, maior = 0, menor = 0;

do {
    valor = parseInt(prompt("Digite um valor positivo (ou negativo para sair):"));

    if (valor >= 0) {
        if (maior == 0 || valor > maior) {
            maior = valor;
        }

        if (menor == 0 || valor < menor) {
            menor = valor;
        }
    }
} while (valor >= 0);

if (maior > 0) {
    alert("O maior valor informado é: " + maior);
} else {
    alert("Nenhum valor válido foi informado.");
}

if (menor > 0) {
    alert("O menor valor informado é: " + menor);
} else {
    alert("Nenhum valor válido foi informado.");
}