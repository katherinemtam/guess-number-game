import { compareNumbers } from './utils.js';

const input = document.getElementById('input');
const button = document.getElementById('button');
const resetButton = document.getElementById('reset-button');
const chances = document.getElementById('chances');
const message = document.getElementById('message');
const trophy = document.getElementById('trophy');

let correctNumber = Math.ceil(Math.random() * 20);
let chancesNumber = 5;

export function handleClick() {
    const guess = Number(input.value);
    const result = compareNumbers(guess, correctNumber);

    if (result === 1) {
        chancesNumber--;
        chances.textContent = `You have ${chancesNumber} chances left!`;
        message.textContent = 'Too High!';
    } else if (result === -1) {
        chancesNumber--;
        chances.textContent = `You have ${chancesNumber} chances left!`;
        message.textContent = 'Too Low!';
    } else {
        chances.textContent = 'You win!';
        message.textContent = 'Correct!';
        button.style.display = 'none';
        trophy.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    }
    if (chancesNumber <= 0) {
        chances.textContent = 'Game Over.';
        button.style.display = 'none';
        resetButton.classList.remove('hidden');
    }
}