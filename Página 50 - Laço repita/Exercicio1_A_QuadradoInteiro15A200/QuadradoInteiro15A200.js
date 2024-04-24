// a) Apresentar os quadrados dos números inteiros de 15 a 200.

alert("Vamos calcular os quadrados dos números de 15 a 200");

let numero = 15;

do {
    let quadrado = numero * numero;
    alert(`O quadrado de ${numero} é  ${quadrado}`);
    numero++;
} while (numero <= 200);
