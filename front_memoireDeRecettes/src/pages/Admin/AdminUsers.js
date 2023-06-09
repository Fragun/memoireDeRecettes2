import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import styles from "./AdminPage.module.scss";
import MenuMyAccountAdmin from "../../components/MenuMyAccount/MenuMyAccountAdmin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import "moment/locale/fr";

export default function AdminUsers() {
  const { user, users, fetchUser, deleteUser, modifyUserById } =
    useContext(AuthContext);
  const [editing, setEditing] = useState(null);
  //console.log(editing);

  const userSchema = yup.object().shape({
    USER_FIRSTNAME: yup.string(),
    USER_NAME: yup.string(),
    USER_PSEUDO: yup.string(),
    USER_ROLE: yup.string(),
    USER_UTILISATION_CONDITION: yup.boolean(),
    USER_GENDER: yup.number(),
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

  useEffect(() => {
    fetchUser();
  }, []);

  async function deleteUserById(idUser) {
    console.log(idUser);
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
          await deleteUser(idUser);
          fetchUser();
          Swal.fire("Supprimé !", "Ce compte a été supprimé.", "success").then(
            () => {
              window.location.reload();
            }
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  const submit = handleSubmit(async (value) => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir modifier cet utilisateur ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, je veux modifier !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(value);
          clearErrors();
          value.userId = editing;
          console.log("on est ici");
          await modifyUserById(value);
          console.log("on est la");
          await fetchUser();
          console.log("maintenant ici");
          Swal.fire("Modifié !", "Ce compte a été modifié.", "success");
          window.location.reload();
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
              <h2 className={`${styles.title} pl20`}>Tableau Utilisateurs</h2>
            </div>
            <form>
              <table>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Pseudo</th>
                    <th scope="col">Date d'anniversaire</th>
                    <th scope="col">e-mail</th>
                    <th scope="col">Role</th>
                    <th scope="col">Condition d'utilisation</th>
                    <th scope="col">Date de création du compte</th>
                    <th scope="col">Genre</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => {
                    let date = new Date(u.USER_DATETIME_CREATION);
                    return (
                      <tr key={u.USER_ID}>
                        <th scope="row">{u.USER_ID}</th>
                        <td>
                          {editing === u.USER_ID ? (
                            <input
                              type="text"
                              defaultValue={u.USER_NAME}
                              {...register("USER_NAME")}
                            />
                          ) : (
                            <p>{u.USER_NAME}</p>
                          )}
                          {errors.USER_NAME && (
                            <p className="form-error">
                              {errors.USER_NAME.message}
                            </p>
                          )}
                        </td>
                        <td>
                          {editing === u.USER_ID ? (
                            <input
                              type="text"
                              defaultValue={u.USER_FIRSTNAME}
                              {...register("USER_FIRSTNAME")}
                            />
                          ) : (
                            <p>{u.USER_FIRSTNAME}</p>
                          )}
                          {errors.USER_FIRSTNAME && (
                            <p className="form-error">
                              {errors.USER_FIRSTNAME.message}
                            </p>
                          )}
                        </td>
                        <td>
                          {editing === u.USER_ID ? (
                            <input
                              type="text"
                              defaultValue={u.USER_PSEUDO}
                              {...register("USER_PSEUDO")}
                            />
                          ) : (
                            <p>{u.USER_PSEUDO}</p>
                          )}
                          {errors.USER_PSEUDO && (
                            <p className="form-error">
                              {errors.USER_PSEUDO.message}
                            </p>
                          )}
                        </td>
                        <td>
                          {editing === u.USER_ID ? (
                            <input
                              type="date"
                              defaultValue={moment(u.USER_BIRTHDAY).format(
                                "YYYY-MM-DD"
                              )}
                            />
                          ) : (
                            <>
                              {u.USER_BIRTHDAY !== null ? (
                                <p>
                                  {moment(u.USER_BIRTHDAY)
                                    .locale("fr")
                                    .format("LL")}
                                </p>
                              ) : (
                                <p>non renseignée</p>
                              )}
                            </>
                          )}
                        </td>
                        <td>{u.USER_EMAIL}</td>
                        <td>
                          {editing === u.USER_ID ? (
                            <select
                              defaultValue={u.USER_ROLE}
                              {...register("USER_ROLE")}
                            >
                              <option value="USER">USER</option>
                              <option value="ADMIN">ADMIN</option>
                            </select>
                          ) : (
                            <p>{u.USER_ROLE}</p>
                          )}
                          {errors.USER_ROLE && (
                            <p className="form-error">
                              {errors.USER_ROLE.message}
                            </p>
                          )}
                        </td>
                        <td>
                          {editing === u.USER_ID ? (
                            <select
                              defaultValue={u.USER_UTILISATION_CONDITION}
                              {...register("USER_UTILISATION_CONDITION")}
                            >
                              <option value="1">Oui</option>
                              <option value="0">Non</option>
                            </select>
                          ) : (
                            <p>{u.USER_UTILISATION_CONDITION}</p>
                          )}
                          {errors.USER_UTILISATION_CONDITION && (
                            <p className="form-error">
                              {errors.USER_UTILISATION_CONDITION.message}
                            </p>
                          )}
                        </td>
                        <td>
                          {date.toLocaleDateString()} <br />
                          {date.toLocaleTimeString()}
                        </td>
                        {editing === u.USER_ID ? (
                          <td>
                            <select
                              defaultValue={u.USER_GENDER}
                              {...register("USER_GENDER")}
                            >
                              <option value="2">Homme</option>
                              <option value="1">Femme</option>
                              <option value="3">Autre</option>
                            </select>
                          </td>
                        ) : (
                          <th scope="row">{u.USER_GENDER}</th>
                        )}
                        {errors.USER_GENDER && (
                          <p className="form-error">
                            {errors.USER_GENDER.message}
                          </p>
                        )}
                        <>
                          {editing === u.USER_ID ? (
                            <>
                              <td>
                                <button
                                  disabled={isSubmitting}
                                  onClick={submit} // Appel à la fonction submit ici
                                  type="button" // Changer le type en "button"
                                  className="btn btn-primary"
                                >
                                  Enregistrer
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => setEditing(null)}
                                  className="btn btn-primary-reverse"
                                >
                                  Annuler
                                </button>
                              </td>
                            </>
                          ) : (
                            <>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => setEditing(u.USER_ID)}
                                  className="btn btn-primary-reverse"
                                >
                                  Modifier
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-primary-reverse"
                                  onClick={() => deleteUserById(u.USER_ID)}
                                  type="button"
                                >
                                  Supprimer
                                </button>
                              </td>
                            </>
                          )}
                        </>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan="2">
                      Nombre total d'utilisateur inscrit :
                    </th>
                    <td colSpan="2">{users.length}</td>
                  </tr>
                </tfoot>
              </table>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
