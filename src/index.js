import './style.css';

import { displayScore, addScore } from './modules/display.js';
// eslint-disable-next-line object-curly-newline
import { name, score, submit, refresh } from './modules/variables.js';

// on Load

window.addEventListener('load', () => {
  displayScore();
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

// on clicking refresh button
refresh.addEventListener('click', () => {
  displayScore();
});
