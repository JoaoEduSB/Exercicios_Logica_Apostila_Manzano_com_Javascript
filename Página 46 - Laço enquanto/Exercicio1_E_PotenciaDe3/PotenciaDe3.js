// e) Apresentar os resultados das potências de 3, variando do expoente 0 até o
// expoente 15. Deve ser considerado que qualquer número elevado a zero é 1,
// e elevado a 1 é ele próprio. Observe que neste exercício não pode ser
// utilizado o operador de exponenciação do portuguol (^).

let resultado, expoente;

alert("Vamos calcular e exibir as potências de 3 do expoente 0 até 15");

contadora = 0;
expoente = 0;

while (contadora < 16) {
  if (expoente == 0) {
    resultado = 1;
  }
  else if (expoente == 1) {
    resultado = 3;
  }
  else { 
    resultado = resultado * 3
  }

  alert(`Resultado de 3 elevado a ${expoente} é ${resultado}`);

  contadora++;
  expoente++;
}