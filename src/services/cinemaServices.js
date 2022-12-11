const URL = 'http://localhost:3030/data/cinemas';


export function getAll() {
    return fetch(URL).then((res) => res.json());
  }