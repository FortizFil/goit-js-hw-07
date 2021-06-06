const input = document.querySelector('input');
const name = document.querySelector('#name-output');

input.addEventListener('input', newName)

function newName(event) {
   name.textContent = event.currentTarget.value
 };
