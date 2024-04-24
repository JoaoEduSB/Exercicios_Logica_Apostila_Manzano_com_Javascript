// h) Elaborar um programa que possibilite calcular a área total de uma
// residência (sala, cozinha, banheiro, quartos, área de serviço, quintal,
// garagem, etc.). O programa deve solicitar a entrada do nome, a largura e
// o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
// do cômodo lido e também uma mensagem solicitando do usuário a confirmação
// de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o
// programa deve apresentar o valor total acumulado da área residencial.

alert("Vamos calcular a área dos cômodos e a área da residência");

let areaTotal = 0;
let continuar;

do {
    let nomeComodo;
    let largura, comprimento, areaComodo;

    nomeComodo = String(prompt("Digite o nome do cômodo:"));
    largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));

    areaComodo = (largura * comprimento);
    areaTotal += areaComodo;

    alert(`A área do cômodo ${nomeComodo} é ${areaComodo} metros quadrados.`);

    continuar = String(prompt(`Deseja calcular outro cômodo? (Sim/Não):`));
} while (continuar === "Sim");

alert(`A área total da residência é ${areaTotal} metros quadrados.`);