//ensure the code doesn't run until the HTML is finished loading:

//window.onload = function() 

$(document).ready(function () {
    var display = document.getElementById("display");
    var question = document.getElementById("question");
    console.log(question);

 //   
    var possibleAnswerOne = document.getElementById("possible-answer-one");
    var possibleAnswerTwo = document.getElementById("possible-answer-two");
    var possibleAnswerThree = document.getElementById("possible-answer-three");
    var possibleAnswerFour = document.getElementById("possible-answer-four");

    // var correctAnswerOne = document.getElementById("correct-answer-one");
    // var correctAnswerTwo = document.getElementById("correct-answer-two");
    // var correctAnswerThree = document.getElementById("correct-answer-three");
    // var correctAnswerFour = document.getElementById("correct-answer-four");

//array with question, possible answer choices and correct answer.

    var questions = [
        {
            ques: "Who is Dumbledore?",
            choices: ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"],
            correctAnswer: "Headmaster"},
        {
            ques: "What is Hufflepuff?",
            choices: ["Mystical Creature", "Hogwarts House", "Spell", "Curse"],
            correctAnswer: "Hogwarts House"},
        {
            ques: "Who is Lily?",
            choices: ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"],
            correctAnswer: "Harry's Mother"},
        {
            ques: "Who is Fluffy?",
            choices: ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"],
            correctAnswer: "Hagrid's Guard Dog"},
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
    var currentQuestion = 0;
    var correctAnswerCount = 0;

    function reset() {
        time = 0;
        lap = 1;
        display.innerHTML = "10";
        $("#laps").text("");
    };

    function start() {
        timerRunning = true;
        display.innerHTML = "10";
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        question.innerHTML = questions[currentQuestion].ques;

        console.log(questions[currentQuestion].ques);
        question.innerHTML = questions[currentQuestion].correctAnswer;  
        
    //these are the values that appear in the buttons
        possibleAnswerOne.innerHTML = questions[currentQuestion].choices[0]; 
        possibleAnswerTwo.innerHTML = questions[currentQuestion].choices[1];
        possibleAnswerThree.innerHTML = questions[currentQuestion].choices[2];
        possibleAnswerFour.innerHTML = questions[currentQuestion].choices[3];

        
        console.log(questions[currentQuestion].correctAnswer)
        
        console.log(questions[currentQuestion].choices[0]);
        console.log(questions[currentQuestion].choices[1]);
        console.log(questions[currentQuestion].choices[2]);
        console.log(questions[currentQuestion].choices[3]);
        };

    function decrement() {
        if (number > 0) {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
            console.log(number);
            display.innerHTML = number;
        } else {
            stop();
            alert("Times Up!");
        }
    }

    function stop() {
        clearInterval(intervalId);
        timerRunning = false;
    }

    function recordLap() {
        var converted = timeConverter(time);
        lap++;
        $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");


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
    };

    //function checkAnswer() {
        

        
        //     if (possibleAnswerOne === correctAnswer) {
        //         console.log("You picked the correct answer!" + correctAnswer)
        //         correctAnswerCount++;
        //         console.log(correctAnswerCount);
        //         console.log(possibleAnswerOne);
        //         console.log(correctAnswer);
        //         stop();
        //     } else {
        //         console.log("Incorrect Answer Try Again!");
        //         console.log(correctAnswerCount);
        //         stop();
        //     }

    
}});