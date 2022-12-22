import './style.css';

import { displayScore, addScore, refreshScore } from './modules/carRace.js';
import { name, score, submit, refresh } from './modules/variables.js';

// on Load

window.addEventListener('load', () => {
  refreshScore();
});

// on clicking submit button

submit.addEventListener('click', (e) => {
  if (name.value === '' || score.value === '') {
    e.preventDefault();
    name.placeholder = 'Enter your Name';
    score.placeholder = 'Enter your Score';
  } else {
    addScore();
  }
});
