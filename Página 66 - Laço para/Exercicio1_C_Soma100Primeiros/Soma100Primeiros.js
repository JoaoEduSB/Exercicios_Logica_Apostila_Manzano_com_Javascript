// c) Apresentar o total da soma obtida dos cem primeiros números inteiros
// (1+2+3+4+...+98+99+100).

let resultado, contagem;

alert("Vamos apresentar a soma dos números inteiros entre 0 a 100");

contagem = 0;
resultado = 0;

for (contagem = 0; contagem <= 100; contagem++) {
  resultado = (resultado + contagem);
}

alert(`A soma dos cem primeiros números inteiros é: ${resultado}`);