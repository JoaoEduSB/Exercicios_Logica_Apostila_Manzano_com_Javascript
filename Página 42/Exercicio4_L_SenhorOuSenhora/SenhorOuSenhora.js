// L. Elaborar um programa que efetue a leitura do nome e do sexo de uma
// pessoa, apresentando com saída uma das seguintes mensagens: "Ilmo Sr.",
// se o sexo informado como masculino, ou a mensagem "Ilma Sra.", para o
// sexo informado como feminino. Apresente também junto da mensagem de
// saudação o nome previamente informado.

let nome, sexo;

alert(`Vamos ler o seu nome e te apresentar uma mensagem de saudação`);

nome = String(prompt(`Digite o seu nome: `));
sexo = String(prompt(`Digite o seu sexo: `));

while ((sexo != "M") && (sexo !="F")) {
sexo = String(prompt(`A informação inserida é inválida.\n
Digite novamente o seu sexo: `));
}

if (sexo == "M") {
    alert(`Ilmo Sr. ${nome}, Seja bem-vindo!`);
}
else if (sexo == "F") {
    alert(` Ilma Sra. ${nome}, Seja bem-vinda!`);
}