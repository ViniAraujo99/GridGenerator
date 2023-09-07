const cleanBtn = document.querySelector(".limpar__btn");
const gridContainer = document.querySelector(".grids__container");

//Se clicar no botão de limpar, limpa o grid
cleanBtn.addEventListener("click", () => {
  cleanGrid();
});

//Limpa os grids pintados
export function cleanGrid() {
  const grids = document.querySelectorAll(".grid-col");
  grids.forEach((grid) => {
    grid.style.background = "transparent";
  });
}

//Salva o último filho na varíavel, remove o último filho e salva o novo último filho até não ter mais elementos filhos
export function deleteGrid() {
  let lastGrid = gridContainer.lastElementChild;
  while (lastGrid) {
    gridContainer.removeChild(lastGrid);
    lastGrid = gridContainer.lastElementChild;
  }
}
