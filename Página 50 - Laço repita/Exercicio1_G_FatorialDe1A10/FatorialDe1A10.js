// g) Elaborar um programa que apresente como resultado o valor do fatorial
// dos valores ímpares situados na faixa numérica de 1 a 10.

alert("Vamos calcular o fatorial dos valores ímpares entre 1 e 10");

let valor = 1;

do {
    if (valor % 2 !== 0) {
        let fatorial = 1;
        let contador = 1;

        do {
            fatorial *= contador;
            contador++;
        } while (contador <= valor);

        alert("O fatorial de " + valor + " é " + fatorial);
    }

    valor++;
} while (valor <= 10);