import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import styles from "./AdminPage.module.scss";
import MenuMyAccountAdmin from "../../components/MenuMyAccount/MenuMyAccountAdmin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecipeContext } from "../../context/RecipeContext";
import { deleteMoment, modifyMomentById } from "../../apis/moment";
import AddMoment from "./components/AddMoment";

export default function AdminMoment() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const { mealMoment } = useContext(RecipeContext);
  const [editingMomentId, setEditingMomentId] = useState(0);

  const userSchema = yup.object().shape({
    NOM_TYPE_DE_REPAS: yup.string(),
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
   * Permet de supprimer un type de repas
   * utilisation de sweetAlert2
   * @param {*} id
   */
  async function deleteMomentById(id) {
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
          const response = await deleteMoment(id);
          console.log(response);
          Swal.fire(
            "Supprimé !",
             `Cette data a été supprimée.`,
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

  /** @type {*}  modification du type de repas*/
  const submit = handleSubmit(async (value) => {
    Swal.fire({
      title: `Êtes-vous sûr de vouloir modifier ${value.NOM_TYPE_DE_REPAS} ?`,
      text: "",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Oui, je veux modifier ${value.NOM_TYPE_DE_REPAS} !`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          clearErrors();
          value.momentId = editingMomentId;
          console.log(value);
          await modifyMomentById(value);
          Swal.fire(
            "Modifié !",
            `${value.NOM_TYPE_DE_REPAS} a été modifié.`,
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
                Tableau Type de repas
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
                  {mealMoment.map((m) => {
                    return (
                      <tr key={m.ID_TYPE_DE_REPAS}>
                        <th scope="row">{m.ID_TYPE_DE_REPAS}</th>
                        <td>
                          {editingMomentId === m.ID_TYPE_DE_REPAS ? (
                            <input
                              type="text"
                              defaultValue={m.NOM_TYPE_DE_REPAS}
                              {...register("NOM_TYPE_DE_REPAS")}
                            />
                          ) : (
                            <p scope="row">{m.NOM_TYPE_DE_REPAS}</p>
                          )}
                          {errors.NOM_TYPE_DE_REPAS && (
                            <p className="form-error">
                              {errors.NOM_TYPE_DE_REPAS.message}
                            </p>
                          )}
                        </td>
                        {editingMomentId === m.ID_TYPE_DE_REPAS ? (
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
                                setEditingMomentId(0);
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
                                  setEditingMomentId(m.ID_TYPE_DE_REPAS);
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
                                  deleteMomentById(m.ID_TYPE_DE_REPAS)
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
                    <td colSpan="2">{mealMoment.length}</td>
                  </tr>
                </tfoot>
              </table>
            </form>
            <AddMoment />
          </div>
        </div>
      )}
    </>
  );
}
