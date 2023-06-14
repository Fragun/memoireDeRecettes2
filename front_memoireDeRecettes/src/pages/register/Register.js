import { useState } from "react";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { createUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";
import SweetAlert from "../components/alert/AlertSweet";
import ReactGA from 'react-ga4';

export default function Register() {

  const [clickCount, setClickCount] = useState(0)
  
  const trackButtonClick = () => {
    setClickCount(count + 1);
    ReactGA.event({
      action: "tentative d'inscription",
      category: "login_category",
      label: 'email',
      value: clickCount,
    });
  };

  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  function generateRandomUsername() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let username = "";

    // génère les 5 premières lettres aléatoires
    for (let i = 0; i < 5; i++) {
      username += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    // génère les 10 chiffres aléatoires
    for (let i = 0; i < 3; i++) {
      username += Math.floor(Math.random() * 3);
    }
    return username;
  }

  

  const yupSchema = yup.object({
    name: yup.string().required(false),
    pseudo: yup
      .string()
      .required("Vous pouvez renseigner ce champs avec un pseudo"),
    firstname: yup.string().required(),
    email: yup
      .string()
      .email("Vous devez saisir un email valide")
      .required("Ce champ doit être renseigné"),
    password: yup
      .string()
      .required()
      .min(5, "Le mot de passe doit contenir au moins 5 caractères")
      .max(50, "Le mot de passe doit contenir au plus 50 caractères"),
    confirm_password: yup
      .string()
      .required("Le mot de passe doit être confirmé")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
    condition: yup
      .string()
      .required("veuillez accepter les conditions générales d'utilisation"),
    createdOn: yup.date().default(() => new Date()),
    places: yup.array().of(
      yup.object({
        value: yup.string().required("Ce champ ne peut être vide"),
      })
    ),
  });

  const defaultValues = {
    pseudo: generateRandomUsername(),
    firstname: "",
    email: "",
    password: "",
    name: "",
    places: [],
    condition: "",
  };

  function addCount() {
    setCount(count + 1);
    if (count > 10) {
      alert("trop d'essais");
    }
  }

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      await createUser(values);
      SweetAlert("Bravo", "Vous êtes inscrit");
      navigate("/login");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className=" d-flex justify-content-center">
      <div className={`${styles.rectangle} m30`}>
        <h1 className="text-align-center">Inscription</h1>
        <form
          onSubmit={submit}
          className="d-flex flex-column justify-content-center align-items-center p20"
        >
          <div className="mb10 d-flex flex-column">
            <label htmlFor="fichier">Photo de profil</label>
            <input type="file" name="fichier" {...register("fichier")} />
          </div>
          {errors.generic && (
            <div className="mb10">
              <p className="form-error">{errors.generic.message.toString()}</p>
            </div>
          )}
          <div className="d-flex flex-column">
            <label className="mb10 pl20" htmlFor="pseudo">
              Pseudo :
            </label>
            <input type="text" id="pseudo" {...register("pseudo")} />
            {errors?.pseudo && <p>{errors.pseudo.message}</p>}
          </div>

          <div className="d-flex flex-column mt10">
            <label className="mb10 pl20" htmlFor="firstname">
              Prénom :
            </label>
            <input type="text" id="firstname" {...register("firstname")} />
            {errors?.firstname && <p>{errors.firstname.message}</p>}
          </div>
          <div className="d-flex flex-column mt10">
            <label className="mb10 pl20" htmlFor="name">
              Nom :
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors?.name && <p>{errors.name.message}</p>}
          </div>

          <div className="d-flex flex-column mt10">
            <label className="mb10 pl20" htmlFor="email">
              Adresse e-mail :
            </label>

            <input type="email" id="email" {...register("email")} />
            {errors?.email && <p>{errors.email.message}</p>}
          </div>

          <div className="d-flex flex-column mt10">
            <label className="mb10 pl20">Mot de passe :</label>
            <input type="password" id="password" {...register("password")} />
            {errors?.password && <p>{errors.password.message}</p>}
          </div>

          <div className="d-flex flex-column mt10 mb20">
            <label className="mb10 pl20" htmlFor="confirm_password">
              Confirmation du mot de passe :
            </label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirm_password")}
            />
            {errors?.confirm_password && (
              <p>{errors.confirm_password.message}</p>
            )}
          </div>
          <div className="d-flex flex-column align-items-between mb20">
            <label className="mb5" htmlFor="condition">
              Acceptez les conditions générales d'utilisations ? Lisez-les ici
            </label>
            <input type="checkbox" id="condition" {...register("condition")} />
            {errors?.condition && <p>{errors.condition.message}</p>}
          </div>
          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_RECAPTCHA}`}
            onChange={onChange}
          />

          <button
            onClick={() => {
              addCount();
              trackButtonClick()
            }}
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}
