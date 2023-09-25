
const botaoAumentar = document.querySelector("#aumentarContador");
const botaoDiminuir = document.querySelector("#diminuirContador");
const botaoZerar = document.querySelector("#zerarContador");
const contadorElemento = document.querySelector("#spanContador");

let contador = 0;

function aumentarContador() {
    contador++;
    contadorElemento.textContent = contador;
}

botaoAumentar.addEventListener("click", aumentarContador);

function diminuirContador() {

    if (contador == 0) {
        exit
    } else {
        contador--;
        contadorElemento.textContent = contador;
    }
}

botaoDiminuir.addEventListener("click", diminuirContador);

function zerarContador() {
    contador = 0;
    contadorElemento.textContent = contador;
}

botaoZerar.addEventListener("click", zerarContador);