import erase from './CleanGrid.js'

const colorInput = document.querySelector("input[type=color]");
const drawBtn = document.querySelector(".desenhar__btn");

let pencil = { desenhando : true };
export default pencil;

//Se clicar no botão de desenhar, desenha no grid
drawBtn.addEventListener('click', () => {
        draw();
});

export function draw() {
    //let mousePressed;
    erase.apagando = false;
    pencil.desenhando = true;

    if(!erase.apagando)  {
        const grids = document.querySelectorAll(".grid");
        grids.forEach(grid => {
            grid.addEventListener("mousedown", (e) => {
                //mousePressed = true

                //let gridID = document.elementFromPoint(e.clientX, e.clientY).id;
                //console.log(gridID)

                //while(mousePressed && gridID == grid.ID) {
                    e.target.style.background = colorInput.value;
                //}
            });

            /*
            grid.addEventListener("mouseup", (e) => {
                //mousePressed = false

                grid.removeEventListener("mousedown", draw);
            });
            */
        });
    }
}

