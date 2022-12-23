import { inputScore, name, score } from './variables.js';
import getRaceScore from './carRace.js';
import postScore from './post.js';

// eslint-disable-next-line prefer-const
let scoreArr = [];

const addScore = () => {
  const users = {};
  users.user = name.value;
  users.score = score.value;
  scoreArr.push(users);
  postScore(users);
  name.value = '';
  score.value = '';
};

// To render dynamically the recent scores
const displayScore = () => {
  inputScore.innerHTML = '';
  scoreArr.forEach((user) => {
    inputScore.innerHTML += '';
    inputScore.innerHTML += `
        <li>${user.user}: ${user.score}</li>`;
    name.value = '';
    score.value = '';
  });
};

const refreshScore = async () => {
  const newScoreArr = await getRaceScore();
  scoreArr = await newScoreArr;
  displayScore();
};

export { displayScore, addScore, refreshScore };
