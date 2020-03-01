//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {
    
    //------------------------TIMER-------------------------------------------------//   

        window.onload = function() {
            $("#lap").on("click", timer.recordLap);
            $("#stop").on("click", timer.stop);
            $("#reset").on("click", timer.reset);
            $("#start").on("click", timer.start);
            };
      


   //----------------TIMER OBJECT---------------------------------------------------------//            
    var intervalId; //holds setInterval running timer
    var timerRunning = false;  // prevents the clock from being sped up unnecessarily
    var time=0;
    var lap=1;


    timer = function() { 
            time = 0;
            lap = 1;

            $("#display").text("00:00");  // this will format the display 


            reset = function() {
                timer.time = 0;
                timer.lap = 1;
                
                $("#laps").text(""); // this will reset the laps to zero
            };//reset timer and laps

            count = function() {
                    intervalId = setInterval(timer.count, 1000); 
                    console.log(setInterval) + lap++;
                }; //end count

            start = function() {
                if (!timerRunning) {
                    timer.time = setInterval(Increment, 1000)
                    timerRunning = true}
                }; //end start 

            stop = function() {
                clearInterval(intervalId); 
                timerRunning = false;
            };//clear interval     
            
            timeConverter = function(t) {
                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);
                    if (seconds < 10) {seconds = "0" + seconds}
                    if (minutes === 0) {minutes = "00"}
                    else if (minutes < 10) {minutes = "0" + minutes};
                    return (minutes + ":" + seconds);
            }; //end time converter
            
            recordLap = function() {
                    if (!timerRunning) {
                    console.log("lap-" + lap + "time complete " + time)
                    $("#laps").append("<p>Lap " + timer.lap + " : " + converted + "</p>");
                    var converted = timer.timeConverter(timer.time);
                    console.log(converted)};//end recorded lap
            }//end recorded laps 
    
    };//end timer object 

    //-------------------------------------------------------------------------//   
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        
    //var fiveSeconds=5
    //var tenSeconds=10
    //var timeUp=0

    //setTimeout = function() {
      //      fiveSeconds(function(){$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left")});
        //    tenSeconds(function() {$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left")});
          //  timeUp(function() {$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left");});
       // };
       
        //setTimeout(fiveSeconds, 1000 * 5);
        //setTimeout(tenSeconds, 1000 * 10);
        //setTimeout(timeUp, 1000 * 15);
    

    //------------------------QUESTION-------------------------------------------------//   
    
    var question = ["What is Dumbledore?", "What is Hufflepuff?", "Who is Lily?", "Who is Fluffy?"];
    
    getQuestion = function() {
        question = [Math.floor(Math.random() * correctAnswer.length)];
        console.log(getQuestion);
             };

    //------------------------PLAY GAME-------------------------------------------------//   

    playgame = function() {
        
        //------------------------CORRECT ANSWER  -------------------------------------------------// 
        var correctAnswer = [
            ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"]
            ["Mystical Creature", "Hogwarts House", "Spell", "Curse"]
            ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"]
            ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"]
        ];

        correctAnswer[Math.floor(Math.random() * correctAnswer.length)];

        for (var i=0; i < 1; i++) {
            var questionIndex = question.indexOf(getQuestion);    
            var correctAnswerIndex = correctAnswer.indexOf(getAnswer); 
            console.log(question)
            console.log(correctAnswer)
        }

        getCorrectAnswer = function() {
                correctAnswer.innerHTML = "Answer: " + correctAnswer[questionIndex][correctAnswerIndex]
                console.log(getQuestion);
                console.log(getCorrectAnswer);
        };

        //------------------------PLAYER GUESS RESULT  -------------------------------------------------// 

       // playerGuessResult = function() {
         //   guesses = [];
         //   playerGuessResult = correctAnswer[Math.floor(Math.random() * correctAnswer.length)];
          //  playerGuessResult = playerGuess.replace(/\s/g, "-");
          //  console.log(getQuestion);
           // console.log(getCorrectAnswer)
      //  }; 
        playGame();
    };//end play game function

    //  buttons();
    // losses = 0;
    // wins = 0;
    // guessResult();
    // showLives();
    // chooseQuestion();
    
});

