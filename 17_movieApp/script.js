const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f82fd298cc663cc23563f64322f14190&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f82fd298cc663cc23563f64322f14190&query="';

const formulario = document.getElementById('formulario');
const buscar = document.getElementById('buscar');
const main = document.getElementById('main');

const getClassByRate = (vote) => {
    if(vote >= 8) {
        return 'verde';
    } else if (vote >= 5) {
        return 'naranja';
    } else {
        return 'rojo';
    };
};

const showMovies = (peliculas) => {
    main.innerHTML = '';

    peliculas.forEach((pelicula) => {
        const {title, poster_path, vote_average, overview} = pelicula;

        const peliculaEl = document.createElement('div');
        peliculaEl.classList.add('pelicula');

        peliculaEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="info-pelicula">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(peliculaEl);
    });
};

const getMovies = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
};

getMovies(API_URL);

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const valorBuscado = buscar.value;

    if (valorBuscado && valorBuscado !== '') {
        getMovies(SEARCH_API + valorBuscado);

        buscar.valor = '';
    } else {
        window.location.reload();
    };
});