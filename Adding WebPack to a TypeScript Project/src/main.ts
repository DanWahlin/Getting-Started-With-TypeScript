import add from './add';

const result = add(4, 5);
const output = document.querySelector('#output');
if (output) {
    output.innerHTML = result.toString();
}