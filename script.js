var count = 60 * 10
// var count = 60*0.1
var display = document.querySelector('#timer');
var color = document.getElementById('color')
var lineup = document.getElementById('lineup')
var timer

var intervalId = null

color.style.opacity = 0
color.style.background = 'white'

function showColor (){
    color.style.opacity = 1
}
function startTimer(duration, display) {
    lineup.style.opacity = 0
    display.style.opacity = 1
    color.style.opacity = 0
    color.style.background = 'rgb(245, 8, 107)'
    timer = duration
    window.timer = duration
  //  var timer = duration, minutes, seconds;
    if(intervalId !== null) clearInterval(intervalId)
    display.textContent = "10:00";
    timer--
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
           // timer = duration;
           clearInterval(intervalId)
           showColor()
        }
    }, 1000);
    
    //   document.getElementById('stop').addEventListener('click', function () {
    //       clearInterval(intervalId);
    //   });
}

window.addEventListener('keypress', event => {
    console.log('ley press', event)
        // if (event.keyCode == 13) {
        //   alert('hi.')
        // }
    if(event.code === "Space") {
        console.log('reset timer')

        startTimer(count, display);

    } else if (event.code === "KeyQ") {
        display.style.opacity = 0
        display.textContent = ''
        lineup.style.opacity = 1
        color.style.background = 'white'
        showColor()
    }
})

window.onload = function () {
    showColor()
    display.style.opacity = 0
   // var count = 60 * .5,
 //  var count = 60 * 10
       // display.textContent = "00:"+count;
    //   document.getElementById('start').addEventListener('click', function () { 
    // 		startTimer(count, display);
    //   });       

      //  startTimer(count, display);


};