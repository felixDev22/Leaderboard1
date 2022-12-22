import { inputScore, name, score } from './variables.js';
import getRaceScore from './getApiScore.js';

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
