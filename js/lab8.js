const input = document.getElementById('input');

input.addEventListener('mousedown', event => {
    if (event.ctrlKey) {
        input.classList.add('clicked');
    }
});

input.addEventListener('mouseup', event => {
    input.classList.remove('clicked');
});


const elementSelect = document.getElementById('element');
const resultInput = document.getElementById('result');
elementSelect.addEventListener('change', function() {
  const selectedOption = elementSelect.options[elementSelect.selectedIndex];
  resultInput.value = 'Selected name: ' + selectedOption.text;
});