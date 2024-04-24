// k) Elaborar um programa que apresente como resultado o valor do fatorial
// dos valores ímpares situados na faixa numérica de 1 a 10.

let numero, fatorial, contadora;

alert("Vamos calcular o fatorial dos números ímpares entre 1 a 10");

for (numero = 1; numero <= 10; numero++) {
  if (numero % 2 != 0) {
    fatorial = 1;
    for (contadora = 1; contadora <= numero; contadora++) {
      fatorial = (fatorial * contadora);
    }
    alert(`O fatorial de ${numero} é ${fatorial}`);
  }
}