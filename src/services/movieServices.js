const URL = ' http://localhost:3030/jsonstore/movies-spa';

export function getAll() {
  return fetch(URL).then((res) => res.json());
}

export function getByID(id) {
  return fetch(`${URL}/${id}`).then((res) => res.json());
}

export function addMovie(data) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((err) => err);
}

export function editMovie(id, data) {
  return fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((err) => err);
}

export function deleteMovie(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  }).catch((err) => err);
}
