let string = "";
let buttons = document.querySelectorAll('.button');

function calculatePercentage(value) {
    return value/100;
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = 'Error';
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == '%') {
            string = calculatePercentage(eval(string));
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
