// d) Efetuar o cálculo da quantidade de litros de combustível gasta em uma
// viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o
// cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade
// média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a
// distância percorrida com a fórmula DISTANCIA <- TEMPO * VELOCIDADE.
// Possuindo o valor da distância, basta calcular a quantidade de litros de
// combustível utilizada na viagem com a fórmula LITROS_USADOS <- DISTANCIA / 12.
// Ao final, o programa deve apresentar os valores da velocidade média
// (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida
// (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.

let tempoGasto, velocidadeMedia, distancia;
let litrosUsados;

alert("Vamos calcular a quantidade de litros de combustível gastos na viagem ");

tempoGasto = parseInt(prompt(`Digite o tempo da viagem em horas:`));
velocidadeMedia = parseInt(prompt(`Digite a velocidade média em Km/h: `));

distancia = tempoGasto * velocidadeMedia;

litrosUsados = distancia / 12;

alert(`A velocidade média do veículo foi: ${velocidadeMedia} Km/h\n
O tempo gasto na viagem foi: ${tempoGasto} horas\n
A distância percorrida foi: ${distancia} Km\n
A quantidade de combustível usado foi: ${litrosUsados.toFixed(1)} litros`)