import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import styles from "./MenuMyAccount.module.scss";

export default function MenuMyAccountAdmin() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user[0].USER_ROLE === "ADMIN" && (
        <aside className="menuMyAccount">
          <Link to="/admin/users">
            <button className="btn btn-primary p10 s10 mt5">
              Utilisateurs
            </button>
          </Link>
          <Link to="/admin/recipes">
            <button className="btn btn-primary p10 s10 mt10">Recettes</button>
          </Link>
          <Link to="/admin/cookingType">
            <button className="btn btn-primary p10 s10 mt10">
              Modes de cuisson
            </button>
          </Link>
          <Link to="/admin">
            <button
              className={`${styles.adminSpace} btn btn-primary-reverse p10 s10 mt10`}
            >
              Espace admin
            </button>
          </Link>
        </aside>
      )}
    </>
  );
}
