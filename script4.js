let tamanho = Number(prompt("Qual Tamanho da Escadinha"));
let contador = 0;
let escadinha = "";
let degrau = prompt("Digite o modelo de degrau")

while(contador < tamanho ){
    escadinha = escadinha + degrau;
    console.log (escadinha);
    contador++;
}