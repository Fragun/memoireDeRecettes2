import { useContext, useRef, useState } from "react";
import styles from "../addRecipe/AddRecipe.module.scss";
import { AuthContext } from "../../context";
import MenuMyAccount from "../../components/MenuMyAccount/MenuMyAccount";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { modifyUser } from "../../apis/auth";


export default function Profile() {

    const { user } = useContext(AuthContext);
    //console.log(user);

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
      });

      //console.log(yupSchema);
      const defaultValues = {
        pseudo: user[0].USER_PSEUDO,
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
        console.log(values);
        try {
            setEditMode(false);
          clearErrors();
          await modifyUser(values);
        //   navigate('/profile')
        } catch (message) {
          setError("generic", { type: "generic", message })
        }
      });

    return (
        <div className="d-flex justify-content-center ">
            <MenuMyAccount />
            <section className={`${styles.rectangle} m30`}>
            <form onSubmit={submit} className="d-flex flex-column justify-content-center p20">
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
                                        {...register("name")} />
                                        {errors?.name && <p>{errors.name.message}</p>}
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
                                        {...register("firstname")} />
                                        {errors?.firstname && <p>{errors.firstname.message}</p>}
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
                                        {...register("pseudo")} />
                                        {errors?.pseudo && <p>{errors.pseudo.message}</p>}
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
                                    {...register("birthday")} />
                                    {errors?.birthday && <p>{errors.birthday.message}</p>}
                            </div>
                        </div>
                    </div>
                    

                    {editMode && (
                        <button
                        disabled={isSubmitting}
                            className="btn btn-secundary">
                            Enregistrer
                        </button>
                    )}               
                     {!editMode && (
                        <button
                            onClick={handleEdit}
                            className="btn btn-primary">
                            Activer la modification
                        </button>
                    )}
                </form>

            </section>
        </div>
    )
}