// j) Elaborar um programa que apresente os valores de conversão de graus
// Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus
// Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os
// valores das duas temperaturas.

let celsius;
let fahrenheit;

alert("Vamos converter graus celsius para fahrenheit de 10 em 10");

for (celsius = 0; celsius <= 100; celsius+=10) {
  fahrenheit = (9 * celsius + 160) / 5;

  alert(`${celsius}° | ${fahrenheit}°F`)
}