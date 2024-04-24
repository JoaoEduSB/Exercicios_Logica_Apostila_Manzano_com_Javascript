// a) Ler uma temperatura em graus Celsius e apresentá-la convertida em graus
// Fahrenheit. A fórmula de conversão é F° (9 * C + 160) / 5, sendo F a
// temperatura em Fahrenheit e C a temperatura em Celsius.

let temperatura, fahrenheit, celsius;

alert(`Vamos ler uma temperatura em graus C° e transformar em fahrenheit\n
 `);

celsius = parseFloat(prompt(`Digite a temperatura:`));

fahrenheit = (9 * celsius + 160) / 5;

temperatura = fahrenheit;

alert(`${celsius.toFixed(1)} graus C° é equivalente a: ${temperatura.toFixed(1)} F°`);