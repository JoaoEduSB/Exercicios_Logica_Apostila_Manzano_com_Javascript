// d. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
// dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
// média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
// Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
// aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
// condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.

let nota1, nota2, nota3, nota4, media, mediaExame;

nota1 = parseFloat(prompt("Digite a primeira nota: "));
while (nota1 < 0 || nota1 > 10) {
nota1 = parseFloat(prompt("A primeira nota não está entre 0 e 10. Digite novamente a nota: "));    
}
nota2 = parseFloat(prompt("Digite a segunda nota: "));
while (nota2 < 0 || nota2 > 10) {
    nota2 = parseFloat(prompt("A segunda nota não está entre 0 e 10. Digite novamente a nota: "));    
    }
nota3 = parseFloat(prompt("Digite a terceira nota: "));
while (nota3 < 0 || nota3 > 10) {
    nota3 = parseFloat(prompt("A terceira nota não está entre 0 e 10. Digite novamente a nota: "));    
    }
nota4 = parseFloat(prompt("Digite a quarta nota: "));
while (nota4 < 0 || nota4 > 10) {
    nota4 = parseFloat(prompt("A quarta nota não está entre 0 e 10. Digite novamente a nota: "));    
    }

media = (nota1 + nota2 + nota3 + nota4) / 4

if (media > 7) {
    alert(`O aluno foi aprovado com a média: ${media}`);
}
else if (media <= 7) {
    alert(`Aluno não foi aprovado com a média comum. Sua média foi: ${media}`);

    mediaExame = parseFloat(prompt("Digite a nota de exame"));

    mediaExame = (media + mediaExame) / 2;

    if (mediaExame => 5) {
        alert(`O aluno foi aprovado com a média de exame: ${mediaExame}`);
    }
    else {
        alert(`O aluno não foi aprovado com a média de exame: ${mediaExame}`);
    }
}

