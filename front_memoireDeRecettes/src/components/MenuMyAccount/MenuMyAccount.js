import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import styles from "./MenuMyAccount.module.scss"

export default function MenuMyAccount() {

    const { user } = useContext(AuthContext);
console.log(user[0]);
  return (
    <aside className="menuMyAccount mt20">
      <Link to="/profile">
        <button className="btn btn-primary p10 s10" >
          Vos informations personnelles
        </button>
      </Link>
      {user[0].USER_ROLE === 'ADMIN' && (
      <Link to="/admin">
      <button className={`${styles.adminSpace} btn btn-primary-reverse p10 s10 mt10`}>
        Espace admin
      </button>
        </Link>
      )}
    </aside>
  );
}
