// f) Apresentar todos os números divisíveis por 4 que sejam menores que 200.
// Para verificar se o número é divisível por 4, efetuar dentro da malha a
// verificação lógica desta condição com a instrução se, perguntando se o
// número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo.
// A variável que controlará o contador deve ser iniciada com o valor 1.

let numero;

alert("Apresentar os valores númericos entre 1 e 200 que sejam divisíveis por 4");

numero = 0;

for (numero = 0; numero <= 200; numero++) {
  if (numero % 4 == 0) {
    console.log(`O número ${numero} é divisível por 4.`);
  } 
}