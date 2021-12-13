

var min = 00;
var seconds = 00;
var tens = 00;
var appendMin = document.getElementById("min")
var appendSeconds = document.getElementById("seconds")
var appendTens = document.getElementById("tens")
var Interval;

var buttonStart = document.getElementById('button-start')
    .addEventListener('click', () => start())

var buttonStop = document.getElementById('button-stop')
    .addEventListener('click', () => stop())

var buttonReset = document.getElementById('button-reset')
    .addEventListener('click', () => reset())

    const start = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }
    
    const stop = () => {
        clearInterval(Interval)
    }
    
    const reset = () => {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendSeconds.innerHTML = tens;
        appendTens.innerHTML = tens;
    }
    
const startTimer = () => {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        min++
        appendMin.innerHTML = "0" + min
        seconds = 0
        appendSeconds.innerHTML = "0" + 0;
    }
}


