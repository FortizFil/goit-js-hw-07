const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');


decrementBtn.addEventListener('click', () => {

    counterValue.textContent --;
});

incrementBtn.addEventListener('click', () => {

counterValue.textContent ++;
});
