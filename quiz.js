const form = document.getElementById('form');

const answers  = [];
for (let i = 1; i <= 5; i++) { // looping to get each of the 5 answers
    const answer = document.getElementById('q' + i);
    answers.push(answer);
}

form.addEventListener('submit', event => {
    event.preventDefault();
    checkAnswers();
});

const setIncorrect = (element, message) => { // if they got the question wrong
    const inputControl = element.parentElement;
    const incorrectDisplay = inputControl.querySelector('.incorrect');

    incorrectDisplay.innerText = message; // displays a message if the wrong answer was put
    inputControl.classList.add('incorect');
    inputControl.classList.remove('correct')
}

const setCorrect = element => { // if they got the question right
    const inputControl = element.parentElement;
    const incorrectDisplay = inputControl.querySelector('.incorrect');

    incorrectDisplay.innerText = '';
    inputControl.classList.add('correct'); // this added class will be for the CSS to highlight green 
    inputControl.classList.remove('incorrect');
};