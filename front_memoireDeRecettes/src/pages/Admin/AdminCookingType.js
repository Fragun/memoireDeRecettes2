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
  deleteCookingType,
  modifyCookingTypeById,
} from "../../apis/cookingType";
import AddCookingType from "./components/AddCookingType";

export default function AdminCookingType() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const { origin } = useContext(RecipeContext);
  const [editingCookingTypeId, setEditingCookingTypeId] = useState(0);

  const userSchema = yup.object().shape({
    COOKING_TYPE_NAME: yup.string(),
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
   * Permet de supprimer un mode de cuisson
   * utilisation de sweetAlert2
   * @param {*} id
   */
  async function deleteCookingTypeById(id) {
    console.log(id);
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "La suppression est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-la !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteCookingType(id);
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

  /** @type {*}  modification d'un mode de cuisson*/
  const submit = handleSubmit(async (value) => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir modifier le nom du mode de cuisson ?",
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
          value.cookingTypeId = editingCookingTypeId;
          console.log(value);
          await modifyCookingTypeById(value);
          console.log("on est la");
          console.log("maintenant ici");
          Swal.fire(
            "Modifié !",
            "Ce Mode de cuisson a été modifié.",
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
      {user[0].USER_ROLE === "ADMIN" && (
        <div className="d-flex justify-content-start ">
          <MenuMyAccountAdmin />
          <div className={`${styles.tableau}`}>
            <div>
              <h2 className={`${styles.title} pl20`}>
                Tableau Mode de cuisson
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
                  {origin.map((o) => {
                    return (
                      <tr key={o.COOKING_TYPE_ID}>
                        <th scope="row">{o.COOKING_TYPE_ID}</th>
                        <td>
                          {editingCookingTypeId === o.COOKING_TYPE_ID ? (
                            <input
                              type="text"
                              defaultValue={o.COOKING_TYPE_NAME}
                              {...register("COOKING_TYPE_NAME")}
                            />
                          ) : (
                            <p scope="row">{o.COOKING_TYPE_NAME}</p>
                          )}
                          {errors.COOKING_TYPE_NAME && (
                            <p className="form-error">
                              {errors.COOKING_TYPE_NAME.message}
                            </p>
                          )}
                        </td>
                        {editingCookingTypeId === o.COOKING_TYPE_ID ? (
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
                                setEditingCookingTypeId(0);
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
                                  setEditingCookingTypeId(o.COOKING_TYPE_ID);
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
                                  deleteCookingTypeById(o.COOKING_TYPE_ID)
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
                      Nombre total de mode de cuisson :
                    </th>
                    <td colSpan="2">{origin.length}</td>
                  </tr>
                </tfoot>
              </table>
            </form>
            <AddCookingType />
          </div>
        </div>
      )}
    </>
  );
}
