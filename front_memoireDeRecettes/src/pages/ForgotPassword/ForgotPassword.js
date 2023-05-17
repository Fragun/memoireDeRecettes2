import styles from "./ForgotPassword.module.scss";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { UpdateContext } from "../../context/UpdateContext";



export default function ForgotPassword() {
  const { forgotpassword } = useContext(UpdateContext);
  const { user } = useContext(AuthContext);
  const validationSchema = yup.object({
    user_mail: yup
      .string()
      .required("Ce champ doit être saisi")
      .email("Email non valide"),
  });

  const initialValues = {
    user_mail: "",
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
    console.log(values);
    try {
      clearErrors();
      await forgotpassword(values)
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <div
          className={`flex-fill d-flex align-items-center justify-content-center ${styles.ContainForm}`}
        >
          <form
            onSubmit={submit}
            className={`d-flex flex-column card p20 ${styles.form}`}
          >
            <h2 className="mb10 connexion">Connexion</h2>
            <div className="mb20 d-flex flex-column">
              <label htmlFor="user_mail" className="mb10">
                Email
              </label>
              <input type="email" name="user_mail" {...register("user_mail")} />
              {errors.user_mail && (
                <p className="form-error">{errors.user_mail.message}</p>
              )}
            </div>
            {errors.generic && (
              <p className="form-error">{errors.generic.message}</p>
            )}
            <div className="d-flex justify-content-center">
              <Link to="/login">
                <button type="button" className="btn btn-primary">
                  Cancel
                </button>
              </Link>
              <button disabled={isSubmitting} className="btn btn-primary">
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
