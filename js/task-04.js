const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');




let a = 0;

decrementBtn.addEventListener('click', onDecrement);

function onDecrement() {
    a -= 1;
    counterValue.textContent = a;
}

incrementBtn.addEventListener('click', onIncrement);

function onIncrement() {
    a += 1;
    counterValue.textContent = a;
}