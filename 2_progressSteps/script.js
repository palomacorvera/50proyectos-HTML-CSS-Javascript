const proceso = document.getElementById('proceso');
const botonSiguiente = document.getElementById('siguiente');
const botonAnterior = document.getElementById('anterior');
const circulos = document.querySelectorAll('.circulo');

let activo = 1;

botonSiguiente.addEventListener('click', () => {
    activo++;

    if (activo > circulos.length) {
        activo = circulos.length;
    }

    actualizar();
})


botonAnterior.addEventListener('click', () => {
    activo--;

    if (activo < 1) {
        activo = 1;
    }

    actualizar();
})

const actualizar = () => {
    circulos.forEach((circulo, index) => {
        if(index < activo) {
            circulo.classList.add('activo');
        } else {
            circulo.classList.remove('activo');
        }
    })

    const activos = document.querySelectorAll('.activo');

    proceso.style.width = (activos.length - 1) / (circulos.length - 1) * 100 + '%';

    if (activo === 1) {
        botonAnterior.disabled = true;
    } else if (activo === circulos.length) {
        botonSiguiente.disabled = true;
    } else {
        botonAnterior.disabled = false;
        botonSiguiente.disabled = false;
    }
}