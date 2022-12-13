const URL = 'http://localhost:3030/users/me';

export function getUser(accessToken) {
    return fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
    },
});
}
  

export function editUser(data,accessToken) {
    return fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
    },
    body: JSON.stringify(data),
});
}
  
  
  