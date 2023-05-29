let isTimerStarted = false;

/** Get all Button Elements */
let resetButton = document.getElementById('restartButton');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');

resetButton.addEventListener('click', onResetTimer);
startButton.addEventListener('click', onStartTimer);
stopButton.addEventListener('click', onStopTimer);

/** Get All text value elements */
let hours = document.getElementById('hoursValue');
let minutes = document.getElementById('minutesValue');
let seconds = document.getElementById('secondsValue');

let currentTime = {
  hours: 0,
  mins: 0,
  secs: 0,
};

function onResetTimer() {}

function onStartTimer() {
  startButton.style.display = 'none';

  setInterval(() => {
    seconds.innerHTML = currentTime.secs++;

    if (currentTime.secs == 59) {
      currentTime.mins += 1;
      currentTime.secs = 0;

      minutes.innerHTML = currentTime.mins;
    }

    if (currentTime.mins == 60) {
      currentTime.hours += 1;
      currentTime.mins = 0;

      hours.innerHTML = currentTime.hours;
    }
  }, 1);
}

function onStopTimer() {}
