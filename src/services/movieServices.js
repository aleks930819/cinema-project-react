const URL = 'http://localhost:8000/api/movies';


export function getAll() {
  return fetch(URL).then((res) => res.json());
}

export function getByID(id) {
  return fetch(`${URL}/${id}`).then((res) => res.json());
}

export function addMovie(data, accessToken) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      // 'X-Authorization': accessToken,
    },
    body: JSON.stringify(data),
  });
}

export function editMovie(id, data, accessToken) {
  return fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,

      // 'X-Authorization': accessToken,
    },
    body: JSON.stringify(data),
  });
}

export function deleteMovie(id, accessToken) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,

      // 'X-Authorization': accessToken,
    },
  }).catch((err) => err);
}



