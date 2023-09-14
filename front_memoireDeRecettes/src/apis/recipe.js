const API_RECIPE = "/api/recette";
const API_RECIPE_MODIF = "/api/recipeModif";

export async function getRecipesFavorite(idUser, page) {
  try {
    const response = await fetch(`${API_RECIPE}/getRecipeByUser/${idUser}?limit=${page * 6}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(`Response not OK, status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

export async function modifyRecipe(updatedFields) {
  const response = await fetch(`${API_RECIPE_MODIF}/modifyRecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api Modify Recipe");
    }
  }
}
export async function deleteRecipe(recipeId) {
  const response = await fetch(`${API_RECIPE_MODIF}/deleteRecipe/${recipeId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return;
  } else {
    throw new Error("Error deleting recipe");
  }
}

export async function getRecipe(userId) {
  const response = await fetch(`${API_RECIPE}/getRecipes`);
  return response.json();
}

export async function getGoogleAnalytics() {
  const response = await fetch(`${API_RECIPE_MODIF}/runReport`);
  return response.json();
}

export async function getMealType() {
  try {
    const response = await fetch(`${API_RECIPE}/getMealType`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getSeason() {
  try {
    const response = await fetch(`${API_RECIPE}/getSeason`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getCookType() {
  try {
    const response = await fetch(`${API_RECIPE}/getCookType`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getDietType() {
  try {
    const response = await fetch(`${API_RECIPE}/getDietType`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getMealMoment() {
  try {
    const response = await fetch(`${API_RECIPE}/getMealMoment`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getUstensils() {
  try {
    const response = await fetch(`${API_RECIPE}/getUstensils`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getIngredient() {
  try {
    const response = await fetch(`${API_RECIPE}/getIngredient`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getImages(filename) {
  try {
    const response = await fetch(`${API_RECIPE}/image/${filename}`);
    if (response.ok) {
      return response;
    }
  } catch (error) {
    console.error(error.message);
  }
}

export async function getRating(idRecipe) {
  try {
    const response = await fetch(`${API_RECIPE}/rating/${idRecipe}`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getTrickByRecipe(id) {
  try {
    const response = await fetch(`${API_RECIPE}/getTrick/${id}`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function addTrick(values, id, idUser) {
  try {
    const response = await fetch(
      `${API_RECIPE}/addTrickRecipe/${id}/${idUser}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const backResponse = await response.text();

    return backResponse;
  } catch (error) {
    console.error("Error in addTrick:", error);
    throw error;
  }
}
