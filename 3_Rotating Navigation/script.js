const abrir = document.getElementById('abierto');
const cerrar = document.getElementById('cerrado');
const contenedor = document.querySelector('.contenedor');

abrir.addEventListener('click', () => {
    contenedor.classList.add('enseña-navegador');
})

cerrar.addEventListener('click', () => {
    contenedor.classList.remove('enseña-navegador');
})