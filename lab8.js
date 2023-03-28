const input = document.getElementById('input');

input.addEventListener('mousedown', event => {
    if (event.ctrlKey) {
        input.classList.add('clicked');
    }
});

input.addEventListener('mouseup', event => {
    input.classList.remove('clicked');
});