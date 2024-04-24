// c) Calcular e apresentar o valor do volume de uma lata de oleo, utilizando
// a formula: Volume<- pi * Raio ² * Altura

let raio, altura, volume, volumeLitros;

alert("Vamos apresentar o volume de uma lata de óleo ");

raio = parseFloat(prompt(`Digite o raio da lata: `));
altura = parseFloat(prompt(`Digite a altura da lata: `));

volume = (3.14 * raio ** 2) * altura;
volumeLitros = volume / 1000;

alert(`O volume da lata é: ${volume.toFixed(2)} cm² e ${volumeLitros.toFixed(1)} Litros.`)