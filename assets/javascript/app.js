//ensure the code doesn't run until the HTML is finished loading:

//window.onload = function() 

$(document).ready(function () {
    var display = document.getElementById("display");
    var question = document.getElementById("questions");
    console.log(question);
    
    var AnswerOne = document.getElementById("answer-one");
    var AnswerTwo = document.getElementById("answer-two");
    var AnswerThree = document.getElementById("answer-three");
    var AnswerFour = document.getElementById("answer-four");

    var checkAnswer = 

    correctAnswer = document.getElementById("correct-answer");


    // var correctAnswerOne = document.getElementById("correct-answer-one");
    // var correctAnswerTwo = document.getElementById("correct-answer-two");
    // var correctAnswerThree = document.getElementById("correct-answer-three");
    // var correctAnswerFour = document.getElementById("correct-answer-four");

//array with question, possible answer choices and correct answer.

    var questionArray = [
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

        questionArray.innerHTML = questionArray[currentQuestion].ques;
        console.log(questionArray[currentQuestion].ques);

    //these are the values that appear in the buttons
        AnswerOne.innerHTML = questionArray[currentQuestion].choices[0]; 
        AnswerTwo.innerHTML = questionArray[currentQuestion].choices[1];
        AnswerThree.innerHTML = questionArray[currentQuestion].choices[2];
        AnswerFour.innerHTML = questionArray[currentQuestion].choices[3];
                    
        console.log(questionArray[currentQuestion].choices[0]);
        console.log(questionArray[currentQuestion].choices[1]);
        console.log(questionArray[currentQuestion].choices[2]);
        console.log(questionArray[currentQuestion].choices[3]);

        questionArray.innerHTML = questionArray[currentQuestion].correctAnswer;  
        console.log(questionArray[currentQuestion].correctAnswer);

        };

    function decrement() {
        if (number > 0) {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
            console.log(number);
            display.innerHTML = number;
        } else {
            stop();
            console.log("Times Up!")
            //alert("Times Up!");
        }
    };

    function stop() {
        clearInterval(intervalId);
        timerRunning = false;
   };

    function recordLap() {
        var converted = timeConverter(time);
        lap++;

        //var newgame
        //
        
        $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
    };

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

    //function checkAnswers() {
        

        
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

       
});