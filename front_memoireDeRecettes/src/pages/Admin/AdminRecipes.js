import { useContext, useEffect, useState } from "react";
import styles from "./AdminPage.module.scss";
import { deleteRecipe, getRecipe, modifyRecipe } from "../../apis/recipe";
//import AlertYorN from "../components/alert/AlertYorN";
import Swal from "sweetalert2";
import { RecipeContext } from "../../context/RecipeContext";
import { AuthContext } from "../../context";
import MenuMyAccountAdmin from "../../components/MenuMyAccount/MenuMyAccountAdmin";

export default function AdminRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [count, setCount] = useState(0);
  console.log(count);
  const [modifiedValues, setModifiedValues] = useState({});
  console.log(modifiedValues);
  const { user } = useContext(AuthContext);

  const {
    mealType,
    season,
    origin,
    dietType,
    mealMoment,
    ustensils,
    ingredients,
  } = useContext(RecipeContext);

  /**
   * récupération de toutes les recettes dans le useState 'recipes'
   *
   */
  async function fetchRecipes() {
    try {
      const recipes = await getRecipe();
      setRecipes(recipes);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, []);

  function handleModifyinput(id) {
    if (count === 1) {
      setIsEditing(true);
    }
    if (count === 2) {
      handleModifyRecipe(id);
      setCount(0);
      setIsEditing(false);
    }
  }

  async function handleModifyRecipe(id) {
    console.log(id);
    try {
      const updatedFields = modifiedValues;
      setModifiedValues({});
      await modifyRecipe(updatedFields, id);

      fetchRecipes();
    } catch (error) {
      console.error(error);
    }
  }

  function handleValueChange(recipeId, field, value) {
    // Vérifier si la valeur est en dehors de la plage spécifiée
    if (field === "RECIPE_PRICE" || "RECIPE_DIFFICULTY") {
      if (value < 0) {
        value = 0;
      } else if (value > 5) {
        value = 5;
      }
    }
    setModifiedValues((prevValues) => ({
      ...prevValues,
      [recipeId]: {
        ...prevValues[recipeId],
        [field]: value,
      },
    }));
  }

  /**
   * Permet de supprimer une recette selon son id, puis met à jour la liste des recettes
   * sweetAlert2 demande confirmation de suppression
   * @param {*} recipeId
   */
  async function handleDeleteRecipe(recipeId) {
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
          await deleteRecipe(recipeId);
          fetchRecipes();
          Swal.fire("Supprimé !", "Votre fichier a été supprimé.", "success");
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  return (
    <>
      {user && user[0].USER_ROLE === "ADMIN" && (
        <div className="d-flex justify-content-start ">
          <MenuMyAccountAdmin />
          <div className={`${styles.tableau}`}>
            <div>
              <h2 className={`${styles.title}`}>Tableau Recettes</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date de publication</th>
                  <th scope="col">Nombre de couvert</th>
                  <th scope="col">Difficulté</th>
                  <th scope="col">Estimation du prix</th>
                  <th scope="col">Temps de préparation</th>
                  <th scope="col">Temps de cuisson</th>
                  <th scope="col">Nom du chef</th>
                  <th scope="col">Type de repas</th>
                  <th scope="col">Origine du plat</th>
                  <th scope="col">Type de régime</th>
                  <th scope="col">Saison du plat</th>
                  <th scope="col">Type de cuisson</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe) => {
                  let date = new Date(recipe.RECIPE_PUBLICATION_DATE);

                  return (
                    <tr>
                      <th scope="row">{recipe.RECIPE_ID}</th>
                      <td>
                        {recipe.RECIPE_TITLE}
                        {isEditing && (
                          <input
                            type="text"
                            defaultValue={recipe.RECIPE_TITLE || ""}
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_TITLE",
                                e.target.value
                              )
                            }
                          />
                        )}
                      </td>
                      <td>
                        {recipe.RECIPE_DESCRIPTION}
                        {isEditing && (
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
                        )}
                      </td>
                      <td>
                        {date.toLocaleDateString()} <br />
                        {date.toLocaleTimeString()}
                      </td>
                      <td>{recipe.RECIPE_NUMBER_PLATE} assiettes</td>
                      <td>
                        {recipe.RECIPE_DIFFICULTY} gants
                        {isEditing && (
                          <input
                            type="number"
                            min="0"
                            max="5"
                            defaultValue={recipe.RECIPE_DIFFICULTY || ""}
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_DIFFICULTY",
                                e.target.value
                              )
                            }
                          />
                        )}
                      </td>
                      <td>
                        {recipe.RECIPE_PRICE}/5 NOT€
                        {isEditing && (
                          <input
                            type="number"
                            min="0"
                            max="5"
                            defaultValue={recipe.RECIPE_PRICE || ""}
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_PRICE",
                                e.target.value
                              )
                            }
                          />
                        )}
                      </td>
                      <td>
                        {recipe.PREP_TIME}
                        {isEditing && (
                          <input
                            type="text"
                            defaultValue={recipe.PREP_TIME || ""}
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "PREP_TIME",
                                e.target.value
                              )
                            }
                          />
                        )}
                      </td>
                      <td>
                        {recipe.COOKING_TIME}
                        {isEditing && (
                          <input
                            type="text"
                            defaultValue={recipe.COOKING_TIME || ""}
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "COOKING_TIME",
                                e.target.value
                              )
                            }
                          />
                        )}
                      </td>
                      <td>
                        {recipe.USER_NAME} {recipe.USER_FIRSTNAME}
                      </td>
                      <td>
                        {recipe.NOM_TYPE_DE_REPAS}
                        {isEditing && (
                          <select
                            id="recipeType"
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_MOMENT",
                                e.target.value
                              )
                            }
                            defaultValue={recipe.ID_TYPE_DE_REPAS}
                          >
                            {mealMoment.map((meal) => (
                              <option
                                key={meal.ID_TYPE_DE_REPAS}
                                value={meal.ID_TYPE_DE_REPAS}
                              >
                                {meal.NOM_TYPE_DE_REPAS}
                              </option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td>
                        {recipe.MEAL_TYPE_NAME}
                        {isEditing && (
                          <select
                            id="mealType"
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_MEAL_TYPE",
                                e.target.value
                              )
                            }
                            defaultValue={recipe.MEAL_TYPE_ID}
                          >
                            {mealType.map((meal) => (
                              <option
                                key={meal.MEAL_TYPE_ID}
                                value={meal.MEAL_TYPE_ID}
                              >
                                {meal.MEAL_TYPE_NAME}
                              </option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td>
                        {recipe.DIET_TYPE_NAME}
                        {isEditing && (
                          <select
                            id="dietType"
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_DIET_TYPE",
                                e.target.value
                              )
                            }
                            defaultValue={recipe.DIET_TYPE_ID}
                          >
                            {dietType.map((diet) => (
                              <option
                                key={diet.DIET_TYPE_ID}
                                value={diet.DIET_TYPE_ID}
                              >
                                {diet.DIET_TYPE_NAME}
                              </option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td>
                        {recipe.SEASON_NAME}
                        {isEditing && (
                          <select
                            id="season"
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_SEASON",
                                e.target.value
                              )
                            }
                            defaultValue={recipe.SEASON_ID}
                          >
                            {season.map((s) => (
                              <option key={s.SEASON_ID} value={s.SEASON_ID}>
                                {s.SEASON_NAME}
                              </option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td>
                        {recipe.COOKING_TYPE_NAME}
                        {isEditing && (
                          <select
                            id="cooking_principal"
                            onChange={(e) =>
                              handleValueChange(
                                recipe.RECIPE_ID,
                                "RECIPE_COOKING_PRINCIPAL",
                                e.target.value
                              )
                            }
                            defaultValue={recipe.COOKING_TYPE_ID}
                          >
                            {origin.map((o) => (
                              <option
                                key={o.COOKING_TYPE_ID}
                                value={o.COOKING_TYPE_ID}
                              >
                                {o.COOKING_TYPE_NAME}
                              </option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary-reverse"
                          onClick={() => {
                            setCount(count + 1);
                            handleModifyinput(recipe.RECIPE_ID);
                          }}
                        >
                          Modifier
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary-reverse"
                          onClick={() => handleDeleteRecipe(recipe.RECIPE_ID)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan="2">
                    Nombre total d'albums
                  </th>
                  <td colSpan="2">77</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
