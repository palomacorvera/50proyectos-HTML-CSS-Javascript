const cajas = document.querySelectorAll('.caja');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    cajas.forEach(caja => {
        const topeCaja = caja.getBoundingClientRect().top;
        if (topeCaja < triggerBottom) {
            caja.classList.add('enseñar');
        } else {
            caja.classList.remove('enseñar');
        }
    })
}