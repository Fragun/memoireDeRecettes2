const API_SHOPPING = "/api/shopping";

export async function createShopping(value) {
  const response = await fetch(`${API_SHOPPING}/createShoppingList`, {
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
      throw new Error("Error Api Create Shopping");
    }
  }
}

export async function getShopping(userId) {
  try {
    const response = await fetch(`${API_SHOPPING}/getShoppingList/${userId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteShopping(idShopping) {
  const response = await fetch(`${API_SHOPPING}/deleteShopping/${idShopping}`, {
    method: "DELETE",
  });
  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api delete Shopping");
    }
  }
}

// export async function modifyShoppingById(values) {
//     
//     const response = await fetch(`${API_SHOPPING}/putShopping`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       })
//       const backResponse = await response.json();
//       if (response.ok) {
//         return backResponse;
//       } else {
//         if (backResponse) {
//           throw backResponse;
//         } else {
//           throw new Error("Error Api Modify Shopping");
//         }
//       }
//     }
