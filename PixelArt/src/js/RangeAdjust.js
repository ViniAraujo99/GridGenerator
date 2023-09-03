import { createGrid } from './CreateGrids.js';

const sliders = document.querySelectorAll("input[type=range]");
const sliderRowsValue = document.querySelector("#row");
const sliderColsValue = document.querySelector("#col");

//Ajusta o valor dos sliders na tela
export function rangeAdjust() {
    sliders.forEach(slider => {
        slider.value = 8;
        //slider.style.backgroundSize = slider.value * 2 + "% 100%";
        adjust(slider.value);

        slider.addEventListener("input", (e) => {
            changeSliderValue(e);
        });
    });
}

//Ajusta o fundo do slider (como o CSS foi alterado, é necessário que a lógica do slider seja feita via JS)
function changeSliderValue(elem) {
    elem.target.name == "cols" ?  sliderColsValue.innerText = elem.target.value : sliderRowsValue.innerText = elem.target.value;
    elem.target.style.backgroundSize = (elem.target.value - elem.target.min) * 100 / (elem.target.max - elem.target.min)  + "% 100%";

    createGrid();
}

//Ajusta o valor dos sliders na tela no início
function adjust(value) {
    sliderColsValue.innerText = value;
    sliderRowsValue.innerText = value;
}