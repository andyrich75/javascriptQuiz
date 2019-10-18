function populate() {
    if(quiz.isEnded()); {
        showScore();

    }

    else {
        var element = document.getElementById("questions");
        element.innerHTML = quiz.getQuestionsIndex().text;

        var choices = quiz.getQuestionsIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choices" + i);
            ekement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick - function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNum = quiz.questionsIndex + 1;
    var elemnt = document.getElementById("progress");
    element.innerHTML = "Questions" + currentQuestionNum + "of" + quiz.questions.length;
}
 function showScore() {
     var gameOverHTML = "<h1>Result</h1>";
         gameOverHTML += "<h2 id="score"> Your Score: " + quiz.score + "</h2>";
         var element = document.getElementById("quiz");
         element.innerHTML = gameOverHTML;
 };




// Setting the question with an array
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"  
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: [ "javascript", "js", "scripting", "script"],
        answer: "script"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction()", "function myFunction()", "Any of the Above"],
        answer: "function myFunction()"
    },
    {
        title: "How do you call a function named "myFunction"?",
        choices: ["call myFunction()", "myFunction()", "call function myFunction()", "Any of the Above"]
        answer: "myFunction()"
    }
];
 
var quiz = new Quiz(questions);

populate();