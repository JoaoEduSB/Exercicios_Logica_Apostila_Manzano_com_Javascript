// f. Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los
// dispostos em ordem crescente.

let valorA, valorB, valorC, troca;

alert(`Vamos ler três valores inteiros e apresentá-los em ordem crescente`);

valorA = parseInt(prompt(`Digite o primeiro valor:`));

valorB = parseInt(prompt(`Digite o segundo valor:`));

valorC = parseInt(prompt(`Digite o terceiro valor:`));

if (valorA > valorB) {
      troca = valorA
      valorA = valorB
      valorB = troca
   }
   
   if (valorB > valorC) {
      troca = valorB
      valorB = valorC
      valorC = troca
   }
   
   if (valorA > valorB) {
      troca = valorA
      valorA = valorB
      valorB = troca
   }

alert(`Os valores em ordem crescente são: ${valorA}, ${valorB}, ${valorC}`)