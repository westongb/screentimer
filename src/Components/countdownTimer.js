import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuBar from "./menuBar";
import "./components.css";

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// buttons.forEach(button => button.addEventListener('click', startTimer));
// document.customForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const mins = this.minutes.value;
//   console.log(mins);
//   timer(mins * 60);
//   this.reset();
// });

export default function CountDownTimer(){

    return(
        <div>
    
                <body>
                <div class="timer">
                    <div class="timer__controls">
                    <button data-time="20" class="timer__button">20 Secs</button>
                    <button data-time="300" class="timer__button">Work 5</button>
                    <button data-time="900" class="timer__button">Quick 15</button>
                    <button data-time="1200" class="timer__button">Snack 20</button>
                    <button data-time="3600" class="timer__button">Lunch Break</button>
                    <form name="customForm" id="custom">
                        <input type="text" name="minutes" placeholder="Enter Minutes"/>
                    </form>
                    </div>
                    <div class="display">
                    <h1 class="display__time-left"></h1>
                    <p class="display__end-time"></p>
                    </div>
                </div>

                <script src="scripts-FINISHED.js"></script>
                </body>
        </div>
    )

}