const API_COOKING_TYPE = "/api/cookingType";

export async function deleteCookingType(id) {
    const response = await fetch(`${API_COOKING_TYPE}/deleteCookingType${id}`, {
        method: 'DELETE',
    })
    const backResponse = await response.json();
    console.log(backResponse);
    if (response.ok) {
        return backResponse;
    } else {
        if (backResponse) {
            throw backResponse
        } else {
            throw new Error("Error Api delete User")
        }
    }

}

export async function modifyCookingTypeById(values) {
    console.log(values);
    const response = await fetch(`${API_COOKING_TYPE}/putCookingType`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      const backResponse = await response.json();
      if (response.ok) {
        return backResponse;
      } else {
        if (backResponse) {
          throw backResponse;
        } else {
          throw new Error("Error Api Modify CookingType");
        }
      }
    }

export async function createCooking(value) {
  console.log(value);
  const response = await fetch(`${API_COOKING_TYPE}/createCookingType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api Create CookingType");
    }
  }
}
    