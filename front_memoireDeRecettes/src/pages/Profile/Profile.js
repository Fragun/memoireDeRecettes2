import { useContext } from "react"
import styles from "../Profile/Profile.module.scss"
import { AuthContext } from "../../context";

export default function Profile() {

    const {user} = useContext(AuthContext);
console.log(user);
    return (
        <div className={`flex-fill d-flex justify-content-center align-items-center`}>
            <div className={`${styles.profileContainer} card p20`}>
                <ul>
                    <li>Nom : {user[0].USER_NAME}</li>
                    <li>Email : {user[0].USER_EMAIL}</li>
                </ul>
            </div>
        </div>
    )
}