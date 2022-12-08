const URL = ' http://localhost:3030/jsonstore/movies-spa';

export function getAll() {
  return fetch(URL).then((res) => res.json());
}

export function getByID(id) {
  return fetch(`${URL}/${id}`).then((response) => response.json());
}

export function addMovie(data) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
