const input = document.querySelector('#validation-input');
const inputLength = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
 
    if (event.currentTarget.value.length == inputLength) {
        input.classList.remove("invalid");
       return input.classList.add("valid");
    };
    input.classList.replace("valid", "invalid");
};