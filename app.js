import { compareNumbers } from './utils.js';

const input = document.getElementById('input');
const button = document.getElementById('button');
const chances = document.getElementById('chances');
const message = document.getElementById('message');

let correctNumber = Math.ceil(Math.random()*20);
console.log(correctNumber)
let chancesNumber = 5

button.addEventListener('click', () => {
    const guess = Number(input.value);
    const result = compareNumbers(guess, correctNumber);
    if (result === 1) {
        chancesNumber--;
        chances.textContent = `You have ${chancesNumber} chances left!`
        message.textContent = 'Too High!'
    } else if (result === -1) {
        chancesNumber--;
        chances.textContent = `You have ${chancesNumber} chances left!`
        message.textContent = 'Too Low!';
    } else {
        chances.textContent = 'You win!'
        message.textContent = 'Correct!';
    } 
})