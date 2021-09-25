var readlineSync = require('readline-sync');

var userName = readlineSync.question('Hey! May I know your name ');
var score = 0;
var welcomeMessage = '\nWelcome ' +userName + ' to Are you are Potterhead? ';
console.log(welcomeMessage);

//highscores

var highScores = [
{
  name:"Ritika: ",
  score:"3"
},
{
name: "Bhoomi: ",
score: "2"
},
]

//play function

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("\nWow " +userName +" ,good job.You got 1 point");
    score++;
  }
  else{
    console.log("\nOops! Wrong Answer");
  }
  console.log("Your current score is ", score);
  console.log("----------------------------");
}

// question and answers

var questions = [{
  question: "\nWhere is the Ravenclaw common room located?\na: In the Dungeons\nb: Near the Kitchen\nc: Above the Library\nd: In Ravenclaw tower\nYour answer:  ",
  answer: "d"
},
{
  question: "Which of these characters is a half blood?\na: Dumbledore\nb: Harry POtter\nc: Snape\nd: All of the above\nYour answer: ",
  answer: "d"
},
{
  question: "What's Ron's second wand made of?\na: Beech\nb: Willow\nc: Birch\nd: Hawthron\nYour answer: ",
  answer: "b"
}];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

if(score === 0){
  console.log("Your final score is 0.No problem!Let's try again.")
}else{
console.log("YAY! Your final score is", score);
}
console.log("\n\nCheckout the highscores");

for(var i=0;i<highScores.length;i++){
  var current= highScores[i];
  console.log(current.name,current.score);
}

console.log("\nGot a higher score?Send me a screen shot and I shall update it! ");