const API_DIET_TYPE = "/api/dietType";

export async function deleteDietType(id) {
    const response = await fetch(`${API_DIET_TYPE}/deleteDietType${id}`, {
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
            throw new Error("Error Api delete Diet_type")
        }
    }

}

export async function modifyDietTypeById(values) {
    console.log(values);
    const response = await fetch(`${API_DIET_TYPE}/putDietType`, {
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
          throw new Error("Error Api Modify DietType");
        }
      }
    }

export async function createDietType(value) {
  console.log(value);
  const response = await fetch(`${API_DIET_TYPE}/createDietType`, {
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
      throw new Error("Error Api Create DietType");
    }
  }
}
    