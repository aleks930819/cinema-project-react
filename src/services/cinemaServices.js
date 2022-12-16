const URL = 'http://localhost:8000/api/cinemas';

export function getAll() {
  return fetch(URL).then((res) => res.json());
}

export function addCinema(data, accessToken) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,

      // 'X-Authorization': accessToken,
    },
    body: JSON.stringify(data),
  });
}
