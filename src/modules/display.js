import { inputScore, name, score } from './variables.js';

let scoreArr = [];

// Save To Local Directory
const pushToLocal = () => {
  localStorage.setItem('inputScore', JSON.stringify(scoreArr));
};

// To get recent scores and push to LocalStorage
const addScore = () => {
  const user = {};
  user.name = name.value;
  user.score = score.value;
  scoreArr.push(user);
  pushToLocal();
};

// To render dynamically the recent scores
const generateScore = () => {
  scoreArr.forEach((user) => {
    inputScore.innerHTML += `
        <li>${user.name}: ${user.score}</li>`;
    name.value = '';
    score.value = '';
  });
};

// To display recent added scores
const showScore = () => {
  if (localStorage.getItem('inputScore')) {
    scoreArr = JSON.parse(localStorage.getItem('inputScore'));
  }

  generateScore();
};

export { generateScore, addScore, showScore };
