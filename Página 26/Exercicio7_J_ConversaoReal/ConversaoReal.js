// j) Elaborar um programa que efetue a apresentação do valor da conversão em
// real de um valor lido em dólar. O programa deve solicitar o valor da
// cotação do dólar e também a quantidade de dólares disponível com o
// usuário, para que seja apresentado o valor em moeda brasileira.

let totalDolar, cotaDolar, totalReal;

alert("Vamos calcular o valor que você pode converter de dólar para real ");

totalDolar = parseFloat(prompt(`Digite qual o valor em dólar que você possui:`));
cotaDolar = parseFloat(prompt(`Digite a cotação do dólar hoje: `));

totalReal = totalDolar * cotaDolar;

alert(`A conversão resultará em: $${totalReal.toFixed(2)} reais.`);