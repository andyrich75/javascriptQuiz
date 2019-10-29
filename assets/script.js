//begins quiz and then removes the start button 
//grabbed this from a snippit of code that I found googling
var start = document.getElementById("start-quiz");
start.addEventListener("click", function(){
  start.parentNode.removeChild(start);
  runQuiz();
})

