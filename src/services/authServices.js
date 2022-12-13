const URL = 'http://localhost:3030/users';

export async function login(email, password) {
  try {
    let response = await fetch(`${URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
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

export async function register(email, password,username) {

  try {
    let response = await fetch(`${URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        username
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

export async function logout(accessToken) {
  try {
    let response = await fetch(`${URL}/logout`, {
      headers: {
        
        'X-Authorization': accessToken,
      },
    });
  } catch (err) {}
}
