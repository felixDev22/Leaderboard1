// fetch the data from API
const getRaceScore = async () => {
  const request = await fetch(
    // eslint-disable-next-line comma-dangle
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KfbBpq9lwKHbgKVV1Z1q/scores'
  );
  const data = await request.json();
  data.result.sort((a, b) => b.score - a.score);
  return data.result;
};

export default getRaceScore;
