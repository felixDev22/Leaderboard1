import { inputScore, name, score } from './variables.js';
import getRaceScore from './carRace.js';
import postScore from './post.js';

// eslint-disable-next-line prefer-const
let scoreArr = [];

const addScore = () => {
  const user = {};
  user.user = name.value;
  user.score = score.value;
  scoreArr.push(user);
  postScore(user);
  name.value = '';
  score.value = '';
};

// To render dynamically the recent scores
const displayScore = async () => {
  inputScore.innerHTML += '';
  const scoreArr = await getRaceScore();
  scoreArr.forEach((result) => {
    inputScore.innerHTML += `
        <li>${result.user}: ${result.score}</li>`;
    name.value = '';
    score.value = '';
  });
};

export { displayScore, addScore };
