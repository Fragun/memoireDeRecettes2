import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";


export default function ProtectedRouteAdmin({children}) {
    const { user } = useContext(AuthContext);
    console.log(user);
    return user[0].USER_ROLE === "ADMIN" ? children : <Navigate to="/" />;
}