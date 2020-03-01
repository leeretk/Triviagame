//-------------------------------------------------------------------------//

//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {
    
        window.onload = function() {
        $("#lap").on("click", recordLap);
        $("#stop").on("click", stop);
        $("#reset").on("click", reset);
        $("#start").on("click", start);
        };
      
        //SET TIMER
        //  Variable that will hold our setInterval that runs the stopwatch
        var intervalId;
        // prevents the clock from being sped up unnecessarily
        var clockRunning = false;
        var time = 0;
        var lap = 1;

        function reset() {
            time = 0;
            lap = 1;
            $("#display").text("00:00");
            $("#laps").text("");
         }

    //-------------------------------------------------------------------------//            
        function startClock() {if (!clockRunning) {time = setInterval(Increment, 1000);}}
        function stop() {clearInterval(intervalId);}
        function recordLap() {if (!clockRunning) {console.log("lap-" + lap + "time complete " + time)}}
        function count() {intervalId = setInterval(Increment, 1000); console.log(setInterval) + lap++;}

    //-------------------------------------------------------------------------//   
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    setTimeout = function() {
        
        function timeConverter(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
                if (seconds < 10) {seconds = "0" + seconds;}
                if (minutes === 0) {minutes = "00"; }
                else if (minutes < 10) {minutes = "0" + minutes;}
                return minutes + ":" + seconds;}
        
        fiveSeconds(function(){$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left")});
        tenSeconds(function() {$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left")});
        timeUp(function() {$("#time-left").append("<h2>About 10 seconds left!<h2>");console.log("10 seconds left");});
    };
   
    setTimeout(fiveSeconds, 1000 * 5 );
    setTimeout(tenSeconds, 1000 * 10 );
    setTimeout(timeUp, 1000 * 15 );    
  
          
});

