/******* Monday, May 31, 2021 *******/
function stopWatch() {
  //Create new Date() object
  let dateSec = new Date();
  //Call individual timestamp(Seconds, Minutes, Hours)
  let seconds = dateSec.getSeconds();
  // let minutes = dateSec.getMinutes();
  //Display individual times for seconds, minutes
  //Add leading "0" if less than "10"


  
  if(seconds < 10) {
    seconds = `0${seconds}`;
    document.getElementById('sec').textContent = seconds;
  } else {
    document.getElementById('sec').textContent = seconds;
  }

  //Add leading "0" if less than "10"
  // if(minutes < 10) {
  //   minutes = `0${minutes}`;
  //   document.getElementById('min').textContent = `${minutes}:`;
  // } else {
  //   document.getElementById('min').textContent = `${minutes}:`;
  // }
  //   document.getElementById('hrs').textContent = `${hours}: `;

}
//Set connection to display through "id"
const seconds = document.querySelector('#sec');
// const minutes = document.querySelector('#min');
// const hours = document.querySelector('#hrs');


// Call setInterval() for display 5/31/21
// const minCount = setInterval(stopWatch, 1000);
// const hrCount = setInterval(stopWatch, 1000);
/**************/
// Connect to start button
const startWatch = document.querySelector('#start');
// Connect to stop button
const stopCount = document.querySelector('#stop');
// Connect to reset button
const resetCount = document.querySelector('#reset');
// Add EventListener to start button
startWatch.addEventListener('click', function() {
  secCount = setInterval(stopWatch, 1000);
  console.log("is this thing on?");
});
// Add EventListener to stop stopwatch
stopCount.addEventListener('click', function() {
  clearInterval(secCount);
  console.log("stop the count");
});
//Reset count to all zeros
resetCount.addEventListener('click', function() {
  clearInterval(secCount);
  document.querySelector('.sec').textContent = '00';
})




/***********************************************/
// Call controls for main clock 5/31/21

// Monday, May 31, 2021 11:52am
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById('clock').textContent = time;
}
// const createClock = setInterval(displayTime, 1000);
const stop_clock = document.querySelector('#clock-stop');
const start_clock = document.querySelector('#clock-start');

// Test to start main clock with addEventListener
start_clock.addEventListener('click', function() {
  createClock = setInterval(displayTime, 1000);
});
// Test to stop main clock with addEventListener
stop_clock.addEventListener('click', function() {
  clearInterval(createClock);
});

  // Console test
console.log(`${timeNow} ${" and then some!"}`);
