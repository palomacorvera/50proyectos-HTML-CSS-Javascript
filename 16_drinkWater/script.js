const vasosPequeños = document.querySelectorAll('.vaso-pequeño');
const litros = document.getElementById('litros');
const porcentaje = document.getElementById('porcentaje');
const restante = document.getElementById('restante');

const updateBigCup = () => {
    const vasosLlenos = document.querySelectorAll('.vaso-pequeño.lleno').length;
    const vasosTotales = vasosPequeños.length;

    if(vasosLlenos === 0) {
        porcentaje.style.visibility = 'hidden';
        porcentaje.style.height = 0;
    } else {
        porcentaje.style.visibility = 'visible';
        porcentaje.style.height = `${vasosLlenos / vasosTotales * 330}px`;
        porcentaje.innerText = `${vasosLlenos / vasosTotales * 100}%`;
    };

    if(vasosLlenos === vasosTotales) {
        restante.style.visibility = 'hidden';
        restante.style.height = 0;
    } else {
        restante.style.visibility = 'visible';
        litros.innerText = `${2 - (250 * vasosLlenos / 1000)}L`
    };
};

updateBigCup();

vasosPequeños.forEach((vaso, index) => {
    vaso.addEventListener('click', () => highlightCups(index));
});

const highlightCups = (index) => {
    if(vasosPequeños[index].classList.contains('lleno') && !vasosPequeños[index].nextElementSibling.classList.contains('lleno')) {
        index--;
    };

    vasosPequeños.forEach((vaso, index2) => {
        if(index2 <= index) {
            vaso.classList.add('lleno');
        } else {
            vaso.classList.remove('lleno');
        };
    });

    updateBigCup();
};