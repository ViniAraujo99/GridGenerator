import pencil from './Draw.js'

const cleanBtn = document.querySelector(".limpar__btn");
const eraseBtn = document.querySelector(".apagar__btn");
const gridContainer = document.querySelector(".grids__container");

let erase = { apagando : true };
export default erase;

//Se clicar no botão de limpar, limpa o grid
cleanBtn.addEventListener('click', () => {
    cleanGrid();
});

//Se clicar no botão de apagar, apagar o grid
eraseBtn.addEventListener('click', () => {
    erase.apagando = true;
    pencil.desenhando = false;

    if(!pencil.desenhando)  {
        eraseGrid();
    }
});

//Limpa os grids pintados 
export function cleanGrid() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.style.background = "#FFFFFF";
    });    
}

//Apaga os grids pintados
export function eraseGrid() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.addEventListener('mousedown', (e) => {
            e.target.style.background = "#FFFFFF";
        });
    });    
}

//Salva o último filho na varíavel, remove o último filho e salva o novo último filho até não ter mais elementos filhos
export function deleteGrid() {
    let lastGrid = gridContainer.lastElementChild;
    while(lastGrid) {
        gridContainer.removeChild(lastGrid);
        lastGrid = gridContainer.lastElementChild;
    }
}