// h) Elaborar um programa que apresente os valores de conversão de graus
// Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus
// Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os
// valores das duas temperaturas.

let celsius, fahrenheit;

alert("Vamos fazer a conversão de Celsius para Fahrenheit");

celsius = 0;
fahrenheit = 0;

while (celsius < 100) {
  celsius = (celsius + 10);

  fahrenheit = (9 * celsius + 160) / 5;

alert(`${celsius}°C é equivalente a: ${fahrenheit}°F`);
}