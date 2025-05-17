var questions = [
    { question: "Which SDG is dedicated to quality education?", answers: ["SDG 1", "SDG 8", "SDG 14", "SDG 4"], correct: 3 },
    { question: "What is the primary aim of this website?", answers: ["Inclusive education", "Environment", "Promote brainrot", "Increase tuition"], correct: 0 },
    { question: "Which is NOT a cause of lack of education?", answers: ["Discrimination", "Sufficient funding", "Poor conditions", "Poverty"], correct: 1 },
    { question: "How can we minimize this problem?", answers: ["Fossil fuels", "Raise taxes", "Awareness & support", "Build hospitals"], correct: 2 },
    { question: "What is the term for the inability to read or write?", answers: ["Unreadable", "Illiteracy", "Disrespect", "Ignorance"], correct: 1 }
];

var index = 0, score = 0;
var question = document.getElementById("question");
var ansButtons = document.getElementById("choices");
var nxtButton = document.getElementById("nxt");

function start() {
    index = 0;
    score = 0;
    nxtButton.style.display = "none"; 
    display();
}

function display() {
    question.innerHTML = questions[index].question;
    ansButtons.innerHTML = ""; 
    nxtButton.style.display = "none"; 

    for (let i = 0; i < questions[index].answers.length; i++) {
        let button = document.createElement("button");
        button.innerHTML = questions[index].answers[i];
        button.classList.add("btn");

       
        button.onclick = function() {
            check(i, button);
        };

        ansButtons.appendChild(button);
    }
}

function check(choice, selectedButton) {
    if (choice === questions[index].correct) {
        score++;
        selectedButton.style.backgroundColor = "green";
    }else {
        selectedButton.style.backgroundColor = "red";
    }

    nxtButton.style.display = "block";

    
    var buttons = document.querySelectorAll(".btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function nextquestion() {
    index++;
    if (index < questions.length) {
        display();
    } else {
        question.innerHTML = "All Done! You scored " + score + " out of " + questions.length + ".";
        ansButtons.innerHTML = "";
        nxtButton.style.display = "none";
    }
}

nxtButton.onclick = nextquestion;
start();
