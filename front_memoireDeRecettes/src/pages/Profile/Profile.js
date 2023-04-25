import { useContext } from "react";
import styles from "../addRecipe/AddRecipe.module.scss";
import { AuthContext } from "../../context";

export default function Profile() {

    const { user } = useContext(AuthContext);
    console.log(user);
    return (

        <div className={`${styles.rectangle} m30`}>
            <h1 className="text-align-center">Mon compte</h1>
            <form className="d-flex flex-column justify-content-center p20">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center">
                    <h2 className="align-items-center">Nom</h2>
                    <h2>Prénom</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="mr10 d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <input type="text"
                                    placeholder={`${user[0].USER_NAME}`}
                                    className={`${styles.input} `}
                                />
                            </div>
                        </div>
                        <div className="mr10 d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <input type="text"
                                    placeholder = {user[0].USER_PRENOM === undefined  ? 'Votre prénom ici' : user[0].USER_PRENOM}  
                                    className={`${styles.input} `}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">
                    Changer vos informations
                </button>
            </form>
        </div>
    )
}