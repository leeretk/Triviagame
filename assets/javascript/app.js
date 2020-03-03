//ensure the code doesn't run until the HTML is finished loading:


window.onload = function() {
    $("#lap").on("click", recordLap);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
  };
  
var intervalId;
var timerRunning = false;
var time = 0;
var lap = 1;
var number = 10;
  
function reset() {
    time = 0;
    lap = 1;
    $("#display").text("00:00");
    $("#laps").text("");
}

function start() {
    if (!timerRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
}

if (number === 0) {
    stop();
    alert("Times Up!");
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


