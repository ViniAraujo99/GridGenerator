import { createGrid } from "./Grids.js";

const sliders = document.querySelectorAll("input[type=range]");
const slidersValue = document.querySelectorAll("input[type=range] ~ span");
const sliderRowsValue = document.querySelector("#row");
const sliderColsValue = document.querySelector("#col");
const sliderOpacValue = document.querySelector("#opac");

//Ajusta o valor dos sliders na tela
export function rangeAdjust() {
  //Ajuste inicial
  ajuste();

  //Ajusta o valor dos sliders na tela no início
  sliders.forEach((slider) => {
    slider.addEventListener("input", (elemento) => {
      changeSliderValue(elemento);
    });
  });
}

//Ajusta o fundo do slider (como o CSS foi alterado, é necessário que a lógica do slider seja feita via JS)
function changeSliderValue(elemento) {
  if (elemento.target.name == "cols") {
    sliderColsValue.textContent = String(elemento.target.value).padStart(
      2,
      "0"
    );
    createGrid();
  } else if (elemento.target.name == "rows") {
    sliderRowsValue.textContent = String(elemento.target.value).padStart(
      2,
      "0"
    );
    createGrid();
  } else {
    sliderOpacValue.textContent = String(elemento.target.value / 10).padStart(
      2,
      "0"
    );

    document.styleSheets[0].cssRules[3].style.setProperty(
      "--custom-opacity",
      "rgba(0,0,0," + elemento.target.value / 10 + ")"
    );

    console.log(document.styleSheets[0].cssRules[3].style.getPropertyValue(
        "--custom-opacity"))
  }

  elemento.target.style.backgroundSize =
    ((elemento.target.value - elemento.target.min) * 100) /
      (elemento.target.max - elemento.target.min) +
    "% 100%";
}

//Ajuste inicial
function ajuste() {
  slidersValue.forEach((sliderValue) => {
    let sliderIrmao = sliderValue.previousElementSibling;

    sliderIrmao.name == "cols" || sliderIrmao.name == "rows"
      ? (sliderValue.textContent = String(sliderIrmao.value).padStart(2, "0"))
      : (sliderValue.textContent = String(sliderIrmao.value / 10).padStart(
          2,
          "0"
        ));

    sliderIrmao.style.backgroundSize =
      ((sliderIrmao.value - sliderIrmao.min) * 100) /
        (sliderIrmao.max - sliderIrmao.min) +
      "% 100%";
  });
}
