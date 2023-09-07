import { mobileAdjust } from "./MobileGridAdjust.js";
import { createGrid, ehTouch } from "./Grids.js";
import { rangeAdjust } from "./RangeAdjust.js";
import { colorAdjust } from "./ColorAdjust.js";
//import { screenshot } from "./ScreenShot.js";

/*MÉTODOS IMPORTADOS*/
ehTouch();
mobileAdjust();
rangeAdjust();
colorAdjust();
createGrid();
//screenshot();

window.alert("Ajustar o tamanho do grid irá apagar qualquer desenho feito");