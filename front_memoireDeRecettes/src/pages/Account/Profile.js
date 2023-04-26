import { useContext, useRef, useState } from "react";
import styles from "../addRecipe/AddRecipe.module.scss";
import { AuthContext } from "../../context";
import MenuMyAccount from "../../components/MenuMyAccount/MenuMyAccount";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";


export default function Profile() {

    const { user } = useContext(AuthContext);
    console.log(user);

    const [editMode, setEditMode] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const inputFileRef = useRef(null);


    function handleEdit() {
        setEditMode(true);
    }


    function handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            setAvatar(reader.result);
        };
    }
    function handleRemove() {
        setAvatar(null);
        inputFileRef.current.value = "";
      }

      const yupSchema = yup.object({
        name: yup
            .string()
            .required(false),
        pseudo: yup
            .string()
            .required("Vous pouvez renseigner ce champs avec un pseudo"),
        firstname: yup
            .string()
            .required(false),
        birthday: yup
            .string()
            .required(false),
        avatarUser: yup
            .string()
            .required(false),
        // password: yup
        //     .string()
        //     .required()
        //     .min(5, "Le mot de passe doit contenir au moins 5 caractères")
        //     .max(50, "Le mot de passe doit contenir au plus 50 caractères"),
        // confirm_password: yup
        //     .string()
        //     .required("Le mot de passe doit être confirmé")
        //     .oneOf(
        //         [yup.ref("password"), ""],
        //         "Les mots de passe ne correspondent pas"
        //    ),
      });
      const defaultValues = {
        pseudo: "",

        firstname: "",
        //password: "",
        name: "",
        birthday: "",
        avatarUser: "",
    };
    const {
        register,
        setError,
        handleSubmit,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues,
        resolver: yupResolver(yupSchema),
    });
    const submit = handleSubmit(async (values) => {
        setEditMode(false);
    });

    return (
        <div className="d-flex justify-content-center ">
            <MenuMyAccount />
            <section className={`${styles.rectangle} m30`}>
                <h2 className="text-align-center">Mon compte</h2>
                <div>
                    <input
                        type="file"
                        onChange={handleFileSelect}
                        className={`${styles.inputDouble}`}
                        disabled={!editMode}
                        ref={inputFileRef}
                        {...register("avatarUser")} />
                        {errors?.avatarUser && <p>{errors.avatarUser.message}</p>}
                    {avatar &&
                        <div>
                            <img className="imageAvatar" src={avatar} />
                            <button onClick={handleRemove}
                                className="btn btn-secundary">
                                Supprimer
                            </button>
                        </div>}
                </div>
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
                                <input type="date"
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
                        onSubmit={submit}
                            className="btn btn-secundary">
                            Enregistrer
                        </button>
                    )}
                </form>
            </section>
        </div>
    )
}