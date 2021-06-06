const input = document.querySelector('#validation-input');
const inputLength = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
 
    if (event.currentTarget.value.length == inputLength) {
       return input.classList.add("valid");
    };
    input.classList.add("invalid");
};