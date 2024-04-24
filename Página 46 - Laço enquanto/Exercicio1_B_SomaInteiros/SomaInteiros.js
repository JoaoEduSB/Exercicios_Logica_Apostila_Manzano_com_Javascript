// b) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

let numero = 0
let soma = 0

alert("Vamos calcular os 100 primeiros números inteiros");

while (numero <= 100) {
    
    soma += numero
    numero++
}

alert(`A soma dos cem primeiro números inteiros (1+2+3+4+...+98+99+100)= ${soma}`)
