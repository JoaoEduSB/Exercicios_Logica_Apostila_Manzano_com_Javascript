// g) Ler quatro números inteiros e apresentar o resultado da adição e
// multiplicação, baseando-se na utilização do conceito da propriedade
// distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B
// com C, B com D e por fim C com D. Perceba que será necessário efetuar
// seis operações de adição e seis operações de multiplicação e apresentar
// doze resultados de saída.

let A, B, C, D, soma_AB, soma_AC, soma_AD, soma_BC, soma_BD, soma_CD;
let mult_AB, mult_AC, mult_AD, mult_BC, mult_BD, mult_CD;

alert("Vamos ler e apresentar o resultado da adição e multiplicação de diversos valores ");

A = parseInt(prompt(`Digite o valor de A:`));
B = parseInt(prompt(`Digite o valor de B:`));
C = parseInt(prompt(`Digite o valor de C:`));
D = parseInt(prompt(`Digite o valor de D:`));

soma_AB = (A + B)
soma_AC = (A + C)
soma_AD = (A + D)
soma_BC = (B + C)
soma_BD = (B + D)
soma_CD = (C + D)

mult_AB = (A * B)
mult_AC = (A * C)
mult_AD = (A * D)
mult_BC = (B * C)
mult_BD = (B * D)
mult_CD = (C * D)

alert(`Resultados da soma:\n
${A} + ${B} = ${soma_AB}\n
${A} + ${C} = ${soma_AC}\n
${A} + ${D} = ${soma_AD}\n
${B} + ${C} = ${soma_BC}\n
${B} + ${D} = ${soma_BD}\n
${C} + ${D} = ${soma_CD}\n`)
alert(`
Resultados da multiplição:")\n
${A} * ${B} = ${mult_AB}\n
${A} * ${C} = ${mult_AC}\n
${A} * ${D} = ${mult_AD}\n
${B} * ${C} = ${mult_BC}\n
${B} * ${D} = ${mult_BD}\n
${C} * ${D} = ${mult_CD}`)