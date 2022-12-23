const postScore = async (users) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KfbBpq9lwKHbgKVV1Z1q/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
      // eslint-disable-next-line comma-dangle
    }
  );
  const data = await response.json();

  return data;
};

export default postScore;
