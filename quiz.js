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