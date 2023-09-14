import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import styles from "./AdminPage.module.scss";
import MenuMyAccountAdmin from "../../components/MenuMyAccount/MenuMyAccountAdmin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecipeContext } from "../../context/RecipeContext";
import {
  deleteMealType,
  modifyMealTypeById,
} from "../../apis/mealType";
import AddMealType from "./components/AddMealType";

export default function AdminCookingType() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const { mealType } = useContext(RecipeContext);
  const [editingMealTypeId, setEditingMealTypeId] = useState(0);

  const userSchema = yup.object().shape({
    MEAL_TYPE_NAME: yup.string(),
  });

  /** Utilisation de useForm pour initialiser le formulaire et configurer la résolution de validation avec yupResolver : */
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  /**
   * Permet de supprimer une origine de cuisine
   * utilisation de sweetAlert2
   * @param {*} id
   */
  async function deleteMealTypeById(id) {
    console.log(id);
    Swal.fire({
      title: `Êtes-vous sûr de vouloir supprimer ${id.MEAL_TYPE_NAME}  ?`,
      text: "La suppression est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-la !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteMealType(id);
          console.log(response);
          Swal.fire(
            "Supprimé !",
            "Cette data a été supprimée.",
            "success"
          ).then(() => {
            window.location.reload();
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  /** @type {*}  modification d'une origine de cuisine*/
  const submit = handleSubmit(async (value) => {
    Swal.fire({
      title: ` Êtes-vous sûr de vouloir modifier "${value.MEAL_TYPE_NAME}" ? `,
      text: "",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, je veux modifier !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          clearErrors();
          value.mealTypeId = editingMealTypeId;
          console.log(value);
          await modifyMealTypeById(value);
          Swal.fire(
            "Modifié !",
            `L'origine ${value.MEAL_TYPE_NAME} a été modifiée.`,
            "success"
          ).then(() => {
            window.location.reload();
          });
        } catch (message) {
          setError("generic", { type: "generic", message });
        }
      }
    });
  });

  return (
    <>
      {user && user[0].USER_ROLE === "ADMIN" && (
        <div className="d-flex justify-content-start ">
          <MenuMyAccountAdmin />
          <div className={`${styles.tableau}`}>
            <div>
              <h2 className={`${styles.title} pl20`}>
                Tableau origine de la cuisine
              </h2>
            </div>
            <form>
              <table>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">nom</th>
                  </tr>
                </thead>
                <tbody>
                  {mealType.map((o) => {
                    return (
                      <tr key={o.MEAL_TYPE_ID}>
                        <th scope="row">{o.MEAL_TYPE_ID}</th>
                        <td>
                          {editingMealTypeId === o.MEAL_TYPE_ID ? (
                            <input
                              type="text"
                              defaultValue={o.MEAL_TYPE_NAME}
                              {...register("MEAL_TYPE_NAME")}
                            />
                          ) : (
                            <p scope="row">{o.MEAL_TYPE_NAME}</p>
                          )}
                          {errors.MEAL_TYPE_NAME && (
                            <p className="form-error">
                              {errors.MEAL_TYPE_NAME.message}
                            </p>
                          )}
                        </td>
                        {editingMealTypeId === o.MEAL_TYPE_ID ? (
                          <td className="d-flex">
                            <button
                              disabled={isSubmitting}
                              onClick={submit}
                              type="submit"
                              className="btn btn-primary"
                            >
                              Enregistrer
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setEditingMealTypeId(0);
                                setButtonDisabled(false);
                              }}
                              className="btn btn-primary-reverse"
                            >
                              Annuler
                            </button>
                          </td>
                        ) : (
                          <>
                            <td>
                              <button
                                onClick={() => {
                                  setEditingMealTypeId(o.MEAL_TYPE_ID);
                                  setButtonDisabled(true);
                                }}
                                type="button"
                                className="btn btn-primary-reverse"
                                id="modyf"
                                disabled={buttonDisabled}
                              >
                                Modifier
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary-reverse"
                                onClick={() =>
                                  deleteMealTypeById(o.MEAL_TYPE_ID)
                                }
                              >
                                Supprimer
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan="2">
                      Nombre total d'origine de cuisine:
                    </th>
                    <td colSpan="2">{mealType.length}</td>
                  </tr>
                </tfoot>
              </table>
            </form>
            <AddMealType />
          </div>
        </div>
      )}
    </>
  );
}
