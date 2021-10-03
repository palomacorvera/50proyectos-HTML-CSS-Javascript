const body = document.body;
const slides = document.querySelectorAll('.slide');
const botonIzquierdo = document.getElementById('izquierda');
const botonDerecho = document.getElementById('derecha');

let slideActivo = 0;

botonDerecho.addEventListener('click', () => {
    slideActivo++;

    if(slideActivo > slides.length - 1) {
        slideActivo = 0;
    };

    setBgToBody();
    setActiveSlide();
});

botonIzquierdo.addEventListener('click', () => {
    slideActivo--;

    if(slideActivo < 0) {
        slideActivo = slides.length -1;
    };

    setBgToBody();
    setActiveSlide();
});

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[slideActivo].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('activo');
    });

    slides[slideActivo].classList.add('activo');
};