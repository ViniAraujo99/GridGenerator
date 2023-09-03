const colorInput = document.querySelector("input[type=color]");
const color = document.querySelector(".input__cor__value");

//Ajusta o valor da cor na tela
export function colorAdjust() {
    colorInput.value = '#000000';
    adjust(colorInput.value);

    colorInput.addEventListener("input", (e) => {
        color.innerText = e.target.value;
    });
}

//Ajusta o valor da cor na tela quando inicia
function adjust(value) {
    color.innerText =  value;
}