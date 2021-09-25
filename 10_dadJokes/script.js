const jokeElement = document.getElementById('joke');
const jokeBoton = document.getElementById('jokeBoton');

const generateJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    });

    const data = await response.json();

    jokeElement.innerHTML = data.joke
}

generateJoke();

jokeBoton.addEventListener('click', generateJoke);
