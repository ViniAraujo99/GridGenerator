const sliders = document.querySelectorAll("input[type=range]");

//Verifica se o usuário está acessando de um dispositivo móvel, para não estourar o grid.
export function mobileAdjust() {
    if (typeof screen.orientation == 'undefined') { 

        sliders.forEach(slider => {
            slider.max = 16;
        });
    }
}