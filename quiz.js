const form = document.getElementById('quizForm');

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
};

const setCorrect = element => { // if they got the question right
    const inputControl = element.parentElement;
    const incorrectDisplay = inputControl.querySelector('.incorrect');

    incorrectDisplay.innerText = '';
    inputControl.classList.add('correct'); // this added class will be for the CSS to highlight green 
    inputControl.classList.remove('incorrect');
};

const checkAnswers = () => {
    const answer1Value = answers[0].value.trim();
    const answer2Value = answers[1].value.trim();
    const answer3Value = answers[2].value.trim();
    const answer4Value = answers[3].value.trim();
    const answer5Value = answers[4].value.trim();

    if(answer1Value === '') {
        setIncorrect(answers[0], 'The correct answer was Software');
    } else if (answer1Value.toLowerCase() != 'software') {
        setIncorrect(answers[0], 'The correct answer was Software');
    } else {
        setCorrect(answers[0]);
    }

    if(answer2Value === '') {
        setIncorrect(answers[1], 'The correct answers were bicep or biceps');
    } else if (answer2Value.toLowerCase() != 'bicep' && answer2Value.toLowerCase() != 'biceps') {
        setIncorrect(answers[1], 'The correct answers were bicep or biceps');
    } else {
        setCorrect(answers[1]);
    }

    if(answer3Value === '') {
        setIncorrect(answers[2], 'The correct answer was George Washington');
    } else if (answer3Value.toLowerCase() != 'george washington') {
        setIncorrect(answers[2], 'The correct answer was George Washington');
    } else {
        setCorrect(answers[2]);
    }

    if(answer4Value === '') {
        setIncorrect(answers[3], 'The correct answer was 4');
    } else if (answer4Value != 4) {
        setIncorrect(answers[3], 'The correct answer was 4');
    } else {
        setCorrect(answers[3]);
    }

    if(answer5Value === '') {
        setIncorrect(answers[4], 'The correct answers were Spongebob or Spongebob Squarepants');
    } else if (answer5Value.toLowerCase() != 'spongebob' && answer5Value.toLowerCase() != 'spongebob squarepants') {
        setIncorrect(answers[4], 'The correct answers were Spongebob or Spongebob Squarepants');
    } else {
        setCorrect(answers[4]);
    }
}