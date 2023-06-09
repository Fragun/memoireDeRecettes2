import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";
import { createCooking } from "../../../apis/cookingType";
import  styles from "../AdminPage.module.scss";

export default function AddCookingType() {
  const [showInput, setShowInput] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const newCookingTypeSchema = yup.object().shape({
    newCookingType: yup.string().required("Le champ est requis"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(newCookingTypeSchema),
  });

  const submitAdd = handleSubmit(async (value) => {
    console.log(value);
    {
      Swal.fire({
        title: "Ajouter ce mode de cuisson ?",
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
            console.log("on est la");
            await createCooking(value);
            console.log("maintenant ici");
            Swal.fire(
              "Ajouté !",
              `Le mode de cuisson ${value.newCookingType} a été ajoutéavec succès`,
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
       { !disabledButton && <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setShowInput(true);
            setDisabledButton(true);
          }}
        >
             Ajouter
        </button>
       }
         
      </div>
      <form>
        {showInput && (
          <div>
            <input
              type="text"
              placeholder="Nouveau mode de cuisson"
              className={`${styles.inputNewCookingType}`}
              {...register("newCookingType")}
            />
            {errors.cookingType && (
              <p className="form-error">{errors.newCookingType.message}</p>
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
