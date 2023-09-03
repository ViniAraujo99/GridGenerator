import erase from './CleanGrid.js'

const colorInput = document.querySelector("input[type=color]");
const drawBtn = document.querySelector(".desenhar__btn");

let pencil = { desenhando : true };
export default pencil;

//Se clicar no botão de desenhar, desenha no grid
drawBtn.addEventListener('click', () => {
    erase.apagando = false;
    pencil.desenhando = true;

    if(!erase.apagando)  {
        draw();
    }
});

export function draw() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.addEventListener('mousedown', (e) => {
            e.target.style.background = colorInput.value;
        });
    });    
}