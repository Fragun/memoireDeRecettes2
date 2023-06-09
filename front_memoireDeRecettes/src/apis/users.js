 const API_USERS = "/api/users";


export async function deleteUserById(idUser) {
    const response = await fetch(`${API_USERS}/deleteUser${idUser}`, {
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


export async function createUser(newUser, formData) {
    const response = await fetch(API_USERS, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser, formData)
    })

    const backResponse = await response.json();
    if (response.ok) {
        return backResponse;
    } else {
        if (backResponse) {
            throw backResponse
        } else {
            throw new Error("Error Api CreateUser")
        }
    }
}