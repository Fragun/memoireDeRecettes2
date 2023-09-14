import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  fetchUsers,
  signin as loginn,
  signout as logout,
  modifyUser,
} from "../../apis/auth";
import { AuthContext } from "../../context";
import { deleteUserById } from "../../apis/users";

export default function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);
  const [users, setUsers] = useState([]);

  async function signin(credentials) {
    const newUser = await loginn(credentials);
    setUser(newUser);
  }

  async function signout() {
    await logout();
    setUser(null);
  }

  async function fetchUser() {
    const users = await fetchUsers();
    setUsers(users);
  }

  async function deleteUser(idUser) {
    await deleteUserById(idUser);
  }

  async function modifyUserById(user) {
    await modifyUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signout,
        users,
        fetchUser,
        deleteUser,
        modifyUserById,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
