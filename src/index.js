import './style.css';

import { addScore, refreshScore } from './modules/display.js';
// eslint-disable-next-line object-curly-newline
import { name, score, submit, refresh } from './modules/variables.js';

// on Load

window.addEventListener('load', () => {
  refreshScore();
});

// on clicking submit button

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value === '' || score.value === '') {
    name.placeholder = 'Enter your Name';
    score.placeholder = 'Enter your Score';
  } else {
    addScore();
  }
});

// on clicking refresh button
refresh.addEventListener('click', () => {
  refreshScore();
});
