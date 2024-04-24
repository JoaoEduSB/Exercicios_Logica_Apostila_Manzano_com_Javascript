// i) Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado
// da diferença do primeiro valor pelo segundo.

let valorA, valorB, resultado, quadrado;

alert(`Vamos calcular o quadrado da diferença de dois valores`);

valorA = parseFloat(prompt(`Digite o primeiro valor: `));

valorB = parseFloat(prompt(`Digite o segundo valor: `));

if (valorA > valorB) {
    resultado = valorA - valorB;
}
else if (valorB > valorA) {
    resultado = valorB - valorA;
}
else{
    while (valorA == valorB){
        valorB = parseFloat(prompt(`Os dois valores não podem se repetir.\n
        Digite novamente o segundo valor:`));
    }
}

quadrado = resultado * resultado;

alert(`O quadrado da diferença entre os dois valores é: ${quadrado}`);