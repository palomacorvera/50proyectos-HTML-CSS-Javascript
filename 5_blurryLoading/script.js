const texto = document.querySelector('.cargando');
const fondo = document.querySelector('.fondo');

let cargando = 0;
let int = setInterval(borroso, 30);

function borroso() {
    cargando++;

    if (cargando > 99) {
        clearInterval(int);
    }

    texto.innerText = `${cargando}%`;
    texto.style.opacity = scale(cargando, 0, 100, 1, 0);
    fondo.style.filter = `blur(${scale(cargando, 0, 100, 10, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}