const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text.textContent)

input.addEventListener('input', onInput)

function onInput(event) {  
  text.style.fontSize = `${event.currentTarget.value}px`;
 };