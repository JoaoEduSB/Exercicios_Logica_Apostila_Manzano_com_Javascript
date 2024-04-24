// b) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em
// graus Celsius. A fórmula de conversão é C <- (F - 32) * (5/9) , sendo F a
// temperatura em Fahrenheit e C a temperatura em Celsius.

let temperatura, fahrenheit, celsius;

alert(`Vamos ler uma temperatura em graus F° e transformar em celsius\n
 `);

fahrenheit = parseFloat(prompt(`Digite a temperatura:`));

celsius = (fahrenheit - 32) * (5 / 9);

temperatura = celsius;

alert(`${fahrenheit.toFixed(1)} graus F° é equivalente a: ${temperatura.toFixed(1)} C°`);