const API_RECIPE = "/api/recette";
const API_RECIPE_MODIF = "/api/recipeModif";

export async function modifyRecipe(recipeId, updatedFields) {
  console.log(recipeId);
  console.log(updatedFields);
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
  console.log(recipeId);
  const response = await fetch(`${API_RECIPE_MODIF}/deleteRecipe/${recipeId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return;
  } else {
    throw new Error("Error deleting recipe");
  }
}

export async function getRecipe() {
  const response = await fetch(`${API_RECIPE}/getRecipes`);
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
