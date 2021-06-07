const input = document.querySelector('input');


input.addEventListener('input', newName)

function newName(event) {
  const name = document.querySelector('#name-output');
  if (event.currentTarget.value.trim() === "") {
    name.textContent = 'незнакомец'
  } else {name.textContent = event.currentTarget.value}
  
 };
