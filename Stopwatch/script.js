console.log('Connected')
let watch = document.getElementById('containerForWatch');
let playBtn = document.getElementById('play')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')

let firstInterval;
let secondInterval;
let i;
let k;
let paused;


function startStopWatch(sec,min) {
    i = 1
    firstInterval = setInterval(() => {
        let start = new Date()
        start.setSeconds(i++)
        sec.innerText = start.getSeconds()
    },1000)
    forMinutes(min)
    i = sec.innerHTML
}

function forMinutes(min){
    k = 1
    secondInterval = setInterval(() => {
        let start = new Date()
        min = start.setMinutes(k++)
        min.innerText = start.getMinutes() + ':'
    },60000)
    k = min.innerHTML
}

playBtn.addEventListener('click', () => {
    paused = 2;
    paused === 2 ? startStopWatch(seconds,minutes) : startStopWatch(i, k)    
});

stopBtn.addEventListener('click', () => {
    paused = 1
    seconds.innerHTML;
    minutes.innerHTML;
clearInterval(firstInterval)
clearInterval(secondInterval)
});


resetBtn.addEventListener('click', () => {
    seconds.innerText = '0'
    minutes.innerText = '00:'
    clearInterval(firstInterval)
    clearInterval(secondInterval)
});

