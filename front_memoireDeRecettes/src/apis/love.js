const API_LOVE = "/api/love";

export async function postLoved(likedInfo) {
  const response = await fetch(`${API_LOVE}/likedRecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(likedInfo),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api");
    }
  }
};

export async function deleteLoved(likedInfo) {
    const recipeId = likedInfo[0];
    const userId = likedInfo[1];
    const response = await fetch(`${API_LOVE}/deleteLikedRecipe/${recipeId}/${userId}`, {
        method: 'DELETE',
    })
    const backResponse = await response.json();
    if (response.ok) {
        return backResponse;
    } else {
        if (backResponse) {
            throw backResponse
        } else {
            throw new Error("Error Api delete likedRecipes")
        }
    }

};

export async function fetchLoved(userId) {
  try {
    const response = await fetch(`${API_LOVE}/likedRecipe/${userId}`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
};
