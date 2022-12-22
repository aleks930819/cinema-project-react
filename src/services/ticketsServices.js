const URL = 'http://localhost:8000/api/tickets';

export async function reserveTicket(
  movieName,
  count,
  userId,
  userName,
  total,
  accessToken
) {
  try {
    let response = await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        movieName,
        count,
        userId,
        userName,
        total,
      }),
    });
    let jsonResult = await response.json();

    if (response.ok) {
      return jsonResult;
    }
    return jsonResult.message;
  } catch (err) {
    throw err;
  }
}

export async function checkTickets(accessToken) {
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}



export function deleteTicket(id, accessToken) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,

      // 'X-Authorization': accessToken,
    },
  }).catch((err) => err);
}


