import { useContext, useState } from "react";
import styles from "../addRecipe/AddRecipe.module.scss";
import { AuthContext } from "../../context";
import MenuMyAccount from "../../components/MenuMyAccount/MenuMyAccount";


export default function Profile() {

    const { user } = useContext(AuthContext);
    console.log(user);

    const [editMode, setEditMode] = useState(false);


    function handleEdit() {
        setEditMode(true);
    }
    function handleSubmit() {
        setEditMode(false);
    }

    return (
        <div className="d-flex justify-content-center ">
            <MenuMyAccount />
            <section className={`${styles.rectangle} m30`}>
                <h2 className="text-align-center">Mon compte</h2>
                <form className="d-flex flex-column justify-content-center p20">
                    <div className="d-flex justify-content-center">
                        <div className="flex-column">
                            <h3 className="ml20">Nom</h3>
                            <div className="mr10 d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <input type="text"
                                        placeholder={`${user[0].USER_NAME}`}
                                        className={`${styles.inputDouble}`}
                                        disabled={!editMode}
                                        />      
                                </div>
                            </div>
                        </div>
                        <div className="flex-column">
                            <h3 className="ml20">Prénom</h3>
                            <div className="mr10 d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <input type="text"
                                        placeholder={user[0].USER_FIRSTNAME === undefined ? 'Votre prénom ici' : user[0].USER_FIRSTNAME}
                                        className={`${styles.inputDouble} `}
                                        disabled={!editMode}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt10">
                        <div className="flex-column">
                            <h3 className="ml20">Pseudo</h3>
                            <div className="mr10 d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <input type="text"
                                        placeholder={`${user[0].USER_PSEUDO}`}
                                        className={`${styles.inputDouble} `}
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-column">
                            <h3 className="ml20">Mot de passe</h3>
                            <div className="mr10 d-flex">
                                <div className={`${styles.inputStart}`}>  
                                </div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                        <input type="text"
                                            placeholder="******"
                                            className={`${styles.inputDouble} `}
                                            disabled={!editMode}
                                            />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex-column">
                        <h3 >Date de naissance</h3>
                        <div className="mr10 d-flex">
                            <div className={`${styles.inputStart}`}>
                            </div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <input type="text"
                                    placeholder={user[0].USER_BIRTHDAY === undefined ? 'Votre prénom ici' : user[0].USER_BIRTHDAY}
                                    className={`${styles.inputDouble} `}
                                />
                            </div>
                        </div>
                    </div>

                    {!editMode && (
                                        <button
                                            onClick={handleEdit}
                                            className="btn btn-primary">
                                            Activer la modification
                                        </button>
                                    )}
                                    {editMode && (
                                        <button
                                            onClick={handleSubmit}
                                            className="btn btn-secondary">
                                            Enregistrer
                                        </button>
                                    )}
                </form>
            </section>
        </div>
    )
}