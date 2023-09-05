
import { deleteGrid } from './CleanGrid.js';
import { draw } from './Draw.js';


const sliderRowsValue = document.querySelector("#row");
const sliderColsValue = document.querySelector("#col");
const gridContainer = document.querySelector(".grids__container");

//Limpa o grid e recria baseado nos valores do slider
export function createGrid() {
    
    deleteGrid();

    gridContainer.style.gridTemplateColumns = `repeat(${sliderColsValue.innerText},minmax(0, 1fr))`;
    gridContainer.style.gridTemplateRows = `repeat(${sliderRowsValue.innerText},minmax(0, 1fr))`;

    //Loop que cria o grid
    for(let i = 0; i < sliderColsValue.innerText; i++) {
        for(let j = 0; j < sliderRowsValue.innerText; j++) {
            let div = document.createElement("div");
            gridContainer.append(div);
            div.classList.add("grid");
        }
    }
    draw();
}