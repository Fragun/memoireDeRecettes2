const API_USERS = "/api/auth";

export async function signin(credentials) {
  const response = await fetch(API_USERS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const backResponse = await response.json();
  console.log(backResponse);
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Oops une erreur est survenue");
    }
  }
}

export async function getCurrentUser() {
  const response = await fetch(`${API_USERS}/current`);
  return response.json();
}

export async function signout() {
  await fetch(API_USERS, {
    method: "DELETE",
  });
}

export async function modifyUser(values) {
  const response = await fetch (`${API_USERS}/modifUser`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
  })
  const responseBack = await response.json();
  if (response.ok) {
      return responseBack;
  } else {
      if (responseBack) {
          throw responseBack
      } else {
          throw new Error("Error Api modify User")
      }
  }
}

export async function fetchUsers() {
  try {
    const response = await fetch(`${API_USERS}/fetchUsers`);
      return response.json();
  } catch (error) {
    console.error(error);
  }
}
