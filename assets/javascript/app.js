//ensure the code doesn't run until the HTML is finished loading:

//window.onload = function() 

$(document).ready(function () {

    var display = document.getElementById("display");
    var answerOne = document.getElementById("answer-one");
    var answerTwo = document.getElementById("answer-two");
    var answerThree = document.getElementById("answer-three");
    var answerFour = document.getElementById("answer-four");
    var mySound;


    var questionArray = [
        {
            ques: "Who is Dumbledore?",
            choices: ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"],
            correctAnswer: "Headmaster"
        },
        {
            ques: "What is Hufflepuff?",
            choices: ["Mystical Creature", "Hogwarts House", "Spell", "Curse"],
            correctAnswer: "Hogwarts House"
        },
        {
            ques: "Who is Lily?",
            choices: ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"],
            correctAnswer: "Harry's Mother"
        },
        {
            ques: "Who is Fluffy?",
            choices: ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"],
            correctAnswer: "Hagrid's Guard Dog"
        },
    ]
    
    function playgame() {
        // var bleep = new audio();
        // bleep.src="8d82b5_Harry_Potter_Intro_Sound_Effect.mp3";
        event.preventDefault();
       
        timerRunning = true;
        display.innerHTML = "10";
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        //current Question 1st record in console.
        questionArray.innerHTML = questionArray[currentQuestion].ques;
        console.log("Current Question :" + questionArray[currentQuestion].ques);

        //Possible Answers to the Current Question: these are the values that appear in the buttons
        answerOne.innerHTML = questionArray[currentQuestion].choices[0];
        answerTwo.innerHTML = questionArray[currentQuestion].choices[1];
        answerThree.innerHTML = questionArray[currentQuestion].choices[2];
        answerFour.innerHTML = questionArray[currentQuestion].choices[3];

        console.log("Answer One: " + questionArray[currentQuestion].choices[0]);
        console.log("Answer two: " + questionArray[currentQuestion].choices[1]);
        console.log("Answer three: " + questionArray[currentQuestion].choices[2]);
        console.log("Answer four: " + questionArray[currentQuestion].choices[3]);

        //current Question - Correct Answer
        questionArray.innerHTML = questionArray[currentQuestion].correctAnswer;
        console.log("Correct Answer: " + questionArray[currentQuestion].correctAnswer);
    };

    function nextquestion() {
        event.preventDefault();
        $("#next-question").on("click", questionArray[currentQuestion].ques++);
        console.log("Next Question :" + questionArray[currentQuestion].ques++);
    }

    function stop() {
        clearInterval(intervalId);
        timerRunning = false;
    }

    correctAnswer = document.getElementById("correct-answer");

    function recordattempt() {
        event.preventDefault();
        var converted = timeConverter(time);
        attempt++;
        $("#attempts").append("<p>" + "   Attempt: " + attempt + "  Answer: " + "</p>");
        console.log("Attempt: " + attempt);
    }

    display.innertext = "0";
    $("#playgame").on("click", playgame);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#attempt").on("click", recordattempt);
    $("#correct-answer").on("click", correctAnswer);

    var intervalId;
    var timerRunning = false;
    var time = 0;
    var attempt = 0;
    var timer = 4;
    var currentQuestion = 0;
    var incorrectAnswerCount=0;
    var nextQuestion = 0;
    var correctAnswerCount = 0;

    //decrement counter
    function decrement() {

        if (timer > 0) {
            timer--;
            $("#show-timer").html("<h1>" + timer + "</h1>");
            console.log(timer);
            display.innerHTML = timer;
        } else {
            stop();
            console.log("Times Up!")
            $("#times-up").html("<h3>" + "Times Up!" + "</h23");
            //alert("Times Up!");
        }
    }

    function reset() {
        time = 0;
        display.innerHTML = "0";
        $("#display").text("");
        recordattempt();
        event.preventDefault();
            }

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
    $("#display").html("<h3>" + "#display" + "</h23");


    function checkAnswers() {

        if (correctAnswer === AnswerOne) {
               console.log("You picked the correct answer!" + correctAnswer)
               correctAnswerCount++;
               console.log("Correct Count " + correctAnswerCount);
               console.log(correctAnswerCount);
               reset();
             } else {
               incorrectAnswerCount++;
               console.log("Incorrect Count " + incorrectAnswerCount);
               console.log("Incorrect Answer Try Again!");
               reset();
           }

           function answerQuestion() {
            $("#answer-question").on("click", checkAnswers());
            console.log("answer-question" + answerQuestion);
        }
        

    };
  
});