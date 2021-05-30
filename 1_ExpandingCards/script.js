const paneles = document.querySelectorAll(".panel");

const comprimir = () => {
    paneles.forEach((panel) => {
        panel.classList.remove('activo');
    })
};

paneles.forEach((panel) => {
    panel.addEventListener('click', () => {
        comprimir();
        panel.classList.add('activo');
    })
});