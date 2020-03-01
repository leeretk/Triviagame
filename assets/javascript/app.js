//-------------------------------------------------------------------------//

//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {
    
    //------------------------TIMER-------------------------------------------------//   

        window.onload = function() {
        $("#lap").on("click", recordLap);
        $("#stop").on("click", stop);
        $("#reset").on("click", reset);
        $("#start").on("click", start);
        };
      
        var intervalId;
       
        var clockRunning = false;  // prevents the clock from being sped up unnecessarily
        var time = 0;
        var lap = 1;

    function reset() {
            time = 0;
            lap = 1;
            $("#display").text("00:00");
            $("#laps").text("");
         }

   //-------------------------------------------------------------------------//            
    function start() {if (!clockRunning) {time = setInterval(Increment, 1000);}
    function stop() {clearInterval(intervalId);}
    function recordLap() {if (!clockRunning) {console.log("lap-" + lap + "time complete " + time)}}
    function count() {intervalId = setInterval(Increment, 1000); console.log(setInterval) + lap++;}

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
            if (seconds < 10) {seconds = "0" + seconds;}
            if (minutes === 0) {minutes = "00"; }
            else if (minutes < 10) {minutes = "0" + minutes;}
            return minutes + ":" + seconds;}
    
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


        

 //------------------------QUESTION-------------------------------------------------//   


        var selectQuestion = function() {
            if (chooseQuestion === chooseAnswer[01]) {
                "What is Dumbledore?", 
            
            "What is Hufflepuff?", 
            
            "Who is Lily?", 
            
            "Who is Fluffy?";
            
              $("#Q1").text(selectQuestion[0]); 
              $("#Q2").text(selectQuestion[1]); 
              $("#Q3").text(selectQuestion[2]); 
              $("#Q4").text(selectQuestion[3]); 

        var selectCategory = function () {
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

 $("#start-game").on("click", function reset() {
       
 //------------------------ANSWER-------------------------------------------------//   

    correctAnswer = (["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"];
                        ["Mystical Creature", "Hogwarts House", "Spell", "Curse"];
                        ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"];
                        ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"]);

    console.log(chooseQuestion)
    console.log(correctAnswer)

    var correctAnswer = indexOf(chooseQuestion.chooseAnswerQ1)    
    

 //------------------------PLAY GAME-------------------------------------------------//   

    playGame = function () {

        correctAnswer = [
            ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"];
            ["Mystical Creature", "Hogwarts House", "Spell", "Curse"];
            ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"];
            ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"]
        ];

        chooseAnswer = answer[Math.floor(Math.random() * answer.length)];
        
        var questionIndex= questions.indexOf(chooseQuestion)
        var answerIndex = answers.indexOf(chooseAnswer)
        showAnswer.innerHTML = "Answer: " + answer[questionIndex][answerIndex]
        console.log(chooseQuestion);
        console.log(chooseAnswer);

        
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
    

});//end of
});

