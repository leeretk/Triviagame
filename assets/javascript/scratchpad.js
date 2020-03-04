
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
        $("#get-question").text(getCorrectAnswer);
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

//4 objects (question, choices (array), correct answer) 

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

        // var questions = ["What is Dumbledore?", "What is Hufflepuff?", "Who is Lily?", "Who is Fluffy?"];

        // var possibleAnswers = [
        //     ["Headmaster", "Defense Against the Dark Arts Teacher", "Evil Wizard", "Harry's Father"]
        //     ["Mystical Creature", "Hogwarts House", "Spell", "Curse"]
        //     ["Harry's Aunt", "Snape's Wife", "Harry's Mother", "Headmistress"]
        //     ["Ron's Ratt", "Harry's Owl", "Hermione's Cat", "Hagrid's Guard Dog"]
        // ];
            
        // var correctAnswer = [
        //     "Headmaster", "Hogwarts House", "Harry's Mother", 
        //     "Hagrid's Guard Dog"
        // ];   
    

        //ctrl KC

