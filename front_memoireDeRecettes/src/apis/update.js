const API_UPDATE = "/api/update";

export async function resetPassword(email) {
  console.log(email.user_mail);
  const response = await fetch(`${API_UPDATE}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_mail: email.user_mail }),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api Create User");
    }
  }
}
