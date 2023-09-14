const API_MEAL_TYPE = "/api/mealType";

export async function deleteMealType(id) {
  const response = await fetch(`${API_MEAL_TYPE}/deleteMealType${id}`, {
    method: "DELETE",
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api delete Meal_type");
    }
  }
}

export async function modifyMealTypeById(values) {
  const response = await fetch(`${API_MEAL_TYPE}/putMealType`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api Modify MealType");
    }
  }
}

export async function createMealType(value) {
  const response = await fetch(`${API_MEAL_TYPE}/createMealType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api Create MealType");
    }
  }
}
