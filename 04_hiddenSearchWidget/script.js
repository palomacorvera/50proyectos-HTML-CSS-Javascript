const buscar = document.querySelector('.buscar');
const boton = document.querySelector('.boton');
const input = document.querySelector('.input');

boton.addEventListener('click', () => {
    buscar.classList.toggle('activo');
    input.focus();
})