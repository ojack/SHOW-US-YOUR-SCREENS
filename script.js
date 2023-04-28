function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    
    //   document.getElementById('stop').addEventListener('click', function () {
    //       clearInterval(intervalId);
    //   });
}

window.onload = function () {
   // var count = 60 * .5,
   var count = 60 * 10
        display = document.querySelector('#timer');
       // display.textContent = "00:"+count;
    //   document.getElementById('start').addEventListener('click', function () { 
    // 		startTimer(count, display);
    //   });       

        startTimer(count, display);
};