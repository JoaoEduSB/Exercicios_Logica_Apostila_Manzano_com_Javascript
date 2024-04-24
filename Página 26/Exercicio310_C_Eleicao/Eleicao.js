// c) Em uma eleição sindical concorreram ao cargo de presidente três
// candidatos (A, B e C). Durante a apuração dos votos foram computados
// votos nulos e votos em branco, além dos votos válidos para cada candidato.
// Deve ser criado um programa de computador que efetue a leitura da
// quantidade de votos válidos para cada candidato, além de efetuar também a
// leitura da quantidade de votos nulos e votos em branco. Ao final o
// programa deve apresentar o número total de eleitores, considerando votos
// válidos, nulos e em branco; o percentual correspondente de votos válidos
// em relação à quantidade de eleitores; o percentual correspondente de votos
// válidos do candidato A em relação à quantidade de eleitores; o percentual
// correspondente de votos válidos do candidato B em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato C em
// relação à quantidade de eleitores; o percentual correspondente de votos
// nulos em relação à quantidade de eleitores; e por último o percentual
// correspondente de votos em branco em relação à quantidade de eleitores.

let votos_A, votos_B, votos_C, votos_nulos, votos_brancos, total_votos;
let percentual_validos, percentual_A, percentual_B, percentual_C, percentual_nulos, percentual_brancos;

alert("Vamos organizar uma eleição");

votos_A = parseInt(prompt(`Digite a quantidade de votos válidos para o candidato A:`));
votos_B = parseInt(prompt(`Digite a quantidade de votos válidos para o candidato B:`));
votos_C = parseInt(prompt(`Digite a quantidade de votos válidos para o candidato C:`));
votos_nulos = parseInt(prompt(`Digite a quantidade de votos nulos:`));
votos_brancos = parseInt(prompt(`Digite a quantidade de votos brancos:`));

total_votos = votos_A + votos_B + votos_C + votos_nulos + votos_brancos;

percentual_validos = ((votos_A + votos_B + votos_C) / total_votos) * 100;
percentual_A = (votos_A / total_votos) * 100;
percentual_B = (votos_B / total_votos) * 100;
percentual_C = (votos_C / total_votos) * 100;
percentual_nulos = (votos_nulos / total_votos) * 100;
percentual_brancos = (votos_brancos / total_votos) * 100;

alert(`Número total de eleitores: ${total_votos}\n
Percentual de votos válidos em relação à quantidade de eleitores: ${percentual_validos}%\n
Percentual de votos válidos do candidato A em relação à quantidade de eleitores: ${percentual_A}%\n
Percentual de votos válidos do candidato B em relação à quantidade de eleitores: ${percentual_B}%\n
Percentual de votos válidos do candidato C em relação à quantidade de eleitores: ${percentual_C}%\n
Percentual de votos nulos em relação à quantidade de eleitores: ${percentual_nulos}%\n
Percentual de votos em branco em relação à quantidade de eleitores: ${percentual_brancos}%`);