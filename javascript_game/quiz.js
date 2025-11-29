const quiz = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Which language runs in a web browser?", answer: "javascript" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is known as the father of computers?", answer: "charles babbage" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" }
];

let score = 0;

function startQuiz() {
    alert("Welcome to the Quiz Game! Let's begin.");

    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(quiz[i].question);

        if (userAnswer === null) {
            alert("You canceled the quiz!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quiz[i].answer) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert("Incorrect! The correct answer was: " + quiz[i].answer);
        }
    }

    alert("Quiz Finished! Your final score is: " + score + " / " + quiz.length);
}

startQuiz();
