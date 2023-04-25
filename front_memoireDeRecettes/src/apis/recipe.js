const API_RECIPE = "/api/recette";

export async function addRecipe(values) {
    const response = await fetch(`${API_RECIPE}/addRecipe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    const backResponse = await response.json();
    console.log(backResponse);
}

export async function mealTypeRecipe(values) {
    const response = await fetch(`${API_RECIPE}/getMealType`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    const backResponse = await response.json();
    console.log(backResponse);
}