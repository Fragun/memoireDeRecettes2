import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { fetchUsers, signin as loginn } from "../../apis/auth";
import { signout as logout } from "../../apis/auth";
import { AuthContext } from "../../context";

export default function AuthProvider({ children }) {
    
    const initialUser = useLoaderData();
    const [user, setUser] = useState(initialUser);
    const [users, setUsers] = useState([]);
    console.log(users);

    async function signin(credentials) {
        const newUser = await loginn(credentials);
        setUser(newUser)
    };

    async function signout() {
        await logout();
        setUser(null);
    };

    async function fetchUser() {
        const users = await fetchUsers();
        setUsers(users)
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                signin,
                signout,
                users,
                fetchUser, 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}