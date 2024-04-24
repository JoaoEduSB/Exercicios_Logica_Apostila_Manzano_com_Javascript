// h) Elaborar um programa que calcule e apresente o volume de uma caixa
// retangular, por meio da fórmula VOLUME <- COMPRIMENTO * LARGURA * ALTURA.

let comprimento, largura, altura, volume;

alert(`Vamos apresentar o volume de uma caixa retangular`);

comprimento = parseFloat(prompt(`Digite o comprimento da caixa em cm: `));

largura = parseFloat(prompt(`Digite a largura da caixa em cm: `));

altura = parseFloat(prompt(`Digite a altura da caixa em cm: `));

volume = comprimento * largura * altura;

alert(`O volume da caixa é: ${volume} cm³`);