const postScore = async (user) => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KfbBpq9lwKHbgKVV1Z1q/scores',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
      // eslint-disable-next-line comma-dangle
    }
  ).then((response) => response.json());
};
export default postScore;
