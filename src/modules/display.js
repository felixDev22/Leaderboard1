import { inputScore, name, score } from './variables.js';
import { getRaceScore } from './carRace.js';

let scoreArr = [];

// To get recent scores
const addScore = () => {
  const user = {};
  user.name = name.value;
  user.score = score.value;
  scoreArr.push(user);
  name.value = '';
  score.value = '';
};

// To render dynamically the recent scores
const displayScore = () => {
  scoreArr.forEach((user) => {
    inputScore.innerHTML += `
        <li>${user.name}: ${user.score}</li>`;
    name.value = '';
    score.value = '';
  });
};

const refreshScore = async () => {
  const arr = await getRaceScore();
  scoreArr = await arr;
  displayScore();
};

export { displayScore, addScore, refreshScore };
