// j) Elaborar um programa que apresente o resultado inteiro da divisão de dois
// números quaisquer. Para a elaboração do programa, não utilizar em hipótese
// alguma o conceito do operador aritmético DIV. A solução deve ser alcançada
// com a utilização de looping. Ou seja, o programa deve apresentar como
// resultado (quociente) quantas vezes o divisor cabe no dividendo.

alert("Vamos ler o dividendo e o divisor de uma conta");

let dividendo, divisor, quociente = 0;

dividendo = parseInt(prompt("Digite o dividendo:"));
divisor = parseInt(prompt("Digite o divisor:"));

do {
    dividendo -= divisor;
    quociente++;
} while (dividendo >= divisor);

alert(`O resultado inteiro da divisão é: ${quociente}`);