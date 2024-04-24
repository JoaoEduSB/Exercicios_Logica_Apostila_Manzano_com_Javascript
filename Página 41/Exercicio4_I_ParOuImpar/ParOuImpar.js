// i. Elaborar um programa que efetue a leitura de um número inteiro e
// apresentar uma mensagem informando se o número é par ou ímpar.

let numero, condicao;

alert(`Vamos ler um número inteiro e informar se é par ou ímpar`);

numero = parseInt(prompt(`Digite o número`));

condicao = "Sim";

while (condicao == "Sim") {
    
if (numero % 2 == 0) {
    alert(`O número é par.`);
}

else {
    alert(`O número é ímpar.`);
}
    
condicao = String(prompt(`Deseja ler outro número? Digite Sim ou Não: `));

if (condicao == "Sim"){
numero = parseInt(prompt(`Digite o número`));
}

else{
}

}