import { deleteGrid } from "./CleanGrid.js";

const sliderRowsValue = document.querySelector("#row");
const sliderOpacValue = document.querySelector(".inputs__opac input");
const sliderColsValue = document.querySelector("#col");
const gridContainer = document.querySelector(".grids__container");
const eraseBtn = document.querySelector(".apagar__btn");
const drawBtn = document.querySelector(".desenhar__btn");
const colorInput = document.querySelector("input[type=color]");

let draw = false;
let erase = false;

/*EVENTOS*/
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};
let tipoDispositivo = "";

export const ehTouch = () => {
  try {
    document.createEvent("TouchEvent");
    tipoDispositivo = "touch";
    return true;
  } catch (e) {
    tipoDispositivo = "mouse";
    return false;
  }
};

//Limpa o grid e recria baseado nos valores do slider
export function createGrid() {
  deleteGrid();

  let count = 0;

  //Loop que cria o grid
  for (let i = 0; i < sliderRowsValue.innerText; i++) {
    count += 2;
    let row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < sliderColsValue.innerText; j++) {
      count += 2;
      let col = document.createElement("div");
      col.classList.add("grid-col");
      col.setAttribute("id", `gridCol${count}`);

      //Desenha ou apaga o grid ao clicar
      col.addEventListener(events[tipoDispositivo].down, () => {
        draw = true;
        if (!erase) {
          col.style.background = colorInput.value;
        } else {
          grid.style.background = "transparent";
        }
      });

      //Desenha ou apaga o grid ao clicar e mover o mouse, chacando as colunas
      col.addEventListener(events[tipoDispositivo].move, (e) => {
        let elementoID = document.elementFromPoint(
          !ehTouch() ? e.clientX : e.touches[0].clientX,
          !ehTouch() ? e.clientY : e.touches[0].clientY
        ).id;

        checador(elementoID);
      });

      //Ao soltar o mouse não está nem desenhando nem apagando
      col.addEventListener(events[tipoDispositivo].up, () => {
        draw = false;
      });

      row.append(col);
    }

    gridContainer.append(row);
  }
}

//Recebe as colunas clicadas e pinta ou apaga elas
export function checador(elementoID) {
  let grids = document.querySelectorAll(".grid-col");
  grids.forEach((grid) => {
    if (elementoID == grid.id) {
      if (draw && !erase) {
        grid.style.background = colorInput.value;
      }
      if (draw && erase) {
        grid.style.background = "transparent";
      }
    }
  });
}

//Se clicar no botão de desenhar desabilita a borracha (pois desenhar sempre é true ao clicar no grid)
drawBtn.addEventListener("click", () => {
  erase = false;
});

//Se clicar no botão de apagar habilita a borracha e apaga o grid até o botão do mouse ser solto
eraseBtn.addEventListener("click", () => {
  erase = true;
});
