const sonidos = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sonidos.forEach(sonido => {
    const boton = document.createElement('button')
    boton.classList.add('boton')

    boton.innerText = sonido

    boton.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sonido).play()
    })

    document.getElementById('botones').appendChild(boton)
})

function stopSongs() {
    sonidos.forEach(sonido => {
        const cancion = document.getElementById(sonido)
        
        cancion.pause()
        cancion.currentTime = 0;
    })
}