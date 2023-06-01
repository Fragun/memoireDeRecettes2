import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import styles from "./AdminPage.module.scss"


export default function AdminUsers() {
  const { user, users, fetchUser } = useContext(AuthContext);
  console.log(user);
  console.log(users);

  useEffect(() => {
    fetchUser();
  }, []);

const usersNumber = users.length;
console.log(usersNumber);

 
  return (
    <>
      {user[0].USER_ROLE === "ADMIN" && (
        <>
          <div>
            <h1 className={`${styles.title}`}>tableau utilisateurs</h1>
          </div>
          <div className={`${styles.tableau}`}>
            <table>
              <caption>Liste des utilisateurs</caption>
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
                    let date = new Date(u.USER_DATETIME_CREATION );
                    return(
                        <tr>
                        <th scope="row">{u.USER_ID}</th>
                        <td>
                          {u.USER_NAME}
                        </td>
                        <td>
                          {u.USER_FIRSTNAME}
                          {/* {isEditing && (
                            <input
                              type="text"
                              defaultValue={recipe.RECIPE_DESCRIPTION || ""}
                              onChange={(e) =>
                                handleValueChange(
                                  recipe.RECIPE_ID,
                                  "RECIPE_DESCRIPTION",
                                  e.target.value
                                )
                              }
                            />
                          )} */}
                        </td>
                        <td>
                          {u.USER_PSEUDO}
                        </td>
                        <td>
                          {u.USER_BIRTHDAY}
                        </td>
                        <td>
                          {u.USER_EMAIL}
                        </td>
                        <td>
                          {u.USER_ROLE}
                        </td>
                        <td>
                          {u.USER_UTILISATION_CONDITION}
                        </td>
                        <td>
                          {date.toLocaleDateString()} <br />
                          {date.toLocaleTimeString()}
                        </td>
                        <td>
                          {user.USER_GENDER}
                        </td>
                        <td>
                          <button
                            className="btn btn-primary-reverse"
                          >
                            Modifier
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary-reverse"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    )
                   
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan="2">
                    Nombre total d'utilisateur inscrit : 
                  </th>
                  <td colSpan="2">{usersNumber}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </>
  );
}
