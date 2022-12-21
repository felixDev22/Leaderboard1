import './style.css';

import { generateScore, addScore, showScore } from './modules/display.js';
import { name, score, submit } from './modules/variables.js';

// on Load

window.addEventListener('load', () => {
  showScore();
});

// on clicking submit button

submit.addEventListener('click', (e) => {
  if (name.value === '' || score.value === '') {
    e.preventDefault();
    name.placeholder = 'Enter your Name';
    score.placeholder = 'Enter your Score';
  } else {
    addScore();
    generateScore();
  }
});
