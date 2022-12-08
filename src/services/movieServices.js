
const URL = ' http://localhost:3030/jsonstore/movies-spa';

export function getAll() {
  return fetch(URL).then((res) => res.json());
}

export function getByID(id){
  return  fetch(`${URL}/${id}`).then((response) => response.json());
}