import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";
import styles from "../AdminPage.module.scss";
import { createDietType } from "../../../apis/dietType";

export default function AddDietType() {
  const [showInput, setShowInput] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const newDietTypeSchema = yup.object().shape({
    newDietType: yup.string().required("Le champ est requis"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(newDietTypeSchema),
  });

  const submitAdd = handleSubmit(async (value) => {
    console.log(value);
    {
      Swal.fire({
        title: "Ajouter ce régime alimentaire ?",
        text: "",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui !",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            clearErrors();
            console.log(value);
            await createDietType(value);
            Swal.fire(
              "Ajouté !",
              `Le régime alimentaire ${value.newDietType} a été ajouté avec succès`,
              "success"
            ).then(() => {
              window.location.reload();
            });
          } catch (message) {
            setError("generic", { type: "generic", message });
          }
        }
      });
    }
  });

  return (
    <div>
      <div className="d-flex justify-content-end align-items-end">
        {!disabledButton && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setShowInput(true);
              setDisabledButton(true);
            }}
          >
            Ajouter
          </button>
        )}
      </div>
      <form>
        {showInput && (
          <div>
            <input
              type="text"
              placeholder="Nouveau régime alimentaire"
              className={`${styles.inputNewCookingType}`}
              {...register("newDietType")}
            />
            {errors.cookingType && (
              <p className="form-error">{errors.newDietType.message}</p>
            )}
            <button className="btn btn-primary" onClick={submitAdd}>
              Enregistrer
            </button>
            <button
              className="btn btn-primary-reverse"
              type="button"
              onClick={() => {
                setShowInput(false);
                setDisabledButton(false);
              }}
            >
              Annuler
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
