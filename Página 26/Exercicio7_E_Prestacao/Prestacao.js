// e) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso,
// utilizando a fórmula PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO).

let prestacao, valorTotal, taxa;
let dias, diaHoje, atraso;

alert("Vamos calcular o valor da sua prestação em atrsado ");

prestacao = parseFloat(prompt(`Digite o valor da prestação:`));
taxa = parseFloat(prompt(`Digite o valor da taxa em %: `));
atraso = parseInt(prompt(`Digite o tempo de atraso em dias: `));

prestacao = prestacao + (prestacao * taxa / 100) * atraso;

alert(`O valor final da prestacao é: R$${prestacao}`);