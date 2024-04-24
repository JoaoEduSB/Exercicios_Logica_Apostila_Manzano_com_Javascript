// k) Elaborar um programa que efetue a apresentação do valor da conversão
// em dólar de um valor lido em real. O programa deve solicitar o valor da
// cotação do dólar e também a quantidade de reais disponível com o
// usuário, para que seja apresentado o valor em moeda americana.

let totalReal, cotaDolar, totalDolar;

alert("Vamos calcular o valor que você pode converter de real para dólar ");

totalDolar = parseFloat(prompt(`Digite qual o valor em real que você possui: `));
cotaDolar = parseFloat(prompt(`Digite a cotação do dólar hoje: `));

totalReal = totalDolar / cotaDolar;

alert(`A conversão resultará em: $${totalReal.toFixed(2)} dólares`);