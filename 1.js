const numero = Math.floor(Math.random() * 100);
console.log(numero)
let tentativas = 0;


iniciarJogo();
document.getElementById("nyrButton").addEventListener("click", function advinhe() {
    tentativas++;
    document.getElementById("tentativanumero").textContent = "Tentativas: " + tentativas;
    const advinhe = document.getElementById("nyrAdvinhe").value


    if (advinhe == numero)
        alert("você acertou")
    else if (advinhe < numero)
        alert("O número que você digitou é menor")
    else if (advinhe > numero)
        alert("O número que você digitou é maior")
});


document.getElementById("nyrReiniciar").addEventListener("click", iniciarJogo);

