const izquierda = document.querySelector('.izquierda');
const derecha = document.querySelector('.derecha');
const contenedor = document.querySelector('.contenedor');

izquierda.addEventListener('mouseenter', () => {
    contenedor.classList.add('hover-izquierda')
});

izquierda.addEventListener('mouseleave', () => {
    contenedor.classList.remove('hover-izquierda')
});

derecha.addEventListener('mouseenter', () => {
    contenedor.classList.add('hover-derecha')
});

derecha.addEventListener('mouseleave', () => {
    contenedor.classList.remove('hover-derecha')
});