var questions = [
    new questions("")
]



//function for the quiz to run and pull answer with adding a score.
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
}

Quiz.prototype.getQuestionsIndex = function() {
    return this.questions[this.questionsIndex];

}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionsIndex;
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionsIndex().correcAnswer(answer)) {
        this.score++;
    }
    this.questionsIndex++;
}
//function for the questions to be called
function questions(title, choices, answer) {
    this.title = text;
    this.choices = choices;
    this.answer = answer;
}

questions.prototype.correctAnswer = function(choices) {
    return choices === this.answer;
}