//ensure the code doesn't run until the HTML is finished loading:

//window.onload = function() 

$(document).ready(function () {
    
    var display = document.getElementById("display");
    var AnswerOne = document.getElementById("answer-one");
    var AnswerTwo = document.getElementById("answer-two");
    var AnswerThree = document.getElementById("answer-three");
    var AnswerFour = document.getElementById("answer-four");


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
        timerRunning = true;
        display.innerHTML = "10";
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        //current Question 1st record in console.
        questionArray.innerHTML = questionArray[currentQuestion].ques;
        console.log("Current Question :" + questionArray[currentQuestion].ques);

        //Possible Answers to the Current Question: these are the values that appear in the buttons
        AnswerOne.innerHTML = questionArray[currentQuestion].choices[0];
        AnswerTwo.innerHTML = questionArray[currentQuestion].choices[1];
        AnswerThree.innerHTML = questionArray[currentQuestion].choices[2];
        AnswerFour.innerHTML = questionArray[currentQuestion].choices[3];

        console.log("Answer One: " + questionArray[currentQuestion].choices[0]);
        console.log("Answer two: " + questionArray[currentQuestion].choices[1]);
        console.log("Answer three: " + questionArray[currentQuestion].choices[2]);
        console.log("Answer four: " + questionArray[currentQuestion].choices[3]);

        //current Question - Correct Answer
        questionArray.innerHTML = questionArray[currentQuestion].correctAnswer;
        console.log("Correct Answer: " + questionArray[currentQuestion].correctAnswer);

    };

    function stop() {
        clearInterval(intervalId);
        timerRunning = false;
    }
    
    correctAnswer = document.getElementById("correct-answer");
    
    function recordattempt() {
        var converted = timeConverter(time);
        attempt++;
        $("#attempts").append("<p>" + "Attempt: " + "#attempt"+ "#correct-answer" + "</p>")
        console.log("Attempt: " + attempt)
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
    var number = 10;
    var currentQuestion = 0;
    var correctAnswerCount = 0;
      
    //decrement counter
    function decrement() {
        if (number > 0) {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
            console.log(number);
            display.innerHTML = number;
        } else {
            stop();
            console.log("Times Up!")
            $("#times-up").html("<h3>" + "Times Up!" + "</h23");
            recordattempt();
            reset();
            //alert("Times Up!");
        }
    }
   


    function reset() {
        time = 0;
        attempt++;
        display.innerHTML = "0";
        $("#display").text("");
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






        //function checkAnswers() {}



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