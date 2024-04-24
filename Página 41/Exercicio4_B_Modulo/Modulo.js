// b. Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
// valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se
// de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.

let lerValor;

lerValor = parseInt(prompt("Digite um valor"));

if (lerValor < 0) {
    lerValor2 = lerValor * -1
    alert(`O módulo de ${lerValor} é ${lerValor2}`)
}
else {
alert(`O valor ${lerValor} é positivo.`)
}