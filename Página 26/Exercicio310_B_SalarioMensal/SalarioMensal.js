// b) Ler o valor correspondente ao salário mensal (variável SM) de um
// trabalhador e também o valor do percentual de reajuste (variável PR) a
// ser atribuído. Apresentar o valor do novo salário (variável NS).

let salarioAtual, reajuste, novoSalario;

alert("Vamos calcular o novo salário com reajuste percentual");

salarioAtual = parseFloat(prompt(`Digite o valor do salário atual:`));
reajuste = parseFloat(prompt(`Digite o percentual de reajuste em %: `));

novoSalario = salarioAtual + (salarioAtual * (reajuste / 100));

alert(`O novo salário é: R$${novoSalario}`);