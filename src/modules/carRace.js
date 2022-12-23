// get the data from API

const getRaceScore = async () => {
  const response = await fetch(
    // eslint-disable-next-line comma-dangle
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KfbBpq9lwKHbgKVV1Z1q/scores'
  );
  const results = await response.json();
  const scoreList = results.result;
  return scoreList;
};

