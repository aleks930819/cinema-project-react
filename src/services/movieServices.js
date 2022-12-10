const URL = 'http://localhost:3030/data/movies';

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
      accept: 'application.json',
      'Content-Type': 'application/json',
      'X-Authorization': accessToken,
    },
    body: JSON.stringify(data),
  });
}

export function editMovie(id, data, accessToken) {
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'X-Authorization': accessToken,
    },
    body: JSON.stringify(data),
  });
}

export function deleteMovie(id, accessToken) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'X-Authorization': accessToken,
    },
  }).catch((err) => err);
}
