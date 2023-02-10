const btn = document.querySelector('#submit');
const input = document.querySelector('#input');
const error = document.querySelector('#error');
const results = document.querySelector('#results');

const disableUI = () => {

    btn.disabled = true;
    input.disabled = true;

}

const enableUI = () => {

    btn.disabled = false;
    input.disabled = false;

}