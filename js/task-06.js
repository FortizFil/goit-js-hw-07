const input = document.querySelector('#validation-input');
const inputLength = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
 
    if (event.currentTarget.value.length == inputLength) {
        input.classList.remove("invalid");
       input.classList.add("valid");
    } else {
        input.classList.add("invalid");
        input.classList.remov("valid");
    };
    
};