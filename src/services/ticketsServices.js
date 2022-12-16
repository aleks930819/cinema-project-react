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
         'Authorization': `Bearer ${accessToken}`,


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
  try {
    let response = await fetch(`${URL}`,{
      'Method':'GET',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
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
