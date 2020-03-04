//ensure the code doesn't run until the HTML is finished loading:

//window.onload = function() 

$(document).ready(function () {
    var display =document.getElementById("display")
    var question =document.getElementById("question")
    console.log(question)
    var possibleAnswerOne =document.getElementById("possible-answer-one")
    var possibleAnswerTwo =document.getElementById("possible-answer-two")
    var possibleAnswerThree =document.getElementById("possible-answer-three")
    var possibleAnswerFour =document.getElementById("possible-answer-four")
    



    var questions = [
        {ques: "What is Dumbledore?", 
        choices: ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"], 
        correctAnswer: "Headmaster"}, 
        
        {ques: "What is Hufflepuff?", 
        choices: ["Mystical Creature", "Hogwarts House", "Spell", "Curse"], 
        correctAnswer: "Hogwarts House"},

        {ques: "What is Dumbledore?", 
        choices: ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"], 
        correctAnswer: "Headmaster"},

        {ques: "What is Dumbledore?", 
        choices: ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"], 
        correctAnswer: "Headmaster"}
        ]

    display.innertext = "10:00";
    $("#lap").on("click", recordLap);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
  
var intervalId;
var timerRunning = false;
var time = 0;
var lap = 1;
var number = 10;
var currentQuestion=0;
  
function reset() {
    time = 0;
    lap = 1;
    display.innerHTML = "10";
    $("#laps").text("");
}

function start() {
    display.innerHTML = "10";

// if (!timerRunning) {}
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);       
        console.log(questions[currentQuestion].ques );
        question.innerHTML = questions[currentQuestion].ques;
        console.log(questions[currentQuestion].choices[0]);
        console.log(possibleAnswerOne);
        possibleAnswerOne.innerHTML = questions[currentQuestion].
        choices[0]; //value becuase they are on the button.
        
        possibleAnswerTwo.innerHTML= questions[currentQuestion].choices[1];
}

//on click for each button
//test to see if they are the correct answer
//event listeners when the buttons are clicked
//when they click is the answer=== correct answer

//after they make a choice - increment current question++ 
//go to next question.  display next question.

//count the questions answered correctly / incorrectly



function decrement() {
    if (number > 0) {
    number--; 
    $("#show-number").html("<h2>" + number + "</h2>");
    console.log(number);
    display.innerHTML = number;  
} else { stop();
    alert("Times Up!");
}
}


function stop() {
    clearInterval(intervalId);
    timerRunning = false;
}

function recordLap() {
    var converted = timeConverter(time);
    $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
    lap++;
}

function count() {
    time++;
    var converted = timeConverter(time);
    console.log(converted);
    $("#display").text(converted);
}
  
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    } 
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}
});

