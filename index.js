var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What is your name? ");



console.log("Welcome " + userName + " , Please answer the following friends questions ");

//function 
function play(question,answer) {
  var userQuestion = readLineSync.question(question);
  if (userQuestion.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  }else{
    console.log("Wrong, The right answer is " + answer);
  }
  console.log("Current Score is ", score);
  console.log("---------------------------------");
}
/**
play("1.In which year friends first season aired? ","1994");
play("2.Among 6 friends who was the first roomate of Monica?","Phoebe");
play("3.How many divorces does ross had? ","3");
play("4.How many childern's does phoebe had to her brother? ","3");
play("5.What is the name of rachel's daughter? ", "emma");
play("")
*/
var highScore = [{
  name : "Vinaykumar",
  scored: 10
},{
  name : "Sandesh",
  scored : 10
   }             ]

var friendsQuestions = [ {
  question : 
    "1.In which year friends first season aired? a: 1992 b: 1993 c: 1994 ",
  answer   : "c"
},{
  question : 
    "2.Among 6 friends who was the first roomate of Monica? a: Chandler b: Phoebe c: Rachel ",
  answer   : "b"
},{
  question : "3.How many divorces does ross had? a: 1 b: 2 c: 3 ",
  answer   : "c"
},{
  question : 
    "4.Joey was never a roomate for one of these people? a: Ross b: Phoebe c: Rachel ",
  answer   : "b"
},{
  question : 
    "5.Name of monica and ross's father? a: Jake b: Muriel c: Joey ",
  answer   : "a"
},{
  question : 
    "6.What is the name of rachel's daughter? a: Emma b: Jane c: Lessie ",
  answer   : "a"
},{
  question : 
    "7.To whom do phoebe married in last season? a: David b: Mike c: Joey ",
  answer   : "b"
},{
  question : 
    "8.How many towels does monica catagoried? a: 7 b: 11 c: 8 ",
  answer   : "b"
},{
  question : 
    "9.Name of the ross's second wife? a: Carol b: Emily c: Mona ",
  answer   : "b"
},{                        
  question : 
    "10.Middle name of Chandler Bing a: Paul b: Muriel ",
  answer   : "b"
} 
                        
]

for (var i = 0; i < friendsQuestions.length; i++) {
  play(friendsQuestions[i].question,friendsQuestions[i].answer)
}


console.log("Your final Score is ", score);
console.log("****************************");
console.log("Highest Score ")
for(var i = 0; i < highScore.length; i++){
  console.log("Name " + highScore[i].name + " Scored Value is " + highScore[i].scored);
}
console.log("-------- Thank you for playing ------- ")