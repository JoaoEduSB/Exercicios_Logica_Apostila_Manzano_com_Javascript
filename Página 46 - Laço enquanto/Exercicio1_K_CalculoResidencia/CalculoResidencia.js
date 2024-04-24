// k) Elaborar um programa que possibilite calcular a área total de uma
// residência (sala, cozinha, banheiro, quartos, área de serviço, quintal,
// garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o
// comprimento de um determinado cômodo. Em seguida, deve apresentar a área
// do cômodo lido e também uma mensagem solicitando do usuário a confirmação
// de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o
// programa deve apresentar o valor total acumulado da área residencial.

let condicao, comodo;
let largura, comprimento, compTotal, larguraTotal, area;

alert(`Vamos ler os dados de uma residência e calcular sua área`);

largura = 0;
comprimento = 0; 
compTotal = 0; 
larguraTotal = 0; 
area = 0;

condicao = String(prompt(`Deseja calcular? Se sim digite: Sim / Se não, digite: Não`));

if (condicao === "Não") {
  alert(`Poxa, que pena. Obrigado por utilizar nosso sistema.`);
}

while (condicao === "Sim") {
comodo = String(prompt(`Digite o nome do cômodo: `));

largura = parseFloat(prompt(`Digite a largura do cômodo em m²: `));

comprimento = parseFloat(prompt(`Digite o comprimento do cômodo em m²: `));

alert(`A área do cômodo ${comodo} é: ${largura * comprimento} m²`);

condicao = String(prompt(`Deseja calcular? Se sim digite: Sim / Se não, digite: Não`));

larguraTotal = (larguraTotal + largura);
compTotal = (compTotal + comprimento);

}

area = (larguraTotal * compTotal);

alert(`A área total de residência é: ${area} m²`);