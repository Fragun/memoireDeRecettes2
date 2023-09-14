const API_USER_LIKE = "/api/likeUser";

export async function likedUser(idUser, idUserLiked) {
  const response = await fetch(`${API_USER_LIKE}/likeUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idUser, idUserLiked }),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api user liked");
    }
  }
}

export async function deleteLikedUser(idUser, idUserLiked) {
  const response = await fetch(
    `${API_USER_LIKE}/deleteLikeUser/${idUser}/${idUserLiked}`,
    {
      method: "DELETE",
    }
  );
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api user liked");
    }
  }
}

export async function fetchUserLiked(idUser) {
  try {
    const response = await fetch(`${API_USER_LIKE}/likedUsers/${idUser}`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
