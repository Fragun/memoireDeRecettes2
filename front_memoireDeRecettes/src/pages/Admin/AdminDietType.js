import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import styles from "./AdminPage.module.scss";
import MenuMyAccountAdmin from "../../components/MenuMyAccount/MenuMyAccountAdmin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RecipeContext } from "../../context/RecipeContext";
import { modifyDietTypeById, deleteDietType } from "../../apis/dietType";
import AddDietType from "./components/AddDietType";

export default function AdminDietType() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const { dietType } = useContext(RecipeContext);
  console.log(dietType);
  const [editingDietTypeId, setEditingDietTypeId] = useState(0);
  
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedDietTypes, setSortedDietTypes] = useState([]);
  const [sortedColumnId, setSortedColumnId] = useState("");

  useEffect(() => {
    let sorted = [...dietType];
  
    if (sortedColumnId === "id") {
      sorted = sorted.sort((a, b) =>
        sortOrder === "asc" ? a.DIET_TYPE_ID - b.DIET_TYPE_ID : b.DIET_TYPE_ID - a.DIET_TYPE_ID
      );
    }
  
    setSortedDietTypes(sorted);
  }, [dietType, sortOrder, sortedColumnId]);

  const handleSort = (columnId) => {
    if (columnId === sortedColumnId) {
      // Si la même colonne est cliquée, inversez l'ordre de tri
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Si une nouvelle colonne est cliquée, triez par ordre croissant
      setSortOrder("asc");
      setSortedColumnId(columnId);
    }
  };

  const userSchema = yup.object().shape({
    DIET_TYPE_NAME: yup.string(),
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
  async function deleteDietTypeById(id) {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "La suppression est irréversible",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText:'Annuler',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-la !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteDietType(id);
          Swal.fire(
            "Supprimée !",
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

  /** @type {*}  modification d'un régime alimentaire*/
  const submit = handleSubmit(async (value) => {
    Swal.fire({
      title: `Êtes-vous sûr de vouloir modifier cette donnée par "${value.DIET_TYPE_NAME}" ?`,
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
          value.dietTypeId = editingDietTypeId;
          console.log(value);
          await modifyDietTypeById(value);
          console.log("on est la");
          console.log("maintenant ici");
          Swal.fire(
            "Modifié !",
            `Ce régime alimentaire a été modifié par "${value.DIET_TYPE_NAME}".`,
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
                Tableau Régime alimentaire
              </h2>
            </div>
            <form>
              <table>
                <thead>
                  <tr>
                  <th scope="col" onClick={() => handleSort("id")}>ID</th>
                    <th scope="col">nom</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedDietTypes.map((d) => {
                    return (
                      <tr key={d.DIET_TYPE_ID}>
                        <th scope="row">{d.DIET_TYPE_ID}</th>
                        <td>
                          {editingDietTypeId === d.DIET_TYPE_ID ? (
                            <input
                              type="text"
                              defaultValue={d.DIET_TYPE_NAME}
                              {...register("DIET_TYPE_NAME")}
                            />
                          ) : (
                            <p scope="row">{d.DIET_TYPE_NAME}</p>
                          )}
                          {errors.DIET_TYPE_NAME && (
                            <p className="form-error">
                              {errors.DIET_TYPE_NAME.message}
                            </p>
                          )}
                        </td>
                        {editingDietTypeId === d.DIET_TYPE_ID ? (
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
                                setEditingDietTypeId(0);
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
                                  setEditingDietTypeId(d.DIET_TYPE_ID);
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
                                  deleteDietTypeById(d.DIET_TYPE_ID)
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
                    <td colSpan="2">{dietType.length}</td>
                  </tr>
                </tfoot>
              </table>
            </form>
            <AddDietType />
          </div>
        </div>
      )}
    </>
  );
}
