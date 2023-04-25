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
  await fetch(API_USERS,{
    method: "DELETE",
  });
}

