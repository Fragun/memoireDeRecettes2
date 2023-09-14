import { useContext, useRef, useState } from "react";
import styles from "../addRecipe/AddRecipe.module.scss";
import { AuthContext } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { modifyUser } from "../../apis/auth";
import ImageViewer from "../components/imageViewer/ImageViewer";

export default function Profile() {
  const { user } = useContext(AuthContext);
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
    reader.onload = function () {
      setAvatar(reader.result);
    };
  }

  function handleRemove() {
    setAvatar(null);
    inputFileRef.current.value = "";
  }

  const yupSchema = yup.object({
    name: yup.string().notRequired(),
    pseudo: yup
      .string()
      .required("Vous pouvez renseigner ce champs avec un pseudo"),
    firstname: yup.string().notRequired(),
    //birthday: yup.date().notRequired(),
    avatarUser: yup.string().notRequired(),
  });

  const defaultValues = {
    pseudo: user[0].USER_PSEUDO,
    firstname: user[0].USER_FIRSTNAME,
    name: user[0].USER_NAME,
    //birthday: "",
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

  const submit = handleSubmit(async (data) => {
    const userId = user[0].USER_ID;
    const formData = new FormData();
    if (avatar !== null) {
      formData.append("avatarUser", avatar);
    }
    formData.append("userId", userId);
    formData.append("name", data.name);
    formData.append("pseudo", data.pseudo);
    formData.append("firstname", data.firstname);
    // const birthdayInput = data.birthday;
    // const dateObject = new Date(birthdayInput);
    // const formattedBirthday = dateObject.toISOString().split("T")[0];
    // formData.append("birthday", formattedBirthday);

    try {
      setEditMode(false);
      clearErrors();
      await modifyUser(formData);
      //   navigate('/profile')
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  // let userBirthday = user[0].USER_BIRTHDAY.split("T")[0];

  // const dateObject = new Date(userBirthday);
  // const day = dateObject.getDate().toString().padStart(2, '0'); // Obtenez le jour (ajoute un 0 si nécessaire)
  // const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Obtenez le mois (ajoute un 0 si nécessaire) - notez que les mois sont indexés à partir de 0, donc nous ajoutons 1
  // const year = dateObject.getFullYear(); // Obtenez l'année

  // const formattedBirthday = `${day}-${month}-${year}`;

  return (
    <div className="d-flex justify-content-start ">
      {user[0] && (
        <section className={`${styles.rectangle} m30`}>
          <form
            onSubmit={handleSubmit(submit)}
            className="d-flex flex-column justify-content-center p20"
            encType="multipart/form-data"
          >
            <h2 className="text-align-center ">Mon compte</h2>
            <div>
              <input
                type="file"
                onChange={handleFileSelect}
                className={`${styles.inputDouble}`}
                disabled={!editMode}
                name="avatarUser"
                ref={inputFileRef}
              />
              {errors?.avatarUser && <p>{errors.avatarUser.message}</p>}

              <div className={`d-flex justify-content-end mr20`}>
                {user[0].USER_PHOTO && (
                  <ImageViewer imageData={user[0].USER_PHOTO} />
                )}
                {avatar && (
                  <div className="d-flex align-items-center">
                    <i class="las la-exchange-alt la-3x"></i>
                    <img
                      className="imageAvatar"
                      src={avatar}
                      alt="nouvel avatar"
                    />
                    <button
                      onClick={handleRemove}
                      className="btn btn-secundary"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h3 className="ml20">Nom</h3>
            <div className="mr10 d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="text"
                  placeholder={`${user[0].USER_NAME}`}
                  className={`${styles.inputDouble}`}
                  disabled={!editMode}
                  {...register("name")}
                />
                {errors?.name && <p>{errors.name.message}</p>}
              </div>
            </div>

            <h3 className="ml20">Prénom</h3>
            <div className="mr10 d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="text"
                  placeholder={
                    user[0].USER_FIRSTNAME
                      ? user[0].USER_FIRSTNAME
                      : "Votre prénom ici"
                  }
                  className={`${styles.inputDouble} `}
                  disabled={!editMode}
                  {...register("firstname")}
                />
                {errors?.firstname && <p>{errors.firstname.message}</p>}
              </div>
            </div>
            <h3 className="ml20">Pseudo</h3>
            <div className="mr10 d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="text"
                  placeholder={`${user[0].USER_PSEUDO}`}
                  className={`${styles.inputDouble} `}
                  disabled={!editMode}
                  {...register("pseudo")}
                />
                {errors?.pseudo && <p>{errors.pseudo.message}</p>}
              </div>
            </div>

            {/* <h3>Date de naissance</h3>
            <div className="mr10 d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="date"
                  className={`${styles.inputDouble} `}
                  {...register("birthday")}
                  value={formattedBirthday}
                />
                {errors?.birthday && <p>{errors.birthday.message}</p>}
              </div>
            </div> */}
            <div className="d-flex justify-content-center">
              {editMode && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-secundary mt10 width200"
                >
                  Enregistrer
                </button>
              )}
            </div>
          </form>
          <div className="d-flex justify-content-center">
            {!editMode && (
              <button onClick={handleEdit} className="btn mt10 width200 mb10">
                Activer la modification
              </button>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
