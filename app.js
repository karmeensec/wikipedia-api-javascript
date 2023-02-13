const btn = document.querySelector('#submit');
const input = document.querySelector('#input');
const error = document.querySelector('#error');
const results = document.querySelector('#results');


// API params

const endpoint = 'https://en.wikipedia.org/w/api.php?';

const params = {
    action: 'query',
    format: 'json',
    origin: '*',
    prop: 'extracts',
    exchars: '300',
    exintro: true,
    explaintext: true,
    generator: 'search',
    gsrlimit: 30,
}


// Helpers

const disableUI = () => {

    btn.disabled = true;
    input.disabled = true;

}

const enableUI = () => {

    btn.disabled = false;
    input.disabled = false;

}

const clearPrevResults = () => {

    results.innerHTML = '';

}

const checkEmptyInput = (input) => {

    if (!input || input === '') return true;
    else return false;

}

const getData = function(e) {

    console.log(e);

}

const keyEvent = function(e) {

    if (e.key === 'Enter') {
        getData();
    }

}


const registerEvents = () => {

    input.addEventListener('keydown', keyEvent);
    btn.addEventListener('click', getData);

}

registerEvents();