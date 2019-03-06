'use strict';
function timer(time){
  var countDownTimer = new Date();
  countDownTimer.setMinutes(countDownTimer.getMinutes() + time + 0.1);
  var counter = setInterval(function() {
  var currentTime = new Date().getTime();

  var timeLeft = countDownTimer - currentTime;

  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if(seconds >= 10 && minutes != 0){
    document.getElementById("timer").innerHTML = minutes + " : " + seconds;
  }
  else if(seconds < 10 && minutes != 0){
    document.getElementById("timer").innerHTML = minutes + " : 0" + seconds;
  }
  else if(seconds >= 10 && minutes == 0){
    document.getElementById("timer").innerHTML = seconds;
  }
  else{
    document.getElementById("timer").innerHTML = "0" + seconds;
  }
  if(timeLeft < 0) {
    document.getElementById('bellDing').play();
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "Task is over!";
    setTimeout(function(){ window.location = "startRoutineB";}, 10000);
    }
  }, 1000);
}