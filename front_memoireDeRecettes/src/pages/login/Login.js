import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import styles from "../register/Register.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

export default function Login() {
  const { signin, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email non valide")
      .required("Ce champ doit être saisi"),
    password: Yup.string()
      .required("Required")
      .min(6, "Le mot de passe doit contenir 6 caractères min."),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      clearErrors();
      await signin(values);
      navigate("/");
    } catch (message) {
      setError("generic", { type: "generic", message });

      ReactGA.event({
        action: "login_error",
        category: "login_category",
        label: message,
      });
    }
  });

  return (
    <>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <div className=" d-flex justify-content-center">
          <div className={`${styles.rectangle} m30`}>
            <h1 className="text-align-center">Connexion</h1>
            <form
              onSubmit={submit}
              className="d-flex flex-column justify-content-center align-items-center p20"
            >
              <div className="d-flex flex-column">
                <label htmlFor="email" className="mb10 pl20">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>

              <div className="d-flex flex-column mt10 mb20">
                <label htmlFor="password" className="mb10 pl20">
                  Mot de passe :
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="form-error">{errors.password.message}</p>
                )}
              </div>
              {errors.generic && (
                <p className="form-error">{errors.generic.message}</p>
              )}
              <Link to="/forgotpassword">
                <p className={`${styles.forgetPassword}`}>
                  Mot de passe oublié?
                </p>
              </Link>
              <div className="">
                <button disabled={isSubmitting} className="btn btn-primary">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
