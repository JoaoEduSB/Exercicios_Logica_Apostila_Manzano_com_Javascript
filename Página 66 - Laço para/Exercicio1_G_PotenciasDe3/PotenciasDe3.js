// g) Apresentar os resultados das potências de 3, variando do expoente 0 até
// o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1,
// e elevado a 1 é ele próprio. Observe que neste exercício não pode ser
// utilizado o operador de exponenciação do portuguol (^).

let base, expoente;
let resultado;

alert("Vamos exibir o resultado das potências de 3, de 0 até 15");

base = 3
expoente = 0;
resultado = 0;

for (expoente = 0; expoente <= 15; expoente++) {
  if (expoente == 0) {
    resultado = 1;
  }
  else if (expoente == 1) {
    resultado = base;
  }
  else {
  resultado = Math.pow(base, expoente);
}
alert(`O resultado da base ${base} elevado a ${expoente} é: ${resultado}`);
}


