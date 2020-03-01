//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {
    
    //------------------------TIMER-------------------------------------------------//   

        window.onload = function() {
        $("#lap").on("click", timer.recordLap);
        $("#stop").on("click", timer.stop);
        $("#reset").on("click", timer.reset);
        $("#start").on("click", timer.start);
        };
      
        var intervalId; //holds setInterval running timer
       
        var timerRunning = false;  // prevents the clock from being sped up unnecessarily

   //----------------TIMER OBJECT---------------------------------------------------------//            
   
   var timer = { 
        time = 0,
        lap = 1,

        reset = function() {
            timer.time = 0;
            timer.lap = 1;
            $("#display").text("00:00");  // this will format the display 
            $("#laps").text(""); // this will reset the laps to zero
            //reset timer and laps
       

            start = function() {
                if (!timerRunning) {time = setInterval(Increment, 1000)
                }; //clear interval 

            stop = function() {clearInterval(intervalId); timerRunning = false;}
    
            function timeConverter(t) {
                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);
                    if (seconds < 10) {seconds = "0" + seconds;}
                    if (minutes === 0) {minutes = "00"; }
                    else if (minutes < 10) {minutes = "0" + minutes;}
                    return minutes + ":" + seconds;}
                 
            function count() {intervalId = setInterval(Increment, 1000); console.log(setInterval) + lap++;}

            function recordLap() {if (!timerRunning) {
                console.log("lap-" + lap + "time complete " + time)
                $("#laps").append("<p>Lap " + timer.lap + " : " + converted + "</p>");
                var converted = timer.timeConverter(timer.time);
                console.log(converted);
    }}
    

    
    
    //-------------------------------------------------------------------------//   
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        setTimeout = function() {
                
            fiveSeconds(function(){$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left")});
            tenSeconds(function() {$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left")});
            timeUp(function() {$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left");});
        };
       
        setTimeout(fiveSeconds, 1000 * 5);
        setTimeout(tenSeconds, 1000 * 10);
        setTimeout(timeUp, 1000 * 15);

    

 //------------------------PLAY GAME-------------------------------------------------//   

    playGame = 
    
    $("#start-game").on("click", function reset() {


    //------------------------QUESTION-------------------------------------------------//   

        
               
      var question = ["What is Dumbledore?", "What is Hufflepuff?", "Who is Lily?", "Who is Fluffy?"];
           
      var correctAnswer = [
        ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"];
        ["Mystical Creature", "Hogwarts House", "Spell", "Curse"];
        ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"];
        ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"];
            ];


      var getQuestion = function() {
            if (question === correctAnswer[01]) {


        var getCorrectAnswer = answer[Math.floor(Math.random() * answer.length)];

        var questionIndex = question.indexOf(getQuestion);    
        var correctAnswerIndex = correctAnswer.indexOf(getAnswer); 


        getAnswer.innerHTML = "Answer: " + correctAnswer[questionIndex][correctAnswerIndex]

        console.log(chooseQuestion);
        console.log(chooseAnswer);

        

        var selectcategory = function () {
            if (chosenCategory === categories[0]) {
              categoryName.innerHTML = "The Chosen Category Is: Wizard";
            } else if (chosenCategory === categories[1]) {
              categoryName.innerHTML = "The Chosen Category Is: Quidditch";
            } else if (chosenCategory === categories[2]) {
              categoryName.innerHTML = "The Chosen Category Is: Hogwartz Houses";
            } else if (chosenCategory === categories[3]) {
              categoryName.innerHTML = "The Chosen Category Is: Books";
              console.log(categoryName);
              console.log(categories);
            }
          }




        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        buttons();
        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        losses = 0;
        wins = 0;
        guessResult();
        showLives();
        chooseQuestion();
        canvas();
        showWins();
        showLosses();
      };
      playGame();
    

      $("#Q1").text(selectQuestion[0]); 
      $("#Q2").text(selectQuestion[1]); 
      $("#Q3").text(selectQuestion[2]); 
      $("#Q4").text(selectQuestion[3]); 
    

      console.log(chooseQuestion)
      console.log(correctAnswer)
});//end of
});

