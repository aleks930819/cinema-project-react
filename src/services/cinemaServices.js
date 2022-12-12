const URL = 'http://localhost:3030/data/cinemas';


export function getAll() {
    return fetch(URL).then((res) => res.json());
  }

  export function addCinema(data, accessToken) {
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
  
        'X-Authorization': accessToken,
      },
      body: JSON.stringify(data),
    });
  }
  