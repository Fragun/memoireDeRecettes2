const API_MOMENT = "/api/moment";

export async function deleteMoment(id) {
    const response = await fetch(`${API_MOMENT}/deleteMoment${id}`, {
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
            throw new Error("Error Api delete Type_de_repas")
        }
    }

}

export async function modifyMomentById(values) {
    console.log(values);
    const response = await fetch(`${API_MOMENT}/putMoment`, {
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
          throw new Error("Error Api Modify Type_de_repas");
        }
      }
    }

export async function createMoment(value) {
  console.log(value);
  const response = await fetch(`${API_MOMENT}/createMoment`, {
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
      throw new Error("Error Api Create type_de_repas");
    }
  }
}
    