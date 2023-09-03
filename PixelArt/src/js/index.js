import { mobileAdjust } from './MobileGridAdjust.js';
import { createGrid } from './CreateGrids.js';
import { rangeAdjust } from './RangeAdjust.js';
import { colorAdjust } from './ColorAdjust.js';
import { draw } from './Draw.js';
import { eraseGrid } from './CleanGrid.js';


mobileAdjust();
rangeAdjust();
colorAdjust();
createGrid();
draw();
eraseGrid();