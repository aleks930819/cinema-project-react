const URL = 'http://localhost:3030/jsonstore/tickets';

export async function reserveTicket(
  movie,
  numberOfTickets,
  userId,
  username,
  total
) {
  try {
    let response = await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie,
        numberOfTickets,
        userId,
        username,
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

export async function checkTickets(id) {
  try {
    let response = await fetch(`${URL}/${id}`);
    let jsonResult = await response.json();

    if (response.ok) {
      return jsonResult;
    }
    return jsonResult.message;
  } catch (err) {
    throw err;
  }
}
